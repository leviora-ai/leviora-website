// Scroll-driven zoom-out for the statement section background.
// scale 1.18 → 1.0 as the section travels through the viewport.
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const section = document.querySelector<HTMLElement>('[data-statement]');
const bg = document.querySelector<HTMLElement>('[data-statement-bg]');

if (section && bg && !reduced) {
  let active = false;
  let raf = 0;

  const update = () => {
    raf = 0;
    const rect = section.getBoundingClientRect();
    const vh = window.innerHeight;
    // 0 when section enters from bottom, 1 when it leaves at top
    const raw = Math.min(1, Math.max(0, (vh - rect.top) / (vh + rect.height)));
    // remap to the visible span so the zoom clearly plays while on screen
    const p = Math.min(1, Math.max(0, (raw - 0.08) / 0.75));
    const scale = 1.32 - 0.32 * p;
    const ty = (0.5 - p) * 36;
    bg.style.transform = `scale(${scale.toFixed(4)}) translateY(${ty.toFixed(1)}px)`;
  };

  const onScroll = () => {
    if (active && !raf) raf = requestAnimationFrame(update);
  };

  const io = new IntersectionObserver(([entry]) => {
    active = entry.isIntersecting;
    if (active) update();
  });
  io.observe(section);

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
}

export {};
