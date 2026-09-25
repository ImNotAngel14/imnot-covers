const toggleBtn = document.getElementById('theme-toggle');
const html = document.documentElement;

function updateButtonText(theme) {
    toggleBtn.textContent = theme === 'light' ? '🌙' : '☀️';
}

const saved = localStorage.getItem('theme');
if (saved === 'light') {
    html.setAttribute('data-theme', 'light');
}
updateButtonText(saved || 'dark');

toggleBtn.addEventListener('click', () => {
    const current = html.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    if (current === 'light') {
    html.setAttribute('data-theme', 'light');
    } else {
    html.removeAttribute('data-theme');
    }
    localStorage.setItem('theme', current);
    updateButtonText(current);
});

kofiWidgetOverlay.draw('imnotangel14', {
    'type': 'floating-chat',
    'floating-chat.donateButton.text': 'Support me',
    'floating-chat.donateButton.background-color': '#C6A74F',
    'floating-chat.donateButton.text-color': '#fff'
});