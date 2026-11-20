/**
 * Central configuration — Sakariye Siyaad Hussein
 */

export type SocialLink = {
  id: 'github' | 'linkedin' | 'email' | 'phone';
  label: string;
  href: string;
  visible: boolean;
};

export type SeoConfig = {
  siteUrl: string;
  basePath: string;
  homeTitle: string;
  homeDescription: string;
  defaultOgImage: string;
  twitterHandle: string;
  googleSiteVerification: string;
};

export type PersonConfig = {
  fullName: string;
  brandName: string;
  professionalTitle: string;
  heroHeadline: string;
  heroSubheadline: string;
  jobTitleStructuredData: string;
  expertiseTags: string[];
  location: string;
  heroPrimaryCta: string;
  heroSecondaryCta: string;
  heroGithubCta: string;
  heroDescription: string;
  aboutParagraphs: string[];
  initials: string;
  profileImage: string;
  profileImageAlt: string;
  githubUsername: string;
  githubUrl: string;
  linkedinUrl: string;
  email: string;
  phone: string;
  showPhonePublicly: boolean;
  resumePath: string;
  availableForOpportunities: boolean;
};

export function isConfigured(value: string | undefined | null): boolean {
  return Boolean(value?.trim());
}

export const person: PersonConfig = {
  fullName: 'Sakariye Siyaad Hussein',
  brandName: 'Sakariye',
  professionalTitle: 'Sakariye Siyaad Hussein',
  heroHeadline: 'Software Engineer, Researcher & Technology Innovator',
  heroSubheadline: 'Cybersecurity | IoT | Robotics | Digital Creativity',
  jobTitleStructuredData: 'Software Engineer',
  expertiseTags: [
    'Software Engineering',
    'Research',
    'Cybersecurity',
    'IoT',
    'Robotics',
    'Digital Media',
  ],
  location: 'Hargeisa, Somaliland',
  heroPrimaryCta: 'Explore My Work',
  heroSecondaryCta: 'Get in Touch',
  heroGithubCta: 'View GitHub',
  heroDescription:
    "I'm Sakariye Siyaad Hussein, a multidisciplinary technology professional based in Hargeisa, Somaliland. I work across software development, cybersecurity, research, Internet of Things, robotics, and creative digital solutions, combining technical thinking with practical innovation.",
  aboutParagraphs: [
    'I work at the intersection of software engineering, academic and technical research, cybersecurity, connected systems, robotics, and digital media. My focus is on building credible, useful technology — from full-stack applications to exploratory research and creative visual communication.',
    'Whether I am developing Flutter and web platforms, analyzing security risks, prototyping IoT or robotics ideas, or producing design and video content, I approach each discipline with structured problem-solving and a commitment to clarity.',
    'I value continuous learning, interdisciplinary thinking, and innovation that can serve universities, technology teams, clients, and community initiatives in Somaliland and beyond.',
  ],
  initials: 'SSH',
  profileImage: '/images/profile.webp',
  profileImageAlt: 'Sakariye Siyaad Hussein — professional portrait',
  githubUsername: 'zakarie33',
  githubUrl: 'https://github.com/zakarie33',
  linkedinUrl: 'https://www.linkedin.com/in/sakarie-siyad-a8464b340/',
  email: 'sakariesiyad@gmail.com',
  phone: '+252636076150',
  showPhonePublicly: true,
  resumePath: '',
  availableForOpportunities: true,
};

export const seo: SeoConfig = {
  siteUrl: 'https://zakarie33.github.io',
  basePath: '/',
  homeTitle:
    'Sakariye Siyaad Hussein | Software Engineer, Researcher & Technology Innovator',
  homeDescription:
    'Discover the portfolio of Sakariye Siyaad Hussein, a software engineer, researcher and technology professional specializing in cybersecurity, IoT, robotics and digital innovation in Somaliland.',
  defaultOgImage: '/images/og-default.svg',
  twitterHandle: '',
  googleSiteVerification: '',
};

export function getSocialLinks(): SocialLink[] {
  const links: SocialLink[] = [
    {
      id: 'email',
      label: 'Email',
      href: `mailto:${person.email}`,
      visible: isConfigured(person.email),
    },
    {
      id: 'phone',
      label: 'Phone',
      href: `tel:${person.phone.replace(/\s/g, '')}`,
      visible: person.showPhonePublicly && isConfigured(person.phone),
    },
    {
      id: 'github',
      label: 'GitHub',
      href: person.githubUrl,
      visible: isConfigured(person.githubUrl),
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      href: person.linkedinUrl,
      visible: isConfigured(person.linkedinUrl),
    },
  ];
  return links.filter((l) => l.visible);
}

export function getCanonicalSiteUrl(): string | undefined {
  return isConfigured(seo.siteUrl) ? seo.siteUrl.replace(/\/$/, '') : undefined;
}

export function getPageTitle(suffix?: string): string {
  if (!suffix) return seo.homeTitle;
  return `${suffix} | ${person.fullName}`;
}