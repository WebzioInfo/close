export interface Project {
  slug: string;
  title: string;
  client: string;
  category: string;
  year: string;
  subtitle: string;
  summary: string;
  observation: string;
  problem: string;
  transformation: string;
  learnings: string;
  deliverables: string[];
  image: string;
  quote?: {
    text: string;
    author: string;
  };
}

export const projects: Project[] = [
  {
    slug: 'atelier-kavya',
    title: 'Atelier Kavya',
    client: 'Kavya Architecture & Textiles',
    category: 'Identity & Editorial Direction',
    year: '2025',
    subtitle: 'Restoring quiet dignity to hand-loomed heritage through tactile editorial identity.',
    summary: 'An architectural studio and artisanal weaver collective in Kochi needed an identity that didn’t look like modern luxury marketing, but felt like an enduring craft monograph.',
    observation: 'Most heritage textile brands attempt to translate tradition through modern luxury minimalism—stripping away context until the craft becomes indistinguishable from fast-fashion aestheticism.',
    problem: 'Atelier Kavya was losing its origin story. Buyers revered the fabrics but didn’t understand the handloom mathematics, the natural indigo fermentation, or the architectural precision behind each warp.',
    transformation: 'We designed a physical and digital monograph identity. Instead of digital hero banners, we built a catalogue structured like an architect’s field journal, using raw linen textures, unbleached typography, and technical weave diagrams.',
    learnings: 'When a product is rooted in centuries of slow human practice, digital design must slow down to match its rhythm. Luxury is not polish; luxury is clarity of origin.',
    deliverables: [
      'Brand Identity System',
      'Editorial Monograph',
      'Packaging Architecture',
      'Digital Archive'
    ],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
    quote: {
      text: 'Close didn’t give us a logo. They gave us a voice that sounds like the quiet loom room at dawn.',
      author: 'Aparna Nair, Founder of Atelier Kavya'
    }
  },
  {
    slug: 'nura-botanicals',
    title: 'Nura Botanicals',
    client: 'Nura Laboratories',
    category: 'Brand Strategy & Positioning',
    year: '2024',
    subtitle: 'Redefining plant medicine from wellness trend to clinical observation.',
    summary: 'A Western Ghats botanical research lab moving into consumer skin science without resorting to greenwashed skincare tropes.',
    observation: 'The clean beauty category has rendered botanical language meaningless. Every brand claims "natural", "pure", and "sustainable", creating noise without substance.',
    problem: 'Nura’s genuine scientific rigor—extracting active phytochemicals from wild-harvested flora—was getting obscured by generic eco-lifestyle packaging.',
    transformation: 'We re-anchored Nura around the concept of "Phytochemical Observation". We developed an apothecary identity utilizing precise serif typography, field classification numbers, and amber borosilicate glass iconography.',
    learnings: 'Honesty is the most radical form of differentiation. Admitting what a plant can and cannot do creates immediate trust in a crowded market.',
    deliverables: [
      'Positioning Strategy',
      'Visual Identity System',
      'Apothecary Packaging',
      'Field Documentation Guide'
    ],
    image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=1600&q=80',
    quote: {
      text: 'They taught us that science does not need to look sterile, and nature does not need to look romanticized.',
      author: 'Dr. Rahul Varma, Chief Scientist'
    }
  },
  {
    slug: 'calicut-design-journal',
    title: 'Calicut Design Journal',
    client: 'Kerala Urban Research Forum',
    category: 'Publication & Curation',
    year: '2024',
    subtitle: 'Documenting the vernacular typography and trade architecture of coastal Malabar.',
    summary: 'A biennial print journal and archive documenting 150 years of sign-painting, timber store fronts, and spice warehouse typography along the historic Malabar coast.',
    observation: 'Commercial signboards painted by hand in Malayalam and Arabic script over the last century are disappearing overnight due to cheap aluminum composite paneling.',
    problem: 'Without systematic documentation, the unique typographic heritage of coastal trade towns will be permanently erased from regional memory.',
    transformation: 'We established an editorial structure, photographic standards, and digital repository for the journal. Every issue is printed on dual-texture recycled paper, preserving exact vector scans of historic hand-lettered signage.',
    learnings: 'Observation is an act of preservation. The subtle typography of everyday streetscapes holds the true spirit of a region’s culture.',
    deliverables: [
      'Journal Design & Art Direction',
      'Typographic Archive Schema',
      'Exhibition Architecture',
      'Documentary Film Curation'
    ],
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1600&q=80'
  },
  {
    slug: 'solis-space',
    title: 'Solis Space',
    client: 'Solis Architectural Studio',
    category: 'Creative Direction & Identity',
    year: '2023',
    subtitle: 'Creating space for quiet light and contemplative spatial design.',
    summary: 'A minimalist architectural practice based in Bangalore specializing in rammed-earth residences and courtyard sanctuaries.',
    observation: 'Architecture websites often resemble dense portfolios of rendered images with little insight into spatial philosophy or materials.',
    problem: 'Solis was winning awards for tactile, light-driven spaces, but their online presence felt cold and generic.',
    transformation: 'We built a digital home structured like an architectural exhibition. Large quiet photographs, video essays of light moving across concrete walls, and short reflective essays on spatial restraint.',
    learnings: 'A digital space should embody the same spatial qualities as the physical architecture it represents—silence, rhythm, and light.',
    deliverables: [
      'Brand Identity',
      'Digital Exhibition Architecture',
      'Print Portfolio Systems',
      'Spatial Nomenclature'
    ],
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80'
  }
];
