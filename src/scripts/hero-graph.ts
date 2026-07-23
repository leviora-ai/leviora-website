// Pause hero graph animations when the hero is offscreen or the tab is hidden.
const graph = document.querySelector<HTMLElement>('[data-graph]');
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Cycle the Sees / Understands / Takes Action tabs for a "live" feel.
const tabs = graph ? Array.from(graph.querySelectorAll<HTMLElement>('.chat__tab')) : [];
if (tabs.length > 1 && !reduced) {
  let current = tabs.findIndex((t) => t.classList.contains('chat__tab--active'));
  setInterval(() => {
    if (document.hidden || graph?.classList.contains('paused')) return;
    tabs[current]?.classList.remove('chat__tab--active');
    current = (current + 1) % tabs.length;
    tabs[current]?.classList.add('chat__tab--active');
  }, 2400);
}

if (graph) {
  const setPaused = (paused: boolean) => graph.classList.toggle('paused', paused);

  const io = new IntersectionObserver(
    ([entry]) => setPaused(!entry.isIntersecting),
    { threshold: 0 },
  );
  io.observe(graph);

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) setPaused(true);
    else if (graph.getBoundingClientRect().bottom > 0) setPaused(false);
  });
}

export {};
