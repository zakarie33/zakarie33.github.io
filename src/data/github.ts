/**
 * Manually curated GitHub repository cards when the API is unavailable or rate-limited.
 */
export type GithubRepoCard = {
  name: string;
  description: string;
  htmlUrl: string;
  language?: string;
  topics?: string[];
  stars?: number;
};

export const githubRepoFallback: GithubRepoCard[] = [];