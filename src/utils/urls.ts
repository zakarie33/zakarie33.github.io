import { isConfigured, seo } from '../data/site';

export function resolveAssetPath(path: string): string {
  if (!path) return '';
  if (path.startsWith('http')) return path;
  const base = seo.basePath.endsWith('/') ? seo.basePath : `${seo.basePath}/`;
  const normalized = path.startsWith('/') ? path.slice(1) : path;
  if (base === '/') return `/${normalized}`;
  return `${base}${normalized}`.replace(/\/{2,}/g, '/');
}

export function resolvePagePath(path: string): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  const base = seo.basePath === '/' ? '' : seo.basePath.replace(/\/$/, '');
  return `${base}${clean}` || '/';
}

export function absoluteUrl(path: string): string | undefined {
  const canonical = seo.siteUrl?.replace(/\/$/, '');
  if (!isConfigured(canonical)) return undefined;
  const page = resolvePagePath(path);
  return `${canonical}${page}`;
}

export function isExternalUrl(url: string): boolean {
  return /^https?:\/\//i.test(url);
}