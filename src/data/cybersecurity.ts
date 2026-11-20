export type SecurityEntryType =
  | 'Security Research'
  | 'Defensive Security'
  | 'Network Security'
  | 'Security Analysis'
  | 'Technical Write-up'
  | 'Cybersecurity Lab';

export type SecurityPortfolioEntry = {
  slug: string;
  title: string;
  type: SecurityEntryType;
  summary: string;
  methodology: string;
  tools: string[];
  findings: string;
  lessonsLearned: string;
  reportPath: string;
  githubUrl: string;
};

/** Add verified cybersecurity work here — no fabricated CVEs or client engagements. */
export const securityEntries: SecurityPortfolioEntry[] = [];

export function hasSecurityPortfolio(): boolean {
  return securityEntries.length > 0;
}