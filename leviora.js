// Leviora homepage — interactive bits
(function () {
  /* ----- SEE / THINK / ACT tabs ----- */
  const tabs = document.querySelectorAll('.cap-tab');
  const panels = document.querySelectorAll('.cap-panel');
  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const key = tab.dataset.tab;
      tabs.forEach((t) => t.classList.toggle('is-active', t === tab));
      panels.forEach((p) =>
        p.classList.toggle('is-active', p.dataset.panel === key)
      );
    });
  });

  /* ----- FAQ: ensure only one open at a time ----- */
  const qas = document.querySelectorAll('.qa');
  qas.forEach((qa) => {
    qa.addEventListener('toggle', () => {
      if (qa.open) {
        qas.forEach((other) => {
          if (other !== qa) other.open = false;
        });
      }
    });
  });

  /* ----- scroll-reveal ----- */
  const revealSelectors = [
    '.hero__copy',
    '.hero__visual',
    '.strip__metric',
    '.manifesto__title',
    '.manifesto__body',
    '.manifesto__pull',
    '.capabilities__header',
    '.cap-tabs',
    '.cap-panel',
    '.setup__header',
    '.step',
    '.teaser__title',
    '.motto__title',
    '.motto__sub',
  ];
  const targets = document.querySelectorAll(revealSelectors.join(','));
  targets.forEach((el) => el.classList.add('reveal'));

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
  );
  targets.forEach((el) => io.observe(el));

  /* ----- staggered reveal for grouped items ----- */
  const stagger = (selector, step = 80) => {
    document.querySelectorAll(selector).forEach((el, i) => {
      el.style.transitionDelay = i * step + 'ms';
    });
  };
  stagger('.strip__metric', 60);
  stagger('.manifesto__pull-item', 90);
  stagger('.step', 120);
  stagger('.qa', 40);
  stagger('.ig-cell', 30);

  /* ----- subtle parallax on hero mockups ----- */
  const hero = document.querySelector('.hero__visual');
  if (hero && window.matchMedia('(hover: hover)').matches) {
    const mocks = hero.querySelectorAll('.mock');
    hero.addEventListener('mousemove', (e) => {
      const rect = hero.getBoundingClientRect();
      const cx = (e.clientX - rect.left) / rect.width - 0.5;
      const cy = (e.clientY - rect.top) / rect.height - 0.5;
      mocks.forEach((m, i) => {
        const depth = (i + 1) * 6;
        const baseRot = m.classList.contains('mock--dash')
          ? -1.2
          : m.classList.contains('mock--chat')
          ? 1.4
          : -0.8;
        m.style.transform = `translate(${cx * depth}px, ${cy * depth}px) rotate(${baseRot}deg)`;
      });
    });
    hero.addEventListener('mouseleave', () => {
      mocks.forEach((m) => {
        const baseRot = m.classList.contains('mock--dash')
          ? -1.2
          : m.classList.contains('mock--chat')
          ? 1.4
          : -0.8;
        m.style.transform = `rotate(${baseRot}deg)`;
      });
    });
  }
})();
