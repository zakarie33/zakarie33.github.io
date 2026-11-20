/** Prefix a public-folder path with the Astro base URL (GitHub Pages subpaths). */
export function withBase(assetPath: string): string {
  const base = import.meta.env.BASE_URL || '/';
  const clean = assetPath.startsWith('/') ? assetPath.slice(1) : assetPath;
  return `${base}${clean}`.replace(/\/{2,}/g, '/');
}