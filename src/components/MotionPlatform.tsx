import { useEffect } from 'react';

export default function MotionPlatform() {
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const revealEls = document.querySelectorAll<HTMLElement>('[data-reveal]');
    if (reduced) {
      revealEls.forEach((el) => el.classList.add('is-visible'));
    } else {
      const revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const el = entry.target as HTMLElement;
            const delay = el.dataset.revealDelay;
            if (delay) el.style.transitionDelay = `${delay}ms`;
            const variant = el.dataset.revealVariant;
            if (variant) el.classList.add(`reveal-${variant}`);
            el.classList.add('is-visible');
            revealObserver.unobserve(el);
          });
        },
        { threshold: 0.08, rootMargin: '0px 0px -6% 0px' },
      );
      revealEls.forEach((el) => revealObserver.observe(el));
    }

    const sections = document.querySelectorAll<HTMLElement>('main section[id]');
    const navLinks = document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]');

    const setActiveNav = (id: string) => {
      navLinks.forEach((link) => {
        const match = link.getAttribute('href') === `#${id}`;
        link.classList.toggle('nav-link-active', match);
        if (match) link.setAttribute('aria-current', 'true');
        else link.removeAttribute('aria-current');
      });
    };

    if (!reduced) {
      document.documentElement.classList.add('motion-enabled');
      requestAnimationFrame(() => {
        document.body.classList.add('page-entered');
      });

      const sectionObserver = new IntersectionObserver(
        (entries) => {
          const visible = entries
            .filter((e) => e.isIntersecting)
            .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
          if (visible[0]?.target?.id) {
            setActiveNav(visible[0].target.id);
          }
        },
        { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.15, 0.35] },
      );
      sections.forEach((section) => {
        section.classList.add('section-flow');
        sectionObserver.observe(section);
      });

      const home = document.getElementById('home');
      home?.classList.add('is-visible');

      const sectionRevealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
            }
          });
        },
        { threshold: 0.06, rootMargin: '0px 0px -5% 0px' },
      );
      sections.forEach((section) => sectionRevealObserver.observe(section));
    } else {
      sections.forEach((section) => section.classList.add('section-flow', 'is-visible'));
      if (sections[0]?.id) setActiveNav(sections[0].id);
    }

    const onScroll = () => {
      const header = document.querySelector('header');
      if (!header) return;
      header.classList.toggle('nav-scrolled', window.scrollY > 24);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return null;
}