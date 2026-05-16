// ============================================
//  CALENDARIO.JS - Calendario de eventos LoL
// ============================================

const eventos = {
  '2025-05-18': { name: 'Clash Weekend', tipo: 'torneo' },
  '2025-05-22': { name: 'Parche 15.10', tipo: 'parche' },
  '2025-05-25': { name: 'Evento Soul Fighter', tipo: 'evento' },
  '2025-06-05': { name: 'MSI Finals', tipo: 'torneo' },
  '2025-06-12': { name: 'Parche 15.11', tipo: 'parche' },
  '2025-09-25': { name: 'Worlds 2025 - Inicio', tipo: 'worlds' },
  '2025-11-02': { name: 'Worlds Final', tipo: 'worlds' }
};

let viewDate = new Date();

function renderCalendar() {
  const cal = document.getElementById('calendar');
  if (!cal) return;
  const y = viewDate.getFullYear();
  const m = viewDate.getMonth();
  const meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];

  document.getElementById('calTitle').textContent = `${meses[m]} ${y}`;

  const first = new Date(y, m, 1).getDay();
  const days = new Date(y, m + 1, 0).getDate();
  const dias = ['DOM','LUN','MAR','MIE','JUE','VIE','SAB'];

  let html = dias.map(d => `<div class="cal-head">${d}</div>`).join('');
  for (let i = 0; i < first; i++) html += '<div></div>';
  for (let d = 1; d <= days; d++) {
    const key = `${y}-${String(m+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
    const ev = eventos[key];
    html += `<div class="cal-day ${ev ? 'has-event tipo-' + ev.tipo : ''}" ${ev ? `title="${ev.name}"` : ''}>
      <span>${d}</span>${ev ? `<small>${ev.name}</small>` : ''}
    </div>`;
  }
  cal.innerHTML = html;
}

function changeMonth(n) {
  viewDate.setMonth(viewDate.getMonth() + n);
  renderCalendar();
}

document.addEventListener('DOMContentLoaded', renderCalendar);
