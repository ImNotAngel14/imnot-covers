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

async function initGallery() {
  const res = await fetch('data/covers.json');
  const covers = await res.json();

  covers.sort((a,b) => new Date(b.date) - new Date(a.date));

  const grid = document.getElementById('grid');

  covers.forEach((p) => {
    const col = document.createElement('div');
    col.className = 'col-6 col-lg-3';
    col.innerHTML = `
      <div class="card h-100">
        <img src="${p.thumbnail}" class="card-img-top" alt="${p.title_en} | ${p.title_es}">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">${p.title_en} | ${p.title_es}</h5>
          <p class="card-text">${p.subtitle}</p>
          <a href="${p.link}" target="_blank" rel="noopener" class="d-grid btn btn-gold mt-auto">Descargar</a>
        </div>
    </div>
    `;
    grid.appendChild(col);
  });
}

initGallery();