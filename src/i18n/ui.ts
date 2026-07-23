import type { Lang } from './types';
import { en } from './en';
import { tr } from './tr';

export const dicts = { en, tr } as const;

export function useTranslations(lang: Lang) {
  return dicts[lang];
}

/** `path` is always the language-neutral path (EN form, e.g. "/product/"). */
export function localizePath(path: string, lang: Lang): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (lang === 'en') return clean;
  return clean === '/' ? '/tr/' : `/tr${clean}`;
}

/** Strip a locale prefix from a concrete URL path → language-neutral path. */
export function neutralPath(pathname: string): string {
  if (pathname === '/tr' || pathname === '/tr/') return '/';
  if (pathname.startsWith('/tr/')) return pathname.slice(3);
  return pathname;
}

export function otherLang(lang: Lang): Lang {
  return lang === 'en' ? 'tr' : 'en';
}
