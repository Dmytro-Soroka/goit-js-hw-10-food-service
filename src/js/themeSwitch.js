const themeSwitcher = document.getElementById('theme-switch-toggle');
const body = document.querySelector('body');
const theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

body.classList.add(theme.LIGHT);
saveTheme();

themeSwitcher.addEventListener('change', onToggle);

function onToggle(e) {
    body.classList.toggle(theme.DARK);
    localStorage.setItem('themeDARK', e.target.checked);
};
function saveTheme() {
  const savedToggle = localStorage.getItem('themeDARK');

  if (savedToggle === 'true') {
      body.classList.toggle(theme.DARK);
      themeSwitcher.checked = true;
  }
};