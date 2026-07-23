// Pause hero graph animations when the hero is offscreen or the tab is hidden.
const graph = document.querySelector<HTMLElement>('[data-graph]');

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
