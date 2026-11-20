export type TimelineEntry = {
  id: string;
  title: string;
  organization: string;
  location?: string;
  startDate: string;
  endDate: string;
  description: string[];
  href?: string;
};

export type Certification = {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
};

/** Add verified professional experience entries here */
export const experience: TimelineEntry[] = [];

/** Add verified education entries here */
export const education: TimelineEntry[] = [
  {
    id: 'unity-bba',
    title: 'Bachelor of Business Administration (BBA)',
    organization: 'Unity University',
    startDate: 'Currently enrolled',
    endDate: '',
    description: [],
  },
  {
    id: 'frantz-fanon-software-engineering',
    title: "Bachelor's Degree in Software Engineering",
    organization: 'Frantz Fanon University',
    startDate: 'Graduated',
    endDate: '',
    description: [],
  },
];

/** Add verified certifications here */
export const certifications: Certification[] = [];

export function hasExperienceSection(): boolean {
  return experience.length > 0;
}

export function hasEducationSection(): boolean {
  return education.length > 0;
}

export function hasCertificationsSection(): boolean {
  return certifications.length > 0;
}

export function hasAnyTimelineContent(): boolean {
  return (
    hasExperienceSection() ||
    hasEducationSection() ||
    hasCertificationsSection()
  );
}