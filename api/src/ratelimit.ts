// Per-pod sliding-window rate limit. Best-effort with multiple replicas;
// the honeypot is the primary spam defense.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;

const hits = new Map<string, number[]>();

export function allow(ip: string, now = Date.now()): boolean {
  const windowStart = now - WINDOW_MS;
  const list = (hits.get(ip) ?? []).filter((t) => t > windowStart);
  if (list.length >= MAX_REQUESTS) {
    hits.set(ip, list);
    return false;
  }
  list.push(now);
  hits.set(ip, list);
  // opportunistic cleanup
  if (hits.size > 10_000) {
    for (const [key, times] of hits) {
      if (times.every((t) => t <= windowStart)) hits.delete(key);
    }
  }
  return true;
}
