// Pause hero graph animations when the hero is offscreen or the tab is hidden.
const graph = document.querySelector<HTMLElement>('[data-graph]');
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Cycle the Sees / Understands / Takes Action tabs and swap the AI answer
// content with them, so the demo shows real output for each capability.
const tabs = graph ? Array.from(graph.querySelectorAll<HTMLElement>('.chat__tab')) : [];
const answer = graph?.querySelector<HTMLElement>('[data-tab-answer]') ?? null;
const answerText = answer?.querySelector<HTMLElement>('p') ?? null;

if (tabs.length > 1) {
  let current = tabs.findIndex((t) => t.classList.contains('chat__tab--active'));
  setInterval(() => {
    if (document.hidden || graph?.classList.contains('paused')) return;
    tabs[current]?.classList.remove('chat__tab--active');
    current = (current + 1) % tabs.length;
    tabs[current]?.classList.add('chat__tab--active');

    const next = answer?.getAttribute(`data-a-${current}`);
    if (answer && answerText && next) {
      answer.classList.add('swapping');
      setTimeout(() => {
        answerText.textContent = next;
        answer.classList.remove('swapping');
      }, 200);
    }
  }, 3000);
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
