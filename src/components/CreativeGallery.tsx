import { useMemo, useState } from 'react';
import type { CreativeWork } from '../data/creative';

type Props = {
  works: CreativeWork[];
  baseUrl: string;
};

export default function CreativeGallery({ works, baseUrl }: Props) {
  const categories = useMemo(() => {
    const set = new Set(works.map((w) => w.category));
    return ['All', ...Array.from(set)];
  }, [works]);

  const [filter, setFilter] = useState('All');
  const [lightbox, setLightbox] = useState<CreativeWork | null>(null);

  const filtered = useMemo(() => {
    if (filter === 'All') return works;
    return works.filter((w) => w.category === filter);
  }, [filter, works]);

  const asset = (path: string) =>
    path.startsWith('http') ? path : `${baseUrl}${path.replace(/^\//, '')}`;

  return (
    <div>
      <div className="-mx-1 mb-6 flex gap-2 overflow-x-auto pb-2 sm:mx-0 sm:mb-8 sm:flex-wrap sm:overflow-visible" role="tablist" aria-label="Filter creative work">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            role="tab"
            aria-selected={filter === cat}
            onClick={() => setFilter(cat)}
            className={`touch-target shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition sm:shrink ${
              filter === cat
                ? 'border-emerald-400/50 bg-emerald-500/15 text-emerald-200'
                : 'border-[var(--border)] bg-[var(--surface)] text-[var(--muted)] hover:text-[var(--text)]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((work) => (
          <li key={work.id}>
            <button
              type="button"
              className="group w-full overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] text-left transition hover:border-emerald-400/30"
              onClick={() => setLightbox(work)}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[var(--surface-elevated)]">
                {work.thumbnail ? (
                  <img
                    src={asset(work.thumbnail)}
                    alt={work.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-sm text-[var(--muted)]">
                    {work.medium === 'video' ? 'Video preview' : 'Design preview'}
                  </div>
                )}
                <span className="absolute left-3 top-3 rounded-full bg-slate-950/70 px-2 py-0.5 text-xs text-white">
                  {work.medium === 'video' ? 'Video' : 'Design'}
                </span>
              </div>
              <div className="p-4">
                <p className="text-xs uppercase tracking-wide text-cyan-300/90">{work.category}</p>
                <h3 className="mt-1 font-semibold text-[var(--text)]">{work.title}</h3>
                <p className="mt-2 line-clamp-2 text-sm text-[var(--muted)]">{work.description}</p>
              </div>
            </button>
          </li>
        ))}
      </ul>

      {lightbox && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-slate-950/85 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.title}
          onClick={() => setLightbox(null)}
        >
          <div
            className="max-h-[90vh] w-full max-w-4xl overflow-auto rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4 sm:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold text-[var(--text)]">{lightbox.title}</h3>
                <p className="mt-1 text-sm text-[var(--muted)]">{lightbox.description}</p>
              </div>
              <button
                type="button"
                className="rounded-lg border border-[var(--border)] px-3 py-1 text-sm"
                onClick={() => setLightbox(null)}
              >
                Close
              </button>
            </div>
            <div className="mt-4">
              {lightbox.medium === 'video' && lightbox.videoEmbedUrl ? (
                <div className="aspect-video w-full overflow-hidden rounded-xl bg-black">
                  <iframe
                    title={lightbox.title}
                    src={lightbox.videoEmbedUrl}
                    className="h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ) : lightbox.mediaPath ? (
                <img
                  src={asset(lightbox.mediaPath)}
                  alt={lightbox.title}
                  className="max-h-[70vh] w-full rounded-xl object-contain"
                />
              ) : null}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}