// Connect / Map / Use accordion: auto-advances while visible so the section
// feels alive; a user click takes over and stops the autoplay for good.
// The step rotation also runs under prefers-reduced-motion (transitions are
// disabled in CSS there, so steps swap instantly instead of animating).
for (const list of document.querySelectorAll<HTMLElement>('[data-setup-list]')) {
  const items = Array.from(list.querySelectorAll<HTMLButtonElement>('.setup-item'));
  const panel = list.closest('section')?.querySelector<HTMLElement>('[data-setup-panel]');
  const views = panel ? Array.from(panel.querySelectorAll<HTMLElement>('.setup-view')) : [];

  let current = Math.max(0, items.findIndex((i) => i.classList.contains('setup-item--active')));
  let userTookOver = false;

  const activate = (index: number) => {
    current = index;
    items.forEach((item, i) => {
      item.classList.toggle('setup-item--active', i === index);
      item.setAttribute('aria-expanded', String(i === index));
    });
    panel?.setAttribute('data-step', String(index));
    views.forEach((view, i) => view.setAttribute('aria-hidden', String(i !== index)));
  };

  items.forEach((item, i) => {
    item.addEventListener('click', () => {
      userTookOver = true;
      activate(i);
    });
  });

  const inViewport = () => {
    const rect = list.getBoundingClientRect();
    return rect.bottom > 0 && rect.top < window.innerHeight;
  };

  setInterval(() => {
    if (userTookOver || document.hidden || !inViewport()) return;
    activate((current + 1) % items.length);
  }, 4000);
}

export {};
