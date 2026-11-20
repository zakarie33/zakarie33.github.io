import { useMemo, useState } from 'react';
import type { Project } from '../data/projects';

type Props = {
  projects: Project[];
  baseUrl: string;
};

export default function ProjectShowcase({ projects, baseUrl }: Props) {
  const categories = useMemo(() => {
    const set = new Set(projects.map((p) => p.category));
    return ['All', ...Array.from(set)];
  }, [projects]);

  const [active, setActive] = useState('All');

  const filtered = useMemo(() => {
    if (active === 'All') return projects;
    return projects.filter((p) => p.category === active);
  }, [active, projects]);

  return (
    <div>
      <div className="-mx-1 mb-6 flex gap-2 overflow-x-auto pb-2 sm:mx-0 sm:mb-8 sm:flex-wrap sm:overflow-visible" role="tablist" aria-label="Filter projects by category">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            role="tab"
            aria-selected={active === cat}
            onClick={() => setActive(cat)}
            className={`touch-target shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition sm:shrink ${
              active === cat
                ? 'border-emerald-400/50 bg-emerald-500/15 text-emerald-200'
                : 'border-[var(--border)] bg-[var(--surface)] text-[var(--muted)] hover:text-[var(--text)]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 xl:grid-cols-3">
        {filtered.map((project) => (
          <li key={project.slug}>
            <article className="card-motion group flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] hover:border-emerald-400/30 hover:shadow-[0_20px_50px_-20px_rgba(16,185,129,0.35)]">
              <div className="relative aspect-[16/10] overflow-hidden bg-[var(--surface-elevated)]">
                {project.thumbnail ? (
                  <img
                    src={project.thumbnail.startsWith('http') ? project.thumbnail : `${baseUrl}${project.thumbnail.replace(/^\//, '')}`}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center bg-gradient-to-br from-emerald-500/10 via-transparent to-cyan-500/10">
                    <span className="text-sm font-medium text-[var(--muted)]">Screenshot coming soon</span>
                  </div>
                )}
              </div>

              <div className="flex min-w-0 flex-1 flex-col p-4 sm:p-6">
                <div className="mb-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-lg font-semibold text-[var(--text)]">{project.title}</h3>
                    {project.status && (
                      <span className="rounded-full bg-cyan-500/10 px-2.5 py-0.5 text-xs font-medium text-cyan-200">
                        {project.status}
                      </span>
                    )}
                  </div>
                  {project.subtitle && (
                    <p className="mt-1 text-xs font-medium uppercase tracking-wide text-cyan-300/90">
                      {project.subtitle}
                    </p>
                  )}
                </div>
                <p className="mb-4 flex-1 text-sm leading-relaxed text-[var(--muted)]">
                  {project.shortDescription}
                </p>
                {project.technologies.length > 0 && (
                  <ul className="mb-5 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-md border border-[var(--border)] bg-[var(--surface-elevated)] px-2 py-1 text-xs text-[var(--muted)]"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                )}
                <a
                  href={`${baseUrl}projects/${project.slug}`}
                  className="inline-flex items-center text-sm font-semibold text-emerald-300 transition hover:text-emerald-200"
                >
                  View case study
                </a>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}