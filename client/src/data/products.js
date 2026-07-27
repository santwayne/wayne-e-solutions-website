// Central product registry. Update this file to add/remove/change products
// shown on the Home and Products pages — every card is generated from here.

const products = [
  {
    slug: 'wayneRing',
    name: 'WayneRing',
    category: 'AI Voice',
    status: 'live',
    tagline: 'AI voice calling that sounds like a person',
    description:
      'An outbound and inbound calling platform that runs real conversations in English, Hindi and Punjabi — for lead follow-up, surveys and support lines.',
    stack: ['Vapi', 'ElevenLabs', 'Deepgram', 'Node.js'],
  },
  {
    slug: 'waynur',
    name: 'Waynur',
    category: 'EdTech · SaaS',
    status: 'live',
    tagline: 'School operations, one dashboard',
    description:
      'A full school-management suite covering admissions, billing, attendance, transport GPS, payroll and an AI tutor — built for administrators, teachers and parents.',
    stack: ['React', 'Node.js', 'PostgreSQL'],
  },
  {
    slug: 'propertyPro',
    name: 'PropertyPro',
    category: 'Real Estate SaaS',
    status: 'beta',
    tagline: 'Listings, leads and calls in one place',
    description:
      'A real-estate platform with address-protected listings, WhatsApp lead capture, an AI calling agent and a built-in rent-vs-buy calculator.',
    stack: ['React', 'Node.js', 'WhatsApp API'],
  },
  {
    slug: 'sukoon',
    name: 'Sukoon',
    category: 'Legacy & Estate SaaS',
    status: 'live',
    tagline: 'Making after-loss logistics easier',
    description:
      'A calm, guided platform that helps families coordinate funeral and ritual logistics — the first of four planned modules covering end-of-life planning.',
    stack: ['Next.js', 'PostgreSQL'],
  },
  {
    slug: 'tintCare',
    name: 'Tint Care',
    category: 'Field Service SaaS',
    status: 'beta',
    tagline: 'Run a tint & PPF shop from one screen',
    description:
      'Job scheduling, cut-pattern reference and shop management software built for window tint and paint-protection-film installers.',
    stack: ['React', 'Node.js', 'Electron'],
  },
  {
    slug: 'saafSignal',
    name: 'Saaf Signal',
    category: 'FinTech',
    status: 'beta',
    tagline: 'Stock forecasting, kept honest',
    description:
      'An experimental market-forecasting tool built for a small circle of users, with integrity rules designed to keep its calls transparent rather than optimistic.',
    stack: ['Python', 'React'],
  },
  {
    slug: 'tatkalCash',
    name: 'TatkalCash',
    category: 'FinTech',
    status: 'dev',
    tagline: 'Small loans, fast decisions',
    description:
      'A short-term micro-loan platform prototype with mocked credit and KYC checks — built to demonstrate a compliant lending flow end to end.',
    stack: ['FastAPI', 'PostgreSQL'],
  },
  {
    slug: 'eduTutorAI',
    name: 'EduTutor AI',
    category: 'EdTech',
    status: 'dev',
    tagline: 'An AI teacher that talks back',
    description:
      'A role-based tutoring platform with an AI chat teacher, a doubt-solver and a live voice pipeline for students who learn better by asking out loud.',
    stack: ['React', 'WebSockets', 'Claude API'],
  },
  {
    slug: 'hvacCommand',
    name: 'HVAC Command Center',
    category: 'Field Service SaaS',
    status: 'dev',
    tagline: 'Dispatch, inventory and AMC in sync',
    description:
      'A field-service backend for HVAC businesses — WhatsApp complaint intake, AI triage, technician dispatch, inventory and contract renewals in one system.',
    stack: ['Node.js', 'Prisma', 'Flutter'],
  },
  {
    slug: 'saahil',
    name: 'Saahil',
    category: 'Care Coordination SaaS',
    status: 'dev',
    tagline: 'Looking after parents from a distance',
    description:
      'A platform built for NRIs coordinating elder care back home — check-ins, reminders and a voice assistant that reaches parents who prefer a phone call.',
    stack: ['Node.js', 'Redis', 'WhatsApp API'],
  },
  {
    slug: 'aiVideoStudio',
    name: 'AI Video Studio',
    category: 'AI Content',
    status: 'dev',
    tagline: 'Ad videos without a shoot',
    description:
      'A render pipeline that turns a brief into a finished promotional video, with economy, standard and premium quality tiers for different budgets.',
    stack: ['Python', 'FastAPI', 'React'],
  },
  {
    slug: 'gmbManager',
    name: 'GMB Manager',
    category: 'Marketing Automation',
    status: 'dev',
    tagline: 'Local search, on autopilot',
    description:
      'A Google Business Profile manager that reads reviews, drafts AI replies, schedules posts and compiles performance reports for local clients.',
    stack: ['Python', 'FastAPI', 'Claude API'],
  },
];

export const statusLabels = {
  live: 'LIVE',
  beta: 'BETA',
  dev: 'IN DEV',
};

export default products;
