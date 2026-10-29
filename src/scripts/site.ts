/* Interactions du site : en-tête, menus, animations et formulaires. */

/* ---------- En-tête : ombre au défilement ---------- */
const header = document.querySelector<HTMLElement>('[data-header]');
if (header) {
  const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 8);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

/* ---------- Menus déroulants (desktop) ---------- */
const dropdowns = Array.from(document.querySelectorAll<HTMLElement>('[data-dropdown]'));
const hoverCapable = window.matchMedia('(hover: hover) and (pointer: fine)');

function setOpen(item: HTMLElement, open: boolean) {
  item.classList.toggle('is-open', open);
  item.querySelector('button')?.setAttribute('aria-expanded', String(open));
}
function closeAll(except?: HTMLElement) {
  dropdowns.forEach((d) => d !== except && setOpen(d, false));
}

dropdowns.forEach((item) => {
  const button = item.querySelector('button');
  let timer: number | undefined;
  button?.addEventListener('click', () => {
    const open = !item.classList.contains('is-open');
    closeAll(item);
    setOpen(item, open);
  });
  item.addEventListener('mouseenter', () => {
    if (!hoverCapable.matches) return;
    window.clearTimeout(timer);
    closeAll(item);
    setOpen(item, true);
  });
  item.addEventListener('mouseleave', () => {
    if (!hoverCapable.matches) return;
    timer = window.setTimeout(() => setOpen(item, false), 160);
  });
  item.addEventListener('focusout', (e) => {
    if (!item.contains(e.relatedTarget as Node)) setOpen(item, false);
  });
});

document.addEventListener('click', (e) => {
  if (!(e.target as HTMLElement).closest('[data-dropdown]')) closeAll();
});
document.addEventListener('keydown', (e) => {
  if (e.key !== 'Escape') return;
  const open = dropdowns.find((d) => d.classList.contains('is-open'));
  if (open) {
    setOpen(open, false);
    open.querySelector('button')?.focus();
  }
  if (burger?.getAttribute('aria-expanded') === 'true') toggleMobile(false);
});

/* ---------- Menu mobile ---------- */
const burger = document.querySelector<HTMLButtonElement>('[data-burger]');
const mobileNav = document.querySelector<HTMLElement>('[data-mobile-nav]');

function toggleMobile(open: boolean) {
  if (!burger || !mobileNav) return;
  burger.setAttribute('aria-expanded', String(open));
  mobileNav.hidden = !open;
  document.body.style.overflow = open ? 'hidden' : '';
}
burger?.addEventListener('click', () => toggleMobile(burger.getAttribute('aria-expanded') !== 'true'));
mobileNav?.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => toggleMobile(false)));
window.matchMedia('(min-width: 1200px)').addEventListener('change', (e) => e.matches && toggleMobile(false));

/* ---------- Apparition au défilement ---------- */
const revealEls = document.querySelectorAll<HTMLElement>('[data-reveal]');
if ('IntersectionObserver' in window && revealEls.length) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
  );
  revealEls.forEach((el) => io.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add('is-visible'));
}

/* ---------- Compteurs animés ---------- */
const counters = document.querySelectorAll<HTMLElement>('[data-count]');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (counters.length && 'IntersectionObserver' in window && !reduceMotion) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target as HTMLElement;
      io.unobserve(el);
      const target = Number(el.dataset.count);
      const start = performance.now();
      const duration = 1400;
      const step = (now: number) => {
        const p = Math.min(1, (now - start) / duration);
        el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3))).toLocaleString(document.documentElement.lang);
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    });
  });
  counters.forEach((c) => io.observe(c));
}

/* ---------- Formulaires de demande ---------- */
document.querySelectorAll<HTMLFormElement>('[data-lead-form]').forEach((form) => {
  const wrapper = form.closest<HTMLElement>('[data-form-wrapper]');
  const success = wrapper?.querySelector<HTMLElement>('[data-form-success]');
  const errorBox = form.querySelector<HTMLElement>('[data-form-error]');
  const submit = form.querySelector<HTMLButtonElement>('button[type="submit"]');
  const submitLabel = form.querySelector<HTMLElement>('[data-submit-label]');
  const companyField = form.querySelector<HTMLElement>('[data-company-field]');
  const pageInput = form.querySelector<HTMLInputElement>('[data-page-url]');
  if (pageInput) pageInput.value = window.location.href;

  // Affiche le champ « Société » uniquement pour les professionnels
  form.querySelectorAll<HTMLInputElement>('input[name="profile"]').forEach((radio) => {
    radio.addEventListener('change', () => {
      if (companyField) companyField.hidden = !form.querySelector<HTMLInputElement>('[data-profile-pro]')?.checked;
    });
  });

  // Validation en direct après la première tentative
  form.addEventListener('input', () => {
    if (form.classList.contains('was-validated') && form.checkValidity() && errorBox) errorBox.hidden = true;
  });

  const showError = (message: string) => {
    if (!errorBox) return;
    errorBox.textContent = message;
    errorBox.hidden = false;
  };

  const showSuccess = (mode: 'sent' | 'mailto') => {
    if (!success) return;
    if (mode === 'mailto') {
      const tpl = success.querySelector<HTMLTemplateElement>('[data-mailto-copy]');
      const title = tpl?.content.querySelector('[data-title]')?.textContent;
      const text = tpl?.content.querySelector('[data-text]')?.textContent;
      if (title) success.querySelector('[data-success-title]')!.textContent = title;
      if (text) success.querySelector('[data-success-text]')!.textContent = text;
    }
    form.hidden = true;
    wrapper?.querySelector<HTMLElement>('.lead-form__head')?.setAttribute('hidden', '');
    success.hidden = false;
    success.focus();
  };

  const buildSummary = () => {
    const lines: string[] = [];
    const profile = form.querySelector<HTMLInputElement>('input[name="profile"]:checked');
    if (profile) lines.push(`${form.dataset.lang === 'en' ? 'Profile' : 'Profil'} : ${profile.value}`);
    form.querySelectorAll<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>('[data-label]').forEach((el) => {
      const value = el.value.trim();
      if (value && !(el.closest('[hidden]'))) lines.push(`${el.dataset.label} : ${value}`);
    });
    return lines.join('\n');
  };

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    form.classList.add('was-validated');

    // Pot de miel anti-spam
    const honeypot = form.querySelector<HTMLInputElement>('input[name="website"]');
    if (honeypot?.value) {
      showSuccess('sent');
      return;
    }

    if (!form.checkValidity()) {
      showError(form.dataset.msgInvalid ?? '');
      form.querySelector<HTMLElement>(':invalid')?.focus();
      return;
    }
    if (errorBox) errorBox.hidden = true;

    const endpoint = form.dataset.endpoint;
    const originalLabel = submitLabel?.textContent ?? '';

    if (!endpoint) {
      // Solution de secours : e-mail pré-rempli
      const name = (form.querySelector<HTMLInputElement>('input[name="name"]')?.value ?? '').trim();
      const subject = `${form.dataset.formType} — ${name}`;
      const body = `${buildSummary()}\n\n— ${window.location.href}`;
      window.location.href = `mailto:${form.dataset.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      showSuccess('mailto');
      return;
    }

    try {
      if (submit) submit.disabled = true;
      if (submitLabel) submitLabel.textContent = form.dataset.msgSending ?? '…';
      const data = new FormData(form);
      data.append('summary', buildSummary());
      const response = await fetch(endpoint, { method: 'POST', body: data, headers: { Accept: 'application/json' } });
      if (!response.ok) throw new Error(String(response.status));
      showSuccess('sent');
      form.reset();
    } catch {
      const tpl = success?.querySelector<HTMLTemplateElement>('[data-error-copy]');
      showError(tpl?.content.textContent?.trim() ?? 'Error');
    } finally {
      if (submit) submit.disabled = false;
      if (submitLabel) submitLabel.textContent = originalLabel;
    }
  });
});
