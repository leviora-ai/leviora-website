import { z } from 'zod';

// Single-line fields: no CR/LF (company goes into the email subject).
const SINGLE_LINE = /^[^\r\n]*$/;

export const contactSchema = z.object({
  name: z.string().trim().max(200).regex(SINGLE_LINE).optional().default(''),
  phone: z.string().trim().max(50).regex(SINGLE_LINE).optional().default(''),
  email: z.string().trim().email().max(320),
  company: z.string().trim().min(1).max(200).regex(SINGLE_LINE),
  message: z.string().trim().max(2000).optional().default(''),
  // honeypot — must stay empty; bots fill it
  website: z.string().optional().default(''),
  locale: z.enum(['en', 'tr']).optional().default('en'),
});

export type ContactInput = z.infer<typeof contactSchema>;
