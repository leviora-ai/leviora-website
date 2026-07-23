for (const list of document.querySelectorAll<HTMLElement>('[data-setup-list]')) {
  const items = Array.from(list.querySelectorAll<HTMLButtonElement>('.setup-item'));
  for (const item of items) {
    item.addEventListener('click', () => {
      for (const other of items) {
        const active = other === item;
        other.classList.toggle('setup-item--active', active);
        other.setAttribute('aria-expanded', String(active));
      }
    });
  }
}

export {};
