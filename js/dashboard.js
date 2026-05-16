// ============================================
//  DASHBOARD.JS - Datos y gráficos del dashboard
// ============================================

const stats = {
  campeones: 168,
  partidas: 1247,
  winRate: 58,
  popular: 'Yasuo'
};

// Render de barras (partidas por mes)
const partidas = [
  { mes: 'Ene', val: 60 },
  { mes: 'Feb', val: 85 },
  { mes: 'Mar', val: 70 },
  { mes: 'Abr', val: 95 },
  { mes: 'May', val: 110 },
  { mes: 'Jun', val: 130 },
  { mes: 'Jul', val: 90 }
];

const roles = [
  { name: 'Mid',     pct: 28 },
  { name: 'ADC',     pct: 22 },
  { name: 'Jungla',  pct: 20 },
  { name: 'Top',     pct: 18 },
  { name: 'Soporte', pct: 12 }
];

document.addEventListener('DOMContentLoaded', () => {
  // Barras
  const bars = document.getElementById('bars');
  if (bars) {
    const max = Math.max(...partidas.map(p => p.val));
    bars.innerHTML = partidas.map(p =>
      `<div class="bar" style="height:${(p.val / max) * 100}%"><span>${p.mes}</span></div>`
    ).join('');
  }

  // Roles
  const rolesEl = document.getElementById('roles');
  if (rolesEl) {
    rolesEl.innerHTML = roles.map(r => `
      <li>
        <div style="flex:1">
          <div style="display:flex;justify-content:space-between">
            <span>${r.name}</span><span class="pct">${r.pct}%</span>
          </div>
          <div class="role-bar"><i style="width:${r.pct * 3}%"></i></div>
        </div>
      </li>
    `).join('');
  }
});
