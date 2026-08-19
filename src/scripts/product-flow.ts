// Product hero scenario rotator: cross-fades the ontology graph, the
// scenario title/caption and the action list through the use cases every few
// seconds. Clicking a dot jumps to that scenario and stops the auto loop for
// good. Paused while offscreen or the tab is hidden; under reduced motion the
// first scenario stays static and only the dots switch.
const root = document.querySelector<HTMLElement>('[data-pflow]');
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const all = (sel: string) => (root ? Array.from(root.querySelectorAll<Element>(sel)) : []);
const layers = [
  all('[data-scn]'),
  all('[data-scn-title]'),
  all('[data-scn-cap]'),
  all('[data-scn-acts]'),
  all('[data-scn-dot]'),
];
const dots = layers[4];
const count = layers[0].length;

const HOLD_MS = 6500;
let current = 0;
let auto = true;
let timer = 0;

const paused = () => document.hidden || !!root?.classList.contains('pflow-paused');

const activate = (index: number) => {
  current = index;
  layers.forEach((els) =>
    els.forEach((el, i) => {
      el.classList.toggle('on', i === index);
      if (el.tagName === 'BUTTON') el.setAttribute('aria-pressed', String(i === index));
    }),
  );
};

const tick = () => {
  if (!auto) return;
  if (paused()) {
    timer = window.setTimeout(tick, 500);
    return;
  }
  activate((current + 1) % count);
  timer = window.setTimeout(tick, HOLD_MS);
};

if (root && count > 1) {
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      auto = false;
      window.clearTimeout(timer);
      activate(i);
    });
  });

  if (!reduced) timer = window.setTimeout(tick, HOLD_MS);

  const io = new IntersectionObserver(
    ([entry]) => root.classList.toggle('pflow-paused', !entry.isIntersecting),
    { threshold: 0 },
  );
  io.observe(root);
}

export {};
