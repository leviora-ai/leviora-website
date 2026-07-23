const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const targets = document.querySelectorAll<HTMLElement>(
  '[data-reveal], [data-reveal-stagger]',
);

for (const el of targets) {
  if (el.hasAttribute('data-reveal-stagger')) {
    let i = 0;
    for (const child of el.children) {
      (child as HTMLElement).style.setProperty('--i', String(i++));
    }
  }
}

if (reduced) {
  for (const el of targets) el.classList.add('in');
} else {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          observer.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
  );
  for (const el of targets) observer.observe(el);
}

export {};
