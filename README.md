# Sakariye Siyaad Hussein — Multidisciplinary Portfolio

Premium technology, research, cybersecurity, IoT, robotics, and creative portfolio for **Sakariye Siyaad Hussein**.

**Target URL:** [https://zakarie33.github.io/](https://zakarie33.github.io/)

Stack: Astro · TypeScript · Tailwind CSS · React islands

---

## 1. Run locally

```bash
npm install
npm run dev
```

```bash
npm run build
npm run check
npm run preview
```

---

## 2. Profile photo

Photo is set in `src/data/site.ts`:

```ts
profileImage: '/images/profile.webp',
```

Replace `public/images/profile.webp` (transparent background recommended).

---

## 3. Add research publications

Edit `src/data/research.ts`. Example:

```ts
export const researchEntries: ResearchEntry[] = [
  {
    slug: 'my-paper',
    title: 'Research Title',
    field: 'Computer Science',
    category: 'Published Articles',
    status: 'Published',
    abstract: '...',
    objectives: ['...'],
    methodology: '...',
    publicationDate: '2025',
    authors: ['Sakariye Siyaad Hussein'],
    institution: '',
    doi: '',
    pdfPath: '/papers/my-paper.pdf',
    citation: '...',
  },
];
```

Detail pages generate at `/research/[slug]`. Leave arrays empty until you have verified papers.

---

## 4. Upload graphic design samples

1. Add images to `public/images/creative/`.
2. Edit `src/data/creative.ts`:

```ts
{
  id: 'brand-01',
  title: 'Logo Concept',
  medium: 'graphic',
  category: 'Logo Design',
  description: 'Brief description',
  thumbnail: '/images/creative/logo-thumb.webp',
  mediaPath: '/images/creative/logo-full.webp',
  videoEmbedUrl: '',
}
```

---

## 5. Embed video projects

In `src/data/creative.ts`, use `medium: 'video'` and a YouTube/Vimeo **embed** URL:

```ts
videoEmbedUrl: 'https://www.youtube.com/embed/VIDEO_ID',
```

The creative gallery opens a lightbox with the embedded player.

---

## 6. Add IoT & robotics demonstrations

Edit `src/data/iot-robotics.ts` with specs, images, circuit diagrams, and `videoUrl` when verified.

Add project images under `public/images/hardware/`.

---

## 7. Add GitHub repositories

- Public repos load automatically at build time via GitHub API (`zakarie33`).
- Curate fallbacks in `src/data/github.ts`.
- Optional `GITHUB_TOKEN` in GitHub Actions for higher rate limits.

---

## 8. Add hackathon certificate

In `src/data/achievements.ts`, set:

```ts
date: 'YYYY',
winningProject: 'Project name',
certificatePath: '/certificates/somaliland-tech-expo.pdf',
eventPhotoPath: '/images/achievements/expo-photo.jpg',
supportingUrl: 'https://...',
```

Only add details you can verify.

---

## 9. Deploy to GitHub Pages

1. Create repo `zakarie33.github.io` on GitHub.
2. Push this project to `main`.
3. **Settings → Pages → GitHub Actions**.
4. Workflow: `.github/workflows/deploy.yml` (defaults: `SITE_URL=https://zakarie33.github.io`, `BASE_PATH=/`).

---

## 10. Google Search Console

1. Deploy the site.
2. Add property `https://zakarie33.github.io/` in [Search Console](https://search.google.com/search-console).
3. Add verification token to `seo.googleSiteVerification` in `src/data/site.ts`, redeploy, verify.
4. Submit sitemap: `https://zakarie33.github.io/sitemap-index.xml`.
5. Request indexing for the homepage via URL inspection (optional).

---

## Configuration map

| File | Content |
|------|---------|
| `src/data/site.ts` | Identity, SEO, contact, hero copy |
| `src/data/skills.ts` | Expertise categories |
| `src/data/projects.ts` | Software projects |
| `src/data/research.ts` | Publications & research |
| `src/data/iot-robotics.ts` | IoT & robotics |
| `src/data/cybersecurity.ts` | Security portfolio |
| `src/data/creative.ts` | Design & video gallery |
| `src/data/achievements.ts` | Awards (incl. Somaliland Tech Expo) |
| `src/data/experience.ts` | Education & employment |

---

## Sections on the homepage

Home · About · Expertise · Projects · Research · IoT & Robotics · Cybersecurity · Creative · Achievements · Education & Experience · GitHub · Contact

Navigation uses **Work** and **Profile** dropdowns on desktop to avoid clutter.