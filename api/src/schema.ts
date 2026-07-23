import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().trim().max(200).optional().default(''),
  phone: z.string().trim().max(50).optional().default(''),
  email: z.string().trim().email().max(320),
  company: z.string().trim().min(1).max(200),
  message: z.string().trim().max(2000).optional().default(''),
  // honeypot — must stay empty; bots fill it
  website: z.string().optional().default(''),
  locale: z.enum(['en', 'tr']).optional().default('en'),
});

export type ContactInput = z.infer<typeof contactSchema>;
