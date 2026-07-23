// Plays chat conversations message by message when a [data-chat-seq]
// container scrolls into view: each [data-msg] fades in in order; an
// optional [data-typing] indicator shows before the message following it.
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const containers = document.querySelectorAll<HTMLElement>('[data-chat-seq]');

const STEP_MS = 450;
const TYPING_MS = 900;

function play(container: HTMLElement): void {
  const messages = Array.from(container.querySelectorAll<HTMLElement>('[data-msg]'));
  const typing = container.querySelector<HTMLElement>('[data-typing]');
  const typingBefore = typing?.dataset.typingBefore
    ? Number(typing.dataset.typingBefore)
    : 1;

  let delay = 150;
  messages.forEach((msg, i) => {
    if (typing && i === typingBefore) {
      const showAt = delay;
      setTimeout(() => {
        typing.hidden = false;
      }, showAt);
      setTimeout(() => {
        typing.hidden = true;
      }, showAt + TYPING_MS);
      delay += TYPING_MS + 100;
    }
    setTimeout(() => msg.classList.add('msg-in'), delay);
    delay += STEP_MS;
  });
}

if (reduced) {
  for (const c of containers) {
    for (const m of c.querySelectorAll<HTMLElement>('[data-msg]')) m.classList.add('msg-in');
  }
} else {
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          play(entry.target as HTMLElement);
          io.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.3 },
  );
  for (const c of containers) io.observe(c);
}

export {};
