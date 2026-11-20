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
export const education: TimelineEntry[] = [];

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