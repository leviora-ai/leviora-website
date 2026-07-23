export type Lang = 'en' | 'tr';

export interface MetaDict {
  title: string;
  description: string;
}

export interface HomeHeroDict {
  eyebrow: string;
  titleLine1: string;
  titleLine2: string;
  ctaPrimary: string;
  ctaSecondary: string;
  chips: { erp: string; mes: string; scada: string; cmms: string; other: string };
  outputsLabel: string;
  outputs: { title: string; desc: string }[];
  chatQuestion: string;
  chatPlaceholder: string;
  analyze: string;
  tabs: { sees: string; understands: string; takesAction: string };
}

export interface Dict {
  home: {
    hero: HomeHeroDict;
  };
  nav: {
    home: string;
    product: string;
    solutions: string;
    about: string;
    requestDemo: string;
    openMenu: string;
    closeMenu: string;
  };
  footer: {
    tagline: string;
    company: string;
    platform: string;
    others: string;
    home: string;
    about: string;
    contact: string;
    product: string;
    solutions: string;
    requestDemo: string;
    faq: string;
    privacy: string;
    terms: string;
    kvkk: string;
    rights: string;
  };
  meta: {
    home: MetaDict;
    product: MetaDict;
    solutions: MetaDict;
    about: MetaDict;
    contact: MetaDict;
    privacy: MetaDict;
    terms: MetaDict;
    kvkk: MetaDict;
    notFound: MetaDict;
  };
  notFound: {
    heading: string;
    body: string;
    backHome: string;
  };
}
