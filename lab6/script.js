// 1. Loader: hide when everything has loaded
window.addEventListener('load', () => {
  document.getElementById('loader').classList.add('done');
});

// 2. Flip buttons: toggle the 3D flip and keep aria-pressed in sync
document.querySelectorAll('.flip-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const flipped = btn.closest('.card').classList.toggle('is-flipped');
    btn.setAttribute('aria-pressed', flipped);
  });
});

// 3. Theme toggle: remember choice, otherwise follow the OS setting
const root = document.documentElement;
const themeBtn = document.getElementById('theme-toggle');
function applyTheme(t) {
  root.dataset.theme = t;
  const dark = t === 'dark';
  themeBtn.setAttribute('aria-pressed', dark);
  themeBtn.textContent = dark ? '☀️ Light mode' : '🌙 Dark mode';
}
let saved = null;
try { saved = localStorage.getItem('theme'); } catch (e) {}
applyTheme(saved || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'));
themeBtn.addEventListener('click', () => {
  const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
  applyTheme(next);
  try { localStorage.setItem('theme', next); } catch (e) {}
});
