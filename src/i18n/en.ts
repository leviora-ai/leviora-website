import type { Dict } from './types';

export const en: Dict = {
  home: {
    hero: {
      eyebrow: 'Operational AI · Built For Industry',
      titleLine1: 'We Taught AI The Language',
      titleLine2: 'Of Your Operation.',
      ctaPrimary: 'Request A Demo',
      ctaSecondary: 'How Does It Work?',
      chips: {
        erp: 'ERP',
        mes: 'MES',
        scada: 'SCADA',
        cmms: 'CMMS',
        other: 'Other Systems',
      },
      outputsLabel: 'OUTPUTS',
      outputs: [
        { title: 'Root-Cause Analysis', desc: '- Builds The Cause Chain' },
        { title: 'Real-Time Visibility', desc: '- Reads Live Data' },
        { title: 'Action', desc: '- Acts Within Granted Authority' },
      ],
      chatQuestion: "Why Did Line 3's OEE Drop In Last Night's Shift?",
      chatPlaceholder: 'Write a topic to be analyzed...',
      analyze: 'Analyze',
      tabs: {
        sees: 'Sees',
        understands: 'Understands',
        takesAction: 'Takes Action',
      },
    },
    statement: {
      eyebrow: 'Operation-Specific Artificial Intelligence',
      titleLine1: 'A System That Thinks In Your Terms,',
      titleLine2: 'Decides By Your Rules, Acts Within Your Limits',
      sub: 'A system that thinks in your terms, makes decisions according to your rules, and acts within your boundaries.',
      cta: 'Request A Demo',
    },
    how: {
      eyebrow: 'How It Works',
      segments: [
        { text: 'Sees ·' },
        { text: 'Understands', accent: true },
        { text: '· Takes Action' },
      ],
      cards: [
        {
          title: 'Sees',
          body: 'Reads live data across your entire operation MES, ERP, SCADA, CMMS. No manual exports, no waiting for reports. You ask, and the answer comes from data flowing right now.',
        },
        {
          title: 'Understands',
          body: "Links events into a cause chain. Finds the root cause, not the symptom. Explains findings with their source — doesn't make things up.",
        },
        {
          title: 'Takes Action',
          body: 'Acts within the limits you authorize. Opens a maintenance request, notifies the shift supervisor, flags a quality check. Authorized, logged, reversible.',
        },
      ],
    },
    why: {
      eyebrow: 'Why Leviora',
      segments: [
        { text: 'General AI Explains The Data. Leviora' },
        { text: 'Understands The Operation.', accent: true },
      ],
      bullets: [
        'Answers with your data, in your terms',
        "Doesn't make things up when unsure",
        'Explains findings with summary / table / source',
        "Answers questions you couldn't ask a general AI",
        'Evaluates root cause, impact and pattern together',
      ],
      chat: {
        user: 'Where are the errors clustered in the last 14 days?',
        aiName: 'LEVIORA AI',
        aiTime: '· 09:37',
        aiMeta: 'Data Analyst · 9 steps · 923ms · Details',
        aiText:
          'A noticeable clustering occurred on June 9th — no machine-specific leader. I cannot confidently blame any single machine.',
        aiBullets: [
          'The distribution is horizontal: 1 error per 10 machines.',
          'Concentration is daily (June 9th), not machine-based.',
          "The main cause could not be confirmed; insufficient data, I'm not making this up.",
        ],
        placeholder: 'Write a topic to be analyzed…',
        analyze: 'Analyze',
        live: 'Live',
      },
    },
    setup: {
      eyebrow: 'Setup',
      segments: [
        { text: 'No Long Setup Projects.' },
        { text: 'Connect, Map, Use.', accent: true },
      ],
      items: [
        {
          title: 'Connect',
          tag: 'Day 1–2',
          body: 'ERP, MES, SCADA connection. Your data never leaves your network Leviora reads from your systems without extracting or storing raw data externally.',
        },
        {
          title: 'Map',
          tag: 'First Week',
          body: 'Your tables and fields are mapped to the business objects you already use — lines, shifts, machines, orders. Defined through the interface, without writing code.',
        },
        {
          title: 'Use',
          tag: 'From Week 2',
          body: 'Your team starts asking questions in everyday language. Every answer arrives with its source and reasoning; authorized actions go live step by step.',
        },
      ],
      panel: {
        title: 'Your data will not leave here.',
        network: 'Your Network',
        center: 'Single Center',
        other: 'Other Systems',
        chips: ['ERP', 'MES', 'SCADA', 'CMMS'],
      },
    },
    faq: {
      eyebrow: 'FAQ',
      segments: [{ text: 'Honest' }, { text: 'Answers.', accent: true }],
      items: [
        {
          q: 'Is my data safe? Are you KVKK-compliant?',
          a: "Your data never leaves your network. Leviora reads your systems in real time; it does not copy raw data out or store it externally. Because data never leaves, you're on the safest ground for KVKK too. We're happy to walk through our architecture in detail during the demo.",
        },
        {
          q: "What does Leviora do if it doesn't know the answer?",
          a: "It says so. If the data is insufficient or the cause cannot be confirmed, Leviora tells you exactly that — what it checked and what is missing. It does not guess, and it does not make things up.",
        },
        {
          q: 'Will it help with anything I ask?',
          a: "It helps with anything your operational data can answer — production, downtime, quality, maintenance, energy. It is not a general-purpose chatbot; questions outside your operation are out of scope, and it says so honestly.",
        },
        {
          q: 'How much authority does Leviora have?',
          a: 'Exactly as much as you grant. Every action type is defined and approved by you — from notify-only up to opening work orders. Every action is authorized, logged, and reversible.',
        },
        {
          q: 'How quickly can we start using it?',
          a: 'Connection takes 1–2 days, mapping happens in the first week, and your team starts using it from week two. An optional 30-day pilot runs on your own data — the decision is entirely yours.',
        },
      ],
    },
  },
  cta: {
    eyebrow: 'Contact Us',
    segments: [
      { text: 'Would You Like To See Leviora' },
      { text: 'Running On Your Own Operation?', accent: true },
    ],
    sub: 'A 30-minute demo. A 30-day pilot. The decision is entirely yours.',
    primary: 'Request A Demo',
    secondary: 'How Does It Work?',
  },
  nav: {
    home: 'Home',
    product: 'Product',
    solutions: 'Solutions',
    about: 'About Us',
    requestDemo: 'Request A Demo',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
  },
  footer: {
    tagline:
      'Operational AI that thinks in your terms, decides by your rules, and acts within your limits.',
    company: 'Company',
    platform: 'Platform',
    others: 'Others',
    home: 'Home',
    about: 'About',
    contact: 'Contact',
    product: 'Product',
    solutions: 'Solutions',
    requestDemo: 'Request a Demo',
    faq: 'FAQ',
    privacy: 'Privacy Policy',
    terms: 'Terms & Conditions',
    kvkk: 'KVKK',
    rights: '© 2026 Leviora. All rights reserved.',
  },
  meta: {
    home: {
      title: 'Leviora — Operational AI, Built For Industry',
      description:
        'Leviora reads live data across your entire operation and turns it into governed answers and actions. We taught AI the language of your operation.',
    },
    product: {
      title: 'Product — Leviora',
      description:
        'Three layers, one central corporate intelligence: a common data language, a relationship map, and a business rules engine working together.',
    },
    solutions: {
      title: 'Solutions — Leviora',
      description:
        "Wherever there's an operation, Leviora is there. See what you can ask your operation and which package fits.",
    },
    about: {
      title: 'About Us — Leviora',
      description:
        'Two AI engineers and an industry manager, building the intelligence that speaks the language of the operation.',
    },
    contact: {
      title: 'Request a Demo — Leviora',
      description:
        'Book a free 30-minute call. Your questions, on live data. Your data stays on your network.',
    },
    privacy: {
      title: 'Privacy Policy — Leviora',
      description: 'How Leviora collects, uses, and protects your information.',
    },
    terms: {
      title: 'Terms & Conditions — Leviora',
      description: 'The terms governing your use of the Leviora website.',
    },
    kvkk: {
      title: 'KVKK — Leviora',
      description:
        'Information notice under the Turkish Personal Data Protection Law (KVKK).',
    },
    notFound: {
      title: 'Page Not Found — Leviora',
      description: 'The page you are looking for does not exist.',
    },
  },
  notFound: {
    heading: 'Page not found.',
    body: 'The page you are looking for may have been moved or no longer exists.',
    backHome: 'Back to home',
  },
};
