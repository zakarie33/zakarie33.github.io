import { ChevronDown, Menu, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import {
  getMobileFlatLinks,
  getProfileGroupItems,
  githubLink,
  navGroups,
  primaryLinks,
} from '../data/navigation';

function DesktopGroup({ label, items }: { label: string; items: { href: string; label: string }[] }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onPointer(e: MouseEvent) {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener('mousedown', onPointer);
    return () => document.removeEventListener('mousedown', onPointer);
  }, []);

  return (
    <div ref={ref} className="relative hidden xl:block">
      <button
        type="button"
        className="inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-[var(--muted)] transition hover:text-[var(--text)]"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        {label}
        <ChevronDown size={14} aria-hidden className={open ? 'rotate-180 transition' : 'transition'} />
      </button>
      {open && (
        <div
          role="menu"
          className="absolute left-0 top-full z-50 mt-2 min-w-[13rem] rounded-xl border border-[var(--border)] bg-[var(--surface)] p-2 shadow-2xl"
        >
          {items.map((item) => (
            <a
              key={item.href}
              role="menuitem"
              href={item.href}
              className="block rounded-lg px-3 py-2 text-sm text-[var(--muted)] transition hover:bg-emerald-500/10 hover:text-emerald-200"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export function DesktopNav() {
  const profileItems = getProfileGroupItems();
  const workItems = navGroups[0].items;

  return (
    <nav className="hidden items-center gap-1 xl:flex" aria-label="Primary">
      {primaryLinks
        .filter((l) => l.href === '#home')
        .map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="rounded-lg px-3 py-2 text-sm font-medium text-[var(--muted)] transition hover:text-[var(--text)]"
          >
            {link.label}
          </a>
        ))}
      <DesktopGroup label="Work" items={workItems} />
      <DesktopGroup label="Profile" items={profileItems} />
      <a
        href={githubLink.href}
        className="rounded-lg px-3 py-2 text-sm font-medium text-[var(--muted)] transition hover:text-[var(--text)]"
      >
        {githubLink.label}
      </a>
      <a
        href="#contact"
        className="rounded-lg px-3 py-2 text-sm font-medium text-[var(--muted)] transition hover:text-[var(--text)]"
      >
        Contact
      </a>
    </nav>
  );
}

export function MobileNavMenu() {
  const [open, setOpen] = useState(false);
  const links = getMobileFlatLinks();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <div className="xl:hidden">
      <button
        type="button"
        className="touch-target inline-flex items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface)]"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((v) => !v)}
      >
        <span className="sr-only">Toggle menu</span>
        {open ? <X size={18} aria-hidden /> : <Menu size={18} aria-hidden />}
      </button>
      {open && createPortal(
        <div
          id="mobile-menu"
          className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          onClick={() => setOpen(false)}
        >
          <nav
            className="safe-pad absolute right-0 top-0 h-full w-[min(100%,20rem)] overflow-y-auto border-l border-[var(--border)] bg-[var(--surface)] p-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-[max(1rem,env(safe-area-inset-top))] shadow-2xl sm:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-end">
              <button
                type="button"
                className="touch-target inline-flex items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface-elevated)]"
                onClick={() => setOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X size={18} aria-hidden />
              </button>
            </div>
            <ul className="mt-4 flex flex-col gap-1">
              {links.map((link) => (
                <li key={link.href + link.label}>
                  <a
                    href={link.href}
                    className="touch-target block rounded-lg px-3 py-3 text-base font-medium text-[var(--text)] transition hover:bg-emerald-500/10 hover:text-emerald-300"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>,
        document.body,
      )}
    </div>
  );
}