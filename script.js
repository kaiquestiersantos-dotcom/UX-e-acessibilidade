const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

function applyTheme(theme) {
  body.dataset.theme = theme;
  localStorage.setItem('theme', theme);
  const isDark = theme === 'dark';
  themeToggle.setAttribute('aria-pressed', String(isDark));
  themeToggle.textContent = isDark ? 'Ativar tema claro' : 'Ativar tema escuro';
}

const storedTheme = localStorage.getItem('theme');
const preferredTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
applyTheme(storedTheme || preferredTheme);

themeToggle.addEventListener('click', () => {
  const nextTheme = body.dataset.theme === 'dark' ? 'light' : 'dark';
  applyTheme(nextTheme);
});
