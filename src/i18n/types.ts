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
  tabAnswers: { sees: string; understands: string; takesAction: string };
}

export interface StatementDict {
  eyebrow: string;
  titleLine1: string;
  titleLine2: string;
  sub: string;
  cta: string;
}

export interface HeadingDict {
  eyebrow: string;
  segments: { text: string; accent?: boolean }[];
}

export interface ChatWindowDict {
  user: string;
  aiName: string;
  aiTime: string;
  aiMeta: string;
  aiText: string;
  aiBullets?: string[];
  facts?: { label: string; value: string }[];
  chart?: number[];
  chartCaption?: string;
  source?: string;
  sourceLink?: string;
  placeholder: string;
  analyze: string;
  live: string;
}

export interface CapabilityDict {
  eyebrow?: string;
  title: string;
  body: string;
  bullets: string[];
  chat: ChatWindowDict;
}

export interface Dict {
  home: {
    hero: HomeHeroDict;
    statement: StatementDict;
    how: HeadingDict & {
      cards: { title: string; body: string }[];
    };
    why: HeadingDict & {
      bullets: string[];
      chat: ChatWindowDict;
    };
    setup: HeadingDict & {
      items: { title: string; tag: string; body: string }[];
      panel: {
        title: string;
        network: string;
        center: string;
        other: string;
        chips: string[];
      };
    };
    faq: HeadingDict & {
      items: { q: string; a: string }[];
    };
  };
  product: {
    hero: {
      eyebrow: string;
      titleLine1: string;
      titleLine2: string;
      sub: string;
      ctaPrimary: string;
      ctaSecondary: string;
      conclusion: { tag: string; title: string; body: string };
      layers: { title: string; q: string; body: string }[];
    };
    three: HeadingDict & {
      sub: string;
      closing: string;
      cards: { title: string; q: string; body: string }[];
      aiName: string;
      aiTime: string;
      aiMeta: string;
      placeholder: string;
      analyze: string;
      live: string;
    };
    capabilities: {
      sees: CapabilityDict;
      understands: CapabilityDict;
      takesAction: CapabilityDict;
    };
  };
  solutions: {
    hero: {
      eyebrow: string;
      titleLine1: string;
      titleLine2: string;
      sub: string;
      ctaPrimary: string;
      ctaSecondary: string;
    };
    scenarios: HeadingDict & {
      colScenario: string;
      colQuestion: string;
      rows: { scenario: string; question: string }[];
    };
    packages: HeadingDict & {
      sub: string;
      tiers: {
        name: string;
        features: string[];
        cta: string;
        highlighted?: boolean;
      }[];
    };
    notFor: HeadingDict & {
      body: string;
    };
  };
  contact: {
    hero: {
      eyebrow: string;
      titleLine1: string;
      titleLine2: string;
      bullets: { title: string; desc: string }[];
    };
    form: {
      title: string;
      name: string;
      namePlaceholder: string;
      phone: string;
      phonePlaceholder: string;
      email: string;
      emailPlaceholder: string;
      company: string;
      companyPlaceholder: string;
      message: string;
      messagePlaceholder: string;
      submit: string;
      sending: string;
      success: string;
      error: string;
    };
    steps: HeadingDict & {
      cards: { title: string; body: string }[];
    };
    faq: HeadingDict & {
      items: { q: string; a: string }[];
    };
  };
  cta: HeadingDict & {
    sub: string;
    primary: string;
    secondary: string;
  };
  nav: {
    home: string;
    product: string;
    solutions: string;
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
