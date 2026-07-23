import { Resend } from 'resend';
import type { ContactInput } from './schema.js';

let client: Resend | null = null;

function getResend(): Resend {
  const key = process.env.RESEND_API_KEY;
  if (!key) throw new Error('RESEND_API_KEY is not set');
  client ??= new Resend(key);
  return client;
}

const FROM = process.env.CONTACT_FROM ?? 'Leviora <noreply@leviora.ai>';
const TO = process.env.CONTACT_TO ?? 'info@leviora.ai';

const escapeHtml = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

export async function sendContactEmail(input: ContactInput): Promise<void> {
  const rows: [string, string][] = [
    ['Name', input.name || '—'],
    ['Email', input.email],
    ['Phone', input.phone || '—'],
    ['Company', input.company],
    ['Locale', input.locale],
    ['Message', input.message || '—'],
  ];

  const text = rows.map(([k, v]) => `${k}: ${v}`).join('\n');
  const html = `<h2>New demo request — ${escapeHtml(input.company)}</h2><table>${rows
    .map(
      ([k, v]) =>
        `<tr><td style="padding:4px 12px 4px 0;color:#6b7280">${k}</td><td style="padding:4px 0">${escapeHtml(v)}</td></tr>`,
    )
    .join('')}</table>`;

  const { error } = await getResend().emails.send({
    from: FROM,
    to: [TO],
    replyTo: input.email,
    subject: `New demo request — ${input.company}`,
    text,
    html,
  });

  if (error) {
    throw new Error(`resend: ${error.name} ${error.message}`);
  }
}
