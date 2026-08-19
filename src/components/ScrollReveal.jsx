import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Blocks to animate, most specific first. An element is only ever claimed by the
// first group that matches it, so nothing animates twice.
const GROUPS = [
  // Alternating photo/text rows arrive from opposite sides.
  { selector: '.alt-row__media', variant: 'slide-start' },
  { selector: '.alt-row__text', variant: 'slide-end' },

  // Collections stagger across each row.
  { selector: '.stats-bar__grid > *', variant: 'up', stagger: true },
  { selector: '.trust-bar__logos > *', variant: 'up', stagger: true },
  { selector: '.services-grid__layout > *', variant: 'up', stagger: true },
  { selector: '.modules__grid > *', variant: 'up', stagger: true },
  { selector: '.grid > *', variant: 'up', stagger: true },

  // Section headings and the SVG illustration that anchors most sections.
  { selector: '.section-head', variant: 'up' },
  { selector: '.svg-wrap', variant: 'zoom' },

  // The home hero is above the fold, so it plays on mount. Its visual is
  // absolutely positioned and full-bleed — sliding it would leave a gap.
  { selector: '.home-hero__copy', variant: 'up' },
  { selector: '.home-hero__visual', variant: 'fade' },

  // Remaining copy / media blocks, page by page.
  {
    selector: [
      '.services-hero__inner',
      '.products-hero__inner',
      '.support-hero__inner',
      '.about-hero__copy',
      '.about-hero__photo',
      '.mission__copy',
      '.tco__copy',
      '.faq__list',
      '.testimonial__photo',
      '.expertise__copy',
      '.expertise__ring',
      '.contact-form__photo',
      '.contact-form__card',
      '.security__copy',
      '.office__inner > *',
      '.cta-band__text',
    ].join(', '),
    variant: 'up',
  },
];

const DURATION = 700; // keep in sync with the transition in _reveal.scss
const STAGGER_STEP = 70;
const STAGGER_CYCLE = 4; // widest grid, so a full row staggers then resets

/**
 * Fades every section block in as it scrolls into view.
 *
 * Renders nothing — it tags blocks with `data-reveal="<variant>"`, flips
 * `data-revealed` on intersection, then strips both attributes once the
 * animation has played so elements go back to their own hover transitions.
 * Because the hidden state is only ever applied from here, content stays
 * visible if scripting or IntersectionObserver is unavailable.
 */
export default function ScrollReveal() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    const timers = [];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          observer.unobserve(el);
          el.dataset.revealed = '';

          const settled = DURATION + Number(el.dataset.revealDelay || 0) + 60;
          timers.push(
            setTimeout(() => {
              el.style.transitionDelay = '';
              delete el.dataset.reveal;
              delete el.dataset.revealed;
              delete el.dataset.revealDelay;
            }, settled),
          );
        });
      },
      { threshold: 0, rootMargin: '0px 0px -8% 0px' },
    );

    const claimed = new Set();
    GROUPS.forEach(({ selector, variant, stagger }) => {
      document.querySelectorAll(selector).forEach((el) => {
        if (claimed.has(el) || 'revealed' in el.dataset) return;
        claimed.add(el);
        el.dataset.reveal = variant;

        if (stagger && el.parentElement) {
          const position = [...el.parentElement.children].indexOf(el);
          const delay = (position % STAGGER_CYCLE) * STAGGER_STEP;
          el.dataset.revealDelay = String(delay);
          el.style.transitionDelay = `${delay}ms`;
        }

        observer.observe(el);
      });
    });

    return () => {
      observer.disconnect();
      timers.forEach(clearTimeout);
    };
  }, [pathname]);

  return null;
}
