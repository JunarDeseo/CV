const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved user preference
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    body.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'light') toggleBtn.textContent = '☀️';
}

toggleBtn.addEventListener('click', () => {
    let theme = body.getAttribute('data-theme');
    
    if (theme === 'light') {
        body.removeAttribute('data-theme');
        localStorage.setItem('theme', 'dark');
        toggleBtn.textContent = '🌙';
    } else {
        body.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        toggleBtn.textContent = '☀️';
    }
});