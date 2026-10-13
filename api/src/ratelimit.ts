import { isIPv4, isIPv6 } from 'node:net';

// Per-pod limits for the contact form. Best-effort across replicas (each pod keeps its own
// state); the honeypot and the global send budget are the backstops.
//
// - Per-client: MAX_PER_KEY attempts per WINDOW_MS, counted BEFORE the body is read, so a client
//   cannot make the pod parse bodies once it is limited. The key is a normalised address prefix
//   (IPv4 /32, IPv6 /64): one host rotating addresses inside its own /64 stays one client.
// - Memory: at most MAX_KEYS clients are tracked (least recently seen evicted first); expired
//   entries are swept on a timer, never on the request path.
// - Global: at most GLOBAL_MAX_SENDS emails per GLOBAL_WINDOW_MS per pod, whoever asks. It caps
//   what a botnet (one budget per source) can make the pod send.

export const WINDOW_MS = 10 * 60 * 1000;
export const MAX_PER_KEY = 5;
export const MAX_KEYS = 10_000;
export const GLOBAL_WINDOW_MS = 10 * 60 * 1000;
export const GLOBAL_MAX_SENDS = 30;
const SWEEP_INTERVAL_MS = 60 * 1000;

/** Expands an IPv6 address (no zone, no brackets) to its eight 16-bit groups. */
function ipv6Groups(addr: string): number[] {
  let head = addr;
  let tailV4: number[] = [];
  const lastColon = head.lastIndexOf(':');
  const last = head.slice(lastColon + 1);
  if (isIPv4(last)) {
    const o = last.split('.').map(Number);
    tailV4 = [(o[0] << 8) | o[1], (o[2] << 8) | o[3]];
    // the dotted tail is two groups; placeholders keep the '::' arithmetic right
    head = head.slice(0, lastColon + 1) + '0:0';
  }
  const [left, right] = head.includes('::') ? head.split('::') : [head, undefined];
  const parse = (s: string | undefined) => (s ? s.split(':').map((h) => parseInt(h, 16)) : []);
  const l = parse(left);
  const r = parse(right);
  const groups =
    right === undefined ? l : [...l, ...new Array(8 - l.length - r.length).fill(0), ...r];
  if (tailV4.length) groups.splice(6, 2, ...tailV4);
  return groups;
}

/**
 * The rate-limit key of a peer address: the IPv4 address itself, or the /64 prefix of an IPv6
 * address (an IPv4-mapped IPv6 address counts as its IPv4 address). Anything that is not an
 * address shares the single key "unknown".
 */
export function clientKey(raw: string | undefined): string {
  let addr = (raw ?? '').trim();
  if (addr.startsWith('[') && addr.endsWith(']')) addr = addr.slice(1, -1);
  const zone = addr.indexOf('%');
  if (zone !== -1) addr = addr.slice(0, zone);
  if (isIPv4(addr)) return addr;
  if (!isIPv6(addr)) return 'unknown';
  const g = ipv6Groups(addr.toLowerCase());
  const mapped = g.slice(0, 5).every((x) => x === 0) && g[5] === 0xffff;
  if (mapped) return `${g[6] >> 8}.${g[6] & 0xff}.${g[7] >> 8}.${g[7] & 0xff}`;
  return `${g.slice(0, 4).map((x) => x.toString(16)).join(':')}::/64`;
}

export interface LimiterOptions {
  windowMs?: number;
  maxPerKey?: number;
  maxKeys?: number;
  globalWindowMs?: number;
  globalMaxSends?: number;
}

export class RateLimiter {
  private readonly hits = new Map<string, number[]>();
  private sends: number[] = [];
  private timer: NodeJS.Timeout | undefined;
  readonly windowMs: number;
  readonly maxPerKey: number;
  readonly maxKeys: number;
  readonly globalWindowMs: number;
  readonly globalMaxSends: number;

  constructor(opts: LimiterOptions = {}) {
    this.windowMs = opts.windowMs ?? WINDOW_MS;
    this.maxPerKey = opts.maxPerKey ?? MAX_PER_KEY;
    this.maxKeys = opts.maxKeys ?? MAX_KEYS;
    this.globalWindowMs = opts.globalWindowMs ?? GLOBAL_WINDOW_MS;
    this.globalMaxSends = opts.globalMaxSends ?? GLOBAL_MAX_SENDS;
  }

  /** Records one attempt for `key`; false when the key is over its budget. */
  hit(key: string, now = Date.now()): boolean {
    const windowStart = now - this.windowMs;
    const list = (this.hits.get(key) ?? []).filter((t) => t > windowStart);
    // delete + set moves the key to the end: Map order is least recently seen first
    this.hits.delete(key);
    if (list.length >= this.maxPerKey) {
      this.hits.set(key, list);
      return false;
    }
    list.push(now);
    this.hits.set(key, list);
    while (this.hits.size > this.maxKeys) {
      const oldest = this.hits.keys().next().value as string;
      this.hits.delete(oldest);
    }
    return true;
  }

  /** True while the pod's global send budget has room (does not consume it). */
  globalAvailable(now = Date.now()): boolean {
    const windowStart = now - this.globalWindowMs;
    this.sends = this.sends.filter((t) => t > windowStart);
    return this.sends.length < this.globalMaxSends;
  }

  /** Consumes one unit of the global send budget; false when it is exhausted. */
  takeGlobal(now = Date.now()): boolean {
    if (!this.globalAvailable(now)) return false;
    this.sends.push(now);
    return true;
  }

  /** Drops the keys whose attempts all left the window. */
  sweep(now = Date.now()): void {
    const windowStart = now - this.windowMs;
    for (const [key, times] of this.hits) {
      if (times.every((t) => t <= windowStart)) this.hits.delete(key);
    }
  }

  get size(): number {
    return this.hits.size;
  }

  start(intervalMs = SWEEP_INTERVAL_MS): void {
    this.stop();
    this.timer = setInterval(() => this.sweep(), intervalMs);
    this.timer.unref();
  }

  stop(): void {
    if (this.timer) clearInterval(this.timer);
    this.timer = undefined;
  }
}
