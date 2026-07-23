// Plays the chat conversation (question → typing → answer → input)
// when a ChatWindow scrolls into view. Once per window.
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const windows = document.querySelectorAll<HTMLElement>('.cw');

if (reduced) {
  for (const w of windows) w.classList.add('cw--play');
} else {
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('cw--play');
          io.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.35 },
  );
  for (const w of windows) io.observe(w);
}

export {};
