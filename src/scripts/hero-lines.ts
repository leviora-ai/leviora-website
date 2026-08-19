// Anchors the hero flow lines to the real element edges: each left chip's
// right edge → a point on the chat card's left edge, chat's right edge → each
// output card's left edge. Static SVG coordinates can't line up here because
// the grid's middle column and gaps are fluid, so paths are measured from the
// DOM and rewritten on load, font load and resize. Positions come from
// offsetLeft/offsetTop accumulation, not getBoundingClientRect — the reveal
// animation translates chips/cards and would poison rect-based measurements.
const graph = document.querySelector<HTMLElement>('[data-graph]');
const svg = graph?.querySelector<SVGSVGElement>('.hero__lines') ?? null;
const chat = graph?.querySelector<HTMLElement>('.chat') ?? null;
const chips = graph
  ? Array.from(graph.querySelectorAll<HTMLElement>('.hero__col--left .chip'))
  : [];
const cards = graph
  ? Array.from(graph.querySelectorAll<HTMLElement>('.hero__col--right .out-card'))
  : [];
const inPaths = svg ? Array.from(svg.querySelectorAll<SVGPathElement>('.flow:not(.flow--out)')) : [];
const outPaths = svg ? Array.from(svg.querySelectorAll<SVGPathElement>('.flow--out')) : [];

interface Box {
  x: number;
  y: number;
  w: number;
  h: number;
}

// Layout-space position relative to the graph (transform-immune).
const box = (el: HTMLElement): Box | null => {
  let x = 0;
  let y = 0;
  let n: HTMLElement | null = el;
  while (n && n !== graph) {
    x += n.offsetLeft;
    y += n.offsetTop;
    n = n.offsetParent as HTMLElement | null;
  }
  if (n !== graph) return null;
  return { x, y, w: el.offsetWidth, h: el.offsetHeight };
};

const r = (v: number) => Math.round(v * 10) / 10;

// Cubic with horizontal tangents at both ends, like the original curves.
const curve = (x1: number, y1: number, x2: number, y2: number) => {
  const dx = x2 - x1;
  return `M${r(x1)} ${r(y1)} C ${r(x1 + dx * 0.5)} ${r(y1)}, ${r(x2 - dx * 0.4)} ${r(y2)}, ${r(x2)} ${r(y2)}`;
};

const setDot = (cls: string, d: string) => {
  const dot = svg?.querySelector<SVGCircleElement>(cls);
  if (dot) dot.style.offsetPath = `path('${d}')`;
};

const draw = () => {
  if (!graph || !svg || !chat) return;
  if (getComputedStyle(svg).display === 'none') return;

  const c = box(chat);
  if (!c) return;
  svg.setAttribute('viewBox', `0 0 ${graph.offsetWidth} ${graph.offsetHeight}`);

  chips.forEach((chip, i) => {
    const b = box(chip);
    const path = inPaths[i];
    if (!b || !path) return;
    const endY = c.y + (c.h * (i + 1)) / (chips.length + 1);
    const d = curve(b.x + b.w, b.y + b.h / 2, c.x, endY);
    path.setAttribute('d', d);
    setDot(`.hdot--${i + 1}`, d);
  });

  cards.forEach((card, i) => {
    const b = box(card);
    const path = outPaths[i];
    if (!b || !path) return;
    const startY = c.y + (c.h * (i + 1)) / (cards.length + 1);
    const d = curve(c.x + c.w, startY, b.x, b.y + b.h / 2);
    path.setAttribute('d', d);
  });

  // Two traveling dots on the output side ride the first and last line.
  if (outPaths[0]) setDot('.hdot--6', outPaths[0].getAttribute('d') ?? '');
  const last = outPaths[outPaths.length - 1];
  if (last) setDot('.hdot--7', last.getAttribute('d') ?? '');
};

if (graph && svg && chat) {
  draw();
  document.fonts?.ready.then(draw);

  const ro = new ResizeObserver(draw);
  ro.observe(graph);
  ro.observe(chat);
  graph
    .querySelectorAll<HTMLElement>('.hero__col')
    .forEach((col) => ro.observe(col));
}

export {};
