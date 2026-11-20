export type ResearchStatus =
  | 'Published'
  | 'Working Paper'
  | 'Technical Report'
  | 'Ongoing'
  | 'Research Project'
  | '';

export type ResearchEntry = {
  slug: string;
  title: string;
  field: string;
  category: 'Research Projects' | 'Published Articles' | 'Working Papers' | 'Technical Reports' | 'Ongoing Research';
  status: ResearchStatus;
  abstract: string;
  objectives: string[];
  methodology: string;
  publicationDate: string;
  authors: string[];
  institution: string;
  doi: string;
  pdfPath: string;
  citation: string;
};

/** Add verified research entries here — do not invent publications. */
export const researchEntries: ResearchEntry[] = [];

export function getResearchBySlug(slug: string): ResearchEntry | undefined {
  return researchEntries.find((r) => r.slug === slug);
}

export function hasResearch(): boolean {
  return researchEntries.length > 0;
}