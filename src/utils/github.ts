import { person, isConfigured } from '../data/site';
import { githubRepoFallback, type GithubRepoCard } from '../data/github';

type GithubApiRepo = {
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  topics?: string[];
  stargazers_count: number;
  private: boolean;
  fork: boolean;
};

const MAX_REPOS = 6;

export async function fetchGithubRepos(): Promise<GithubRepoCard[]> {
  if (!isConfigured(person.githubUsername)) {
    return githubRepoFallback;
  }

  const headers: HeadersInit = {
    Accept: 'application/vnd.github+json',
    'User-Agent': 'sakariye-portfolio-build',
  };

  const token =
    (typeof process !== 'undefined' && process.env.GITHUB_TOKEN) ||
    import.meta.env.GITHUB_TOKEN;
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  try {
    const res = await fetch(
      `https://api.github.com/users/${encodeURIComponent(person.githubUsername)}/repos?sort=updated&per_page=30`,
      { headers },
    );

    if (!res.ok) {
      return githubRepoFallback;
    }

    const data = (await res.json()) as GithubApiRepo[];
    return data
      .filter((r) => !r.private && !r.fork)
      .slice(0, MAX_REPOS)
      .map((r) => ({
        name: r.name,
        description: r.description ?? '',
        htmlUrl: r.html_url,
        language: r.language ?? undefined,
        topics: r.topics,
        stars: r.stargazers_count,
      }));
  } catch {
    return githubRepoFallback;
  }
}