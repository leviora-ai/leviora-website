// Single-open behavior for FAQ accordions.
for (const list of document.querySelectorAll<HTMLElement>('[data-faq]')) {
  const items = Array.from(list.querySelectorAll<HTMLDetailsElement>('details'));
  for (const item of items) {
    item.addEventListener('toggle', () => {
      if (!item.open) return;
      for (const other of items) {
        if (other !== item) other.open = false;
      }
    });
  }
}

export {};
