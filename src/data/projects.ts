export type ProjectStatus = 'Concept' | 'In Progress' | 'Completed' | '';

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  category: string;
  status: ProjectStatus;
  technologies: string[];
  thumbnail: string;
  screenshots: string[];
  problemStatement: string;
  proposedSolution: string;
  keyFeatures: string[];
  detailedCaseStudy: string;
  githubUrl: string;
  liveDemoUrl: string;
  technicalChallenges: string;
};

export const projects: Project[] = [
  {
    slug: 'dilaale',
    title: 'Dilaale',
    subtitle: 'Real Estate & Vehicle Marketplace',
    shortDescription:
      'A digital marketplace connecting users with property and vehicle listings through a mobile application and administrative platform.',
    category: 'Marketplace',
    status: '',
    technologies: ['Flutter', 'PHP', 'MySQL'],
    thumbnail: '',
    screenshots: [],
    problemStatement:
      'Buyers and sellers often rely on fragmented channels to discover property and vehicle listings.',
    proposedSolution:
      'A unified marketplace with a Flutter mobile experience and an administrative platform for listing management.',
    keyFeatures: [
      'Property and vehicle listings',
      'Mobile browsing experience',
      'Administrative management tools',
      'Structured listing data',
    ],
    detailedCaseStudy:
      'Dilaale explores how a regional marketplace can connect users with property and vehicles through mobile discovery and backend administration.',
    githubUrl: '',
    liveDemoUrl: '',
    technicalChallenges: '',
  },
  {
    slug: 'e-garoon',
    title: 'E-Garoon',
    subtitle: 'Sports Booking Platform',
    shortDescription:
      'A digital system for sports field reservations, ticketing, and facility services.',
    category: 'Sports',
    status: '',
    technologies: [],
    thumbnail: '',
    screenshots: [],
    problemStatement:
      'Sports facilities often depend on manual booking workflows that are difficult to coordinate at scale.',
    proposedSolution:
      'A centralized digital platform for reservations, ticketing, and facility-related services.',
    keyFeatures: [
      'Field and facility booking',
      'Ticketing workflows',
      'Venue service coordination',
    ],
    detailedCaseStudy:
      'E-Garoon focuses on simplifying sports venue operations through reservation and ticketing tooling.',
    githubUrl: '',
    liveDemoUrl: '',
    technicalChallenges: '',
  },
  {
    slug: 'bookverse',
    title: 'BookVerse',
    subtitle: 'Digital Bookstore Application',
    shortDescription:
      'A mobile-focused digital bookstore platform with book discovery and administrative functionality.',
    category: 'Education',
    status: '',
    technologies: ['Flutter', 'React', 'Supabase'],
    thumbnail: '',
    screenshots: [],
    problemStatement:
      'Readers and administrators need cohesive tools to discover, manage, and deliver digital book content.',
    proposedSolution:
      'A Flutter reader experience with React-based administration and Supabase for data services.',
    keyFeatures: [
      'Book discovery and catalog',
      'Mobile-first reading flows',
      'Administrative tooling',
      'Supabase-backed data layer',
    ],
    detailedCaseStudy:
      'BookVerse combines mobile book discovery with modern admin interfaces and a managed backend.',
    githubUrl: '',
    liveDemoUrl: '',
    technicalChallenges: '',
  },
  {
    slug: 'caaficare',
    title: 'CaafiCare',
    subtitle: 'Digital Healthcare Platform Concept',
    shortDescription:
      'A technology-focused healthcare product concept exploring improved digital health access and services.',
    category: 'Healthcare',
    status: 'Concept',
    technologies: [],
    thumbnail: '',
    screenshots: [],
    problemStatement:
      'Access to coordinated digital health services can be inconsistent without purpose-built products.',
    proposedSolution:
      'A concept platform outlining patient-facing workflows and technology-enabled health service access.',
    keyFeatures: [
      'Health service discovery',
      'Patient-oriented digital touchpoints',
      'Conceptual care coordination',
    ],
    detailedCaseStudy:
      'CaafiCare is an exploratory healthcare concept focused on improving access through thoughtful digital experiences.',
    githubUrl: '',
    liveDemoUrl: '',
    technicalChallenges: '',
  },
  {
    slug: 'balance',
    title: 'Balance',
    subtitle: 'Personal Finance Application',
    shortDescription:
      'An expense tracking and personal budgeting application designed to make financial management easier.',
    category: 'Finance',
    status: '',
    technologies: [],
    thumbnail: '',
    screenshots: [],
    problemStatement:
      'Personal finances are hard to manage without clear visibility into spending and budgets.',
    proposedSolution:
      'An application for tracking expenses, organizing budgets, and surfacing financial patterns.',
    keyFeatures: [
      'Expense tracking',
      'Budget organization',
      'Financial summaries',
    ],
    detailedCaseStudy:
      'Balance emphasizes clarity and structured data to support everyday financial decision-making.',
    githubUrl: '',
    liveDemoUrl: '',
    technicalChallenges: '',
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}