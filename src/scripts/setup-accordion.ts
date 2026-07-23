// Connect / Map / Use accordion: auto-advances while visible so the section
// feels alive; a user click takes over and stops the autoplay for good.
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

for (const list of document.querySelectorAll<HTMLElement>('[data-setup-list]')) {
  const items = Array.from(list.querySelectorAll<HTMLButtonElement>('.setup-item'));
  let current = Math.max(0, items.findIndex((i) => i.classList.contains('setup-item--active')));
  let timer: ReturnType<typeof setInterval> | null = null;
  let userTookOver = false;

  const activate = (index: number) => {
    current = index;
    items.forEach((item, i) => {
      item.classList.toggle('setup-item--active', i === index);
      item.setAttribute('aria-expanded', String(i === index));
    });
  };

  const stop = () => {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  };

  items.forEach((item, i) => {
    item.addEventListener('click', () => {
      userTookOver = true;
      stop();
      activate(i);
    });
  });

  if (!reduced) {
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !timer && !userTookOver) {
        timer = setInterval(() => {
          if (!document.hidden) activate((current + 1) % items.length);
        }, 4000);
      } else if (!entry.isIntersecting) {
        stop();
      }
    });
    io.observe(list);
  }
}

export {};
