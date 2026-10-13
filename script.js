const page = document.body;
const toggle = document.querySelector('.nav-toggle');
toggle.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!open));
  toggle.setAttribute('aria-label', open ? 'Open menu' : 'Close menu');
  page.classList.toggle('nav-open', !open);
});
document.querySelectorAll('.nav a').forEach(link => link.addEventListener('click', () => {
  page.classList.remove('nav-open');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-label', 'Open menu');
}));
document.querySelectorAll('.tab').forEach(tab => tab.addEventListener('click', () => {
  document.querySelectorAll('.tab').forEach(other => {
    other.classList.remove('active');
    other.setAttribute('aria-selected', 'false');
  });
  tab.classList.add('active');
  tab.setAttribute('aria-selected', 'true');
  const filter = tab.dataset.filter;
  document.querySelectorAll('.dish').forEach(dish => {
    dish.classList.toggle('hidden', filter !== 'all' && dish.dataset.kind !== filter);
  });
}));
const backTop = document.querySelector('.back-top');
window.addEventListener('scroll', () => backTop.classList.toggle('visible', window.scrollY > 550), { passive: true });
backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
