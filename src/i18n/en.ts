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
      tabAnswers: {
        sees: 'OEE is 72% — 18 minutes of unplanned downtime in the last 2 hours.',
        understands: 'Root cause: Mold B changeover took 3× the standard time.',
        takesAction: 'Shift supervisor notified — pending your approval.',
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
        chart: [28, 35, 22, 30, 26, 32, 24, 30, 92, 34, 27, 31, 25, 29],
        chartCaption: 'Errors by day — last 14 days',
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
  product: {
    hero: {
      eyebrow: 'Central Corporate Intelligence',
      titleLine1: 'Three Layers,',
      titleLine2: 'A Central Corporate Intelligence.',
      sub: 'The artificial intelligence that understands the operation is not made up of a single part. Three layers work together: connecting what happened, why it happened, and what needs to be done.',
      ctaPrimary: 'Request A Demo',
      ctaSecondary: 'Explore The Architecture',
      conclusion: {
        tag: 'CONCLUSION',
        title: 'Central Corporate Intelligence',
        body: 'The three layers merge; there becomes a single intelligence that understands the operation and that is Leviora.',
      },
      layers: [
        {
          title: 'Common Data Language',
          q: 'What happened?',
          body: 'Every system speaks differently. Leviora unifies them under one language.',
        },
        {
          title: 'Relationship Map',
          q: 'Why did it happen?',
          body: 'Learns how lines, shifts, machines & orders relate; traces the chain of an event.',
        },
        {
          title: 'Business Rules Engine',
          q: 'What should be done?',
          body: 'Your thresholds, limits and exceptions become operational rules.',
        },
      ],
    },
    three: {
      eyebrow: 'Central Enterprise Intelligence',
      segments: [
        { text: 'Three Layers, One Central' },
        { text: 'Enterprise Intelligence.', accent: true },
      ],
      sub: "AI that understands an operation isn't made of a single piece. Three layers work together — linking what happened, why it happened, and what to do.",
      closing:
        'When the three combine, your Central Enterprise Intelligence forms one structured understanding of how your operation truly works.',
      cards: [
        {
          title: 'Common Data Language',
          q: 'What happened?',
          body: 'Every system speaks differently. It unifies them under one language.',
        },
        {
          title: 'Relationship Map',
          q: 'Why did it happen?',
          body: 'Learns how lines, shifts, machines and orders relate; traces the chain of an event.',
        },
        {
          title: 'Business Rules Engine',
          q: 'What should be done?',
          body: 'Your thresholds, limits and exceptions become operational rules.',
        },
      ],
      aiName: 'LEVIORA AI',
      aiTime: '· 09:37',
      aiMeta: 'Data Analyst · 9 steps · 923ms · Details',
      placeholder: 'Write a topic to be analyzed…',
      analyze: 'Analyze',
      live: 'Live',
    },
    capabilities: {
      sees: {
        title: 'Sees',
        body: 'Leviora reads live data across your entire operation MES, ERP, SCADA, CMMS. No manual exports, no waiting for reports. You ask, and the answer comes from data flowing right now.',
        bullets: [
          'Instant visibility across all connected systems',
          'Natural-language queries — no SQL, no dashboard building',
          'Builds context itself: knows which line, shift, batch',
          'Answers come from live data',
        ],
        chat: {
          user: "What's Line 3's OEE right now?",
          aiName: 'LEVIORA AI',
          aiTime: '· 09:37',
          aiMeta: 'Data Analyst · 9 steps · 923ms · Details',
          aiText:
            '72%. Target 85%. 18 minutes of unplanned downtime in the last 2 hours. Largest cause: Mold B changeover — 22 min against 10 min standard.',
          chart: [82, 79, 76, 71, 68, 72],
          chartCaption: 'OEE by hour — Line 3',
          source: 'from your operational data',
          sourceLink: 'View Source',
          placeholder: 'Write a topic to be analyzed…',
          analyze: 'Analyze',
          live: 'Live',
        },
      },
      understands: {
        title: 'Understands',
        body: "Leviora links events into a cause chain — a shift that started late, a delayed mold change, a pattern repeating for weeks — and finds the root cause. It doesn't just report a number; it explains why.",
        bullets: [
          'Builds the cause-and-effect chain between events',
          'Finds the root cause, not the symptom',
          'Catches recurring patterns',
          "Explains findings with their source — doesn't make them up",
        ],
        chat: {
          user: "Why did Line 3's OEE drop?",
          aiName: 'LEVIORA AI',
          aiTime: '· 09:37',
          aiMeta: 'Unplanned Downtime Alert',
          aiText:
            'Root cause: mold change on Product B exceeded standard time by 3× for the third consecutive week.',
          source: 'from your operational data',
          sourceLink: 'View Source',
          placeholder: 'Write a topic to be analyzed…',
          analyze: 'Analyze',
          live: 'Live',
        },
      },
      takesAction: {
        title: 'Takes Action',
        body: 'Leviora acts within the limits you authorize. It opens a maintenance request, notifies the shift supervisor, flags a quality check. Every action is authorized, logged and reversible. Not a chat that suggests — a system that works within your limits.',
        bullets: [
          'Only within the limits you authorize',
          'Every action logged and reversible',
          'You define what each module can do',
          'Acts on its own when a threshold is crossed',
        ],
        chat: {
          user: "What's Line 3's OEE right now?",
          aiName: 'LEVIORA AI',
          aiTime: '· 09:37',
          aiMeta: 'Ops Analyst · 4 steps · 512ms · Details',
          aiText: '',
          facts: [
            { label: 'CONDITION', value: 'If downtime exceeds 10 minutes' },
            { label: 'ACTION', value: 'Notify the shift supervisor' },
            { label: 'AUTHORITY', value: 'Production Manager Approval · Notification Only' },
          ],
          placeholder: 'Write a topic to be analyzed…',
          analyze: 'Analyze',
          live: 'Live',
        },
      },
    },
  },
  solutions: {
    hero: {
      eyebrow: 'Operational AI · For Industry',
      titleLine1: "Wherever There's An",
      titleLine2: 'Operation, Leviora Is There.',
      sub: 'Not a list of industries — a way of working that fits anywhere machines, people and decisions meet.',
      ctaPrimary: 'Request A Demo',
      ctaSecondary: 'How Does It Work?',
    },
    scenarios: {
      eyebrow: 'Use Scenarios',
      segments: [
        { text: 'What Can You Ask' },
        { text: 'Your Operation?', accent: true },
      ],
      colScenario: 'Scenario',
      colQuestion: 'Example question',
      rows: [
        { scenario: 'Production line', question: 'Why did Line B start late this morning?' },
        { scenario: 'Downtime & OEE', question: 'Which line had the most downtime this week?' },
        { scenario: 'Scrap & quality', question: 'Which product had rising scrap, and why?' },
        { scenario: 'Maintenance', question: 'Which equipment is close to failure risk?' },
        { scenario: 'Energy', question: 'Why did consumption rise last night?' },
      ],
    },
    packages: {
      eyebrow: 'Contact Us',
      segments: [
        { text: 'Would You Like To See Leviora' },
        { text: 'Running On Your Own Operation?', accent: true },
      ],
      sub: 'A 30-minute demo. A 30-day pilot. The decision is entirely yours.',
      tiers: [
        {
          name: 'Starter',
          features: [
            'Live on a single scenario',
            'Pilot with your real data',
            'Fast proof of value',
            'Real Q&A on live data',
          ],
          cta: "Let's talk.",
        },
        {
          name: 'Expansion',
          features: [
            'Usage spread across the operation',
            'Root-cause / alert / summary modules together',
            'Automated alerts (threshold/anomaly)',
            'MES/SCADA/CMMS integration',
            'Multiple users',
          ],
          cta: "Let's talk.",
        },
        {
          name: 'Enterprise',
          features: [
            'Multi-site deployment',
            'On-prem / private cloud',
            'Integration with all systems',
            'Role-based authorization',
            'Enterprise-defined action limits',
            'Unlimited users',
            'Cross-facility reporting',
            'Priority support',
          ],
          cta: 'Request A Demo',
          highlighted: true,
        },
      ],
    },
    notFor: {
      eyebrow: 'Out Of Scope',
      segments: [{ text: "We're Not For" }, { text: 'Everyone.', accent: true }],
      body: "Leviora was built for operations with real, live systems to read. If you have no operational data to connect — or you're looking for a general-purpose office chatbot — let's be clear: we're not the right fit. And we'll tell you so honestly.",
    },
  },
  contact: {
    hero: {
      eyebrow: 'Contact Us',
      titleLine1: 'See Leviora On',
      titleLine2: 'Your Own Terms.',
      bullets: [
        { title: '30-Minute Session', desc: 'A Real Talk About Your Operation' },
        { title: 'With Your Own Questions', desc: 'We Show The Product On Live Data' },
        { title: 'Your Data Stays On Your Network', desc: "It Doesn't Leave" },
      ],
    },
    form: {
      title: 'Book your free 30-minute call',
      name: 'Your name',
      namePlaceholder: 'Enter your name',
      phone: 'Phone number',
      phonePlaceholder: '+90 500 000 00 00',
      email: 'Email address*',
      emailPlaceholder: 'Enter your email',
      company: 'Company*',
      companyPlaceholder: 'Company name',
      message: 'What would you like to explore? (optional)',
      messagePlaceholder: 'Tell us about your operation or a specific challenge…',
      submit: 'Request A Demo',
      sending: 'Sending…',
      success: "Thank you — we've received your request. We reply within 24 hours.",
      error: 'Something went wrong. Please try again, or write to info@leviora.ai.',
    },
    steps: {
      eyebrow: 'How It Works',
      segments: [
        { text: 'From Request To Pilot,' },
        { text: 'Three Steps.', accent: true },
      ],
      cards: [
        {
          title: 'You Request A Demo',
          body: 'Fill in the form; we reply within 24 hours.',
        },
        {
          title: 'A 30-Minute Call',
          body: 'With your own operational questions, on live data. No scripts, no canned demos.',
        },
        {
          title: 'An Optional 30-Day Pilot',
          body: 'On your own data, on your own terms. We connect to your systems, learn your language, your team starts using it. The decision is entirely yours.',
        },
      ],
    },
    faq: {
      eyebrow: 'FAQ',
      segments: [{ text: 'Honest' }, { text: 'Answers.', accent: true }],
      items: [
        {
          q: 'What do I need to prepare for the demo?',
          a: 'Nothing. You bring a real question from your operation; we handle the rest. No prep, no presentation, no pre-work needed.',
        },
        {
          q: 'Is the demo on my real data, or a canned scenario?',
          a: "Wherever possible, on your live data — that's the point. If access can't be arranged before the call, we show the product on a realistic operational dataset and connect to your systems during the pilot.",
        },
        {
          q: 'Does the pilot lock me into a commitment?',
          a: 'No. The 30-day pilot runs on your own data and ends with your decision. If you choose not to continue, we disconnect — and since your data never left your network, nothing stays behind.',
        },
        {
          q: 'Is my data safe? Is it KVKK-compliant?',
          a: "Your data never leaves your network. Leviora reads your systems in real time; it does not copy raw data out or store it externally. Because data never leaves, you're on the safest ground for KVKK too.",
        },
        {
          q: 'What happens at the end of the pilot?',
          a: 'You decide. If the value is proven, we plan the rollout together. If not, we disconnect cleanly — no lock-in, no data left behind.',
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
