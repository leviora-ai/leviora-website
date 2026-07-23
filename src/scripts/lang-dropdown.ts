for (const root of document.querySelectorAll<HTMLElement>('[data-lang-dropdown]')) {
  const btn = root.querySelector<HTMLButtonElement>('.lang__btn')!;
  const menu = root.querySelector<HTMLElement>('.lang__menu')!;

  const setOpen = (open: boolean) => {
    btn.setAttribute('aria-expanded', String(open));
    menu.hidden = !open;
  };

  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    setOpen(menu.hidden);
  });

  document.addEventListener('click', (e) => {
    if (!root.contains(e.target as Node)) setOpen(false);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') setOpen(false);
  });
}

export {};
