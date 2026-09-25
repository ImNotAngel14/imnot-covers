const toggleBtn = document.getElementById('theme-toggle');
const themeIcon = toggleBtn.querySelector('i');
const html = document.documentElement;

function updateIcon(theme) {
  themeIcon.className = theme === 'light' ? 'bi bi-moon-fill' : 'bi bi-sun-fill';
}

const saved = localStorage.getItem('theme');
if (saved === 'light') {
  html.setAttribute('data-theme', 'light');
}
updateIcon(saved || 'dark');

toggleBtn.addEventListener('click', () => {
  const current = html.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
  if (current === 'light') {
    html.setAttribute('data-theme', 'light');
  } else {
    html.removeAttribute('data-theme');
  }
  localStorage.setItem('theme', current);
  updateIcon(current);
});