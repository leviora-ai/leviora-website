// Hero tab sequencer: cycles Sees / Understands / Takes Action. Each step
// highlights the matching output card the moment the tab switches, then
// types the tab's question and swaps the AI answer. Clicking a tab (or
// Enter/Space) jumps to it and stops the auto loop for good. Paused while
// offscreen or the document is hidden.
const graph = document.querySelector<HTMLElement>('[data-graph]');
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const tabs = graph ? Array.from(graph.querySelectorAll<HTMLElement>('.chat__tab')) : [];
const question = graph?.querySelector<HTMLElement>('[data-tab-question]') ?? null;
const questionText = question?.querySelector<HTMLElement>('p') ?? null;
const answer = graph?.querySelector<HTMLElement>('[data-tab-answer]') ?? null;
const answerText = answer?.querySelector<HTMLElement>('p') ?? null;
const cards = graph ? Array.from(graph.querySelectorAll<HTMLElement>('[data-out-tab]')) : [];

const TAB_KEYS = ['sees', 'understands', 'takesAction'];
const TYPE_MS = 45;
const FADE_MS = 150;
const HOLD_MS = 3800;

const paused = () => document.hidden || !!graph?.classList.contains('paused');

let current = 0;
let auto = true;
let run = 0; // generation counter — bumping it cancels the in-flight sequence
let timers: number[] = [];

const later = (fn: () => void, ms: number) => timers.push(window.setTimeout(fn, ms));
const cancelPending = () => {
  timers.forEach((t) => clearTimeout(t));
  timers = [];
};

const highlight = (index: number) =>
  cards.forEach((c) => c.classList.toggle('out-card--hi', c.dataset.outTab === TAB_KEYS[index]));

const swapAnswer = (index: number) => {
  const next = answer?.getAttribute(`data-a-${index}`);
  if (!answer || !answerText || !next) return;
  if (reduced) {
    answerText.textContent = next;
    return;
  }
  answer.classList.add('swapping');
  later(() => {
    answerText.textContent = next;
    answer.classList.remove('swapping');
  }, FADE_MS);
};

const advance = () => {
  if (!auto) return;
  if (paused()) {
    later(advance, 500);
    return;
  }
  activate((current + 1) % tabs.length);
};

function activate(index: number) {
  const gen = ++run;
  cancelPending();
  answer?.classList.remove('swapping');
  tabs[current]?.classList.remove('chat__tab--active');
  current = index;
  tabs[current]?.classList.add('chat__tab--active');
  // Card highlight tracks the active tab instantly — a lingering old
  // highlight while the question types reads as the wrong card being lit.
  highlight(index);

  const text = question?.getAttribute(`data-q-${index}`) ?? '';
  if (!question || !questionText || !text) return;

  if (reduced) {
    // No animation: question and answer switch at once.
    questionText.textContent = text;
    swapAnswer(index);
    return;
  }

  // Old question fades out (never deleted char by char), new one is typed.
  question.classList.add('q-fade');
  later(() => {
    if (gen !== run) return;
    questionText.textContent = '';
    question.classList.remove('q-fade');
    question.classList.add('typing');
    let i = 0;
    const type = () => {
      if (gen !== run) return;
      questionText.textContent = text.slice(0, ++i);
      if (i < text.length) {
        later(type, TYPE_MS);
        return;
      }
      question.classList.remove('typing');
      swapAnswer(index);
      later(advance, HOLD_MS);
    };
    type();
  }, FADE_MS);
}

if (tabs.length > 1) {
  tabs.forEach((tab, i) => {
    const jump = () => {
      auto = false;
      activate(i);
    };
    tab.addEventListener('click', jump);
    tab.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        jump();
      }
    });
  });

  // SSR already renders state 0 (question + answer + highlighted card);
  // under reduced motion it stays static unless the user picks a tab.
  if (!reduced) later(advance, HOLD_MS);
}

if (graph) {
  const setPaused = (p: boolean) => graph.classList.toggle('paused', p);

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
