export interface Note {
  slug: string;
  title: string;
  category: 'Essay' | 'Observation' | 'Brand Study' | 'Conversation' | 'Field Note';
  date: string;
  readTime: string;
  excerpt: string;
  content: string[];
  author: string;
  tags: string[];
}

export const notes: Note[] = [
  {
    slug: 'the-art-of-quiet-observation',
    title: 'The Art of Quiet Observation in Brand Creation',
    category: 'Essay',
    date: 'October 14, 2025',
    readTime: '6 min read',
    excerpt: 'Before a brand speaks, it must learn to listen. Why true identity emerges from sitting silently with a business before drawing a single grid.',
    content: [
      'In a modern corporate culture obsessed with speed, brand building has become a transactional exercise in velocity. Sprint workshops, instant positioning decks, and logo generators promise identities in seventy-two hours.',
      'At Close, we believe this rush to execute is why most modern brands feel hollow. They are built on assumptions, generic visual trends, and competitive panic rather than deep observation.',
      'To observe is to notice what others ignore. It means sitting in the workshop for three days without bringing a notebook. It means watching how a master craftsman handles raw timber, listening to how a founder speaks when they aren’t pitching, and noticing the subtle friction customers feel when unboxing a product.',
      'Branding does not begin in Figma or Illustrator. It begins in silence. When you observe with patience, the brand reveals its own natural shape. You don’t invent an identity—you uncover it.'
    ],
    author: 'Brand Learner',
    tags: ['Philosophy', 'Observation', 'Craft']
  },
  {
    slug: 'why-we-avoid-pricing-tables',
    title: 'Why We Avoid Pricing Tables and Service Menus',
    category: 'Field Note',
    date: 'August 28, 2025',
    readTime: '4 min read',
    excerpt: 'Branding is not a restaurant menu. Thoughts on why standardized service cards commodify creative understanding.',
    content: [
      'We are often asked why Close Communications does not publish standard "packages" or pricing tiers on our website.',
      'The answer is simple: no two organizations suffer from the same quiet confusion. A heritage textile weaver in Kochi needs a completely different form of listening than a botanical research laboratory in Mysore.',
      'When you package creative practice into neat, standardized boxes—"Logo Design: $5,000", "Brand Strategy: $10,000"—you transform conversation into commerce before understanding has even occurred.',
      'We prefer conversations to menu items. We sit together, define the problem, examine the context, and build a scope that fits the exact weight of the challenge.'
    ],
    author: 'Brand Learner',
    tags: ['Practice', 'Ethics', 'Conversation']
  },
  {
    slug: 'monocle-aesop-and-the-geometry-of-restraint',
    title: 'Aesop, Monocle, and the Geometry of Restraint',
    category: 'Brand Study',
    date: 'June 02, 2025',
    readTime: '8 min read',
    excerpt: 'Deconstructing why certain global practices age gracefully over decades while digital brands fade within eighteen months.',
    content: [
      'Look at Aesop’s store architecture across Kyoto, London, and Melbourne. No two stores are visually identical, yet every store is instantly recognizable as Aesop.',
      'Why? Because Aesop’s identity is not a rigid logo guide—it is a philosophical attitude toward space, texture, literature, and quiet respect for local history.',
      'Monocle Magazine operates on the exact same premise. In an age of algorithmic bite-sized media, Monocle doubled down on high-density print paper, physical newsstands, and calm, unhurried radio broadcasting.',
      'The lesson for modern brand practitioners is clear: visual trends are fleeting, but intellectual coherence creates timelessness. Restraint is not the absence of design; it is the presence of absolute conviction.'
    ],
    author: 'Brand Learner',
    tags: ['Case Study', 'Restraint', 'Architecture']
  },
  {
    slug: 'malabar-typography-notebook',
    title: 'Notes from the Spice Port: Vernacular Signage of Calicut',
    category: 'Observation',
    date: 'April 19, 2025',
    readTime: '5 min read',
    excerpt: 'Photographic and typographic notes on 1950s hand-painted shop signs along Silk Street and French Bazaar.',
    content: [
      'Walking through the narrow spice lanes of Kozhikode (Calicut) at 6:00 AM reveals a masterclass in vernacular lettering.',
      'Before modern vinyl plotters, regional sign-painters blended Arabic calligraphic flourishes with Malayalam curves and bold sans-serif English letters. These hybrid scripts were painted onto weathered teak boards using oil enamel.',
      'Notice how the stroke weight adapts to the grain of the wood. Notice how color was used sparingly—pale cream, deep indigo, iron oxide red. There is an innate rhythm here that modern digital layout engines struggle to replicate.',
      'We document these signs not out of nostalgia, but out of respect for typographic honesty.'
    ],
    author: 'Brand Learner',
    tags: ['Typography', 'Kerala', 'Archive']
  }
];
