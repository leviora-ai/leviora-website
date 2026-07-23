export type Lang = 'en' | 'tr';

export interface MetaDict {
  title: string;
  description: string;
}

export interface Dict {
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
