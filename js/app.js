// ============================================
//  APP.JS - Lógica común a todas las pantallas
// ============================================

// Marcar enlace activo en la navbar
document.addEventListener('DOMContentLoaded', () => {
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') === path) a.classList.add('active');
  });

  // Aplicar tema guardado
  const theme = localStorage.getItem('lol-theme');
  if (theme === 'light') document.body.classList.add('light');
});

// Alternar tema oscuro / claro (usado en configuracion.html)
function toggleTheme() {
  document.body.classList.toggle('light');
  localStorage.setItem('lol-theme', document.body.classList.contains('light') ? 'light' : 'dark');
}

// Mostrar mensaje toast
function toast(msg) {
  const t = document.createElement('div');
  t.textContent = msg;
  t.style.cssText = `position:fixed;bottom:30px;left:50%;transform:translateX(-50%);
    background:linear-gradient(180deg,#785a28,#463714);color:#f0e6d2;
    padding:14px 28px;border:1px solid #c8aa6e;letter-spacing:2px;
    text-transform:uppercase;font-size:12px;z-index:1000;
    clip-path:polygon(8px 0,100% 0,calc(100% - 8px) 100%,0 100%);`;
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 2500);
}
