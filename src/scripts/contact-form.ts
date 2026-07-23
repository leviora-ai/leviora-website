for (const form of document.querySelectorAll<HTMLFormElement>('[data-contact-form]')) {
  const submit = form.querySelector<HTMLButtonElement>('.cform__submit')!;
  const status = form.querySelector<HTMLElement>('[data-status]')!;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    status.textContent = '';
    status.classList.remove('ok', 'err');
    submit.disabled = true;
    submit.firstChild!.textContent = submit.dataset.sending ?? '…';

    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch(form.action, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, locale: form.dataset.lang }),
      });
      const body = await res.json().catch(() => ({ ok: false }));
      if (res.ok && body.ok) {
        status.textContent = status.dataset.success ?? 'OK';
        status.classList.add('ok');
        form.reset();
      } else {
        throw new Error('request failed');
      }
    } catch {
      status.textContent = status.dataset.error ?? 'Error';
      status.classList.add('err');
    } finally {
      submit.disabled = false;
      submit.firstChild!.textContent = submit.dataset.label ?? '';
    }
  });
}

export {};
