// One counter, by decision outcome, in the Prometheus text format. Served on GET /metrics,
// which the Ingress does not route (it only forwards /api), so only in-cluster scrapers reach it.

export const OUTCOMES = [
  'sent',
  'send_failed',
  'honeypot',
  'rate_limited',
  'global_limited',
  'invalid_json',
  'invalid_input',
  'unsupported_media_type',
  'forbidden_origin',
] as const;

export type Outcome = (typeof OUTCOMES)[number];

export class ContactMetrics {
  private readonly counts = new Map<Outcome, number>(OUTCOMES.map((o) => [o, 0]));

  inc(outcome: Outcome): void {
    this.counts.set(outcome, (this.counts.get(outcome) ?? 0) + 1);
  }

  get(outcome: Outcome): number {
    return this.counts.get(outcome) ?? 0;
  }

  render(): string {
    const name = 'leviora_website_contact_requests_total';
    const lines = [
      `# HELP ${name} Contact form requests by decision outcome.`,
      `# TYPE ${name} counter`,
      ...OUTCOMES.map((o) => `${name}{outcome="${o}"} ${this.get(o)}`),
    ];
    return lines.join('\n') + '\n';
  }
}
