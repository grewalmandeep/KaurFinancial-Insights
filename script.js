// Smooth scrolling for internal links
document.addEventListener('click', function(e) {
  const target = e.target.closest('a[href^="#"]');
  if (!target) return;
  const href = target.getAttribute('href');
  const el = document.querySelector(href);
  if (!el) return;
  e.preventDefault();
  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

// Enhance <details> animation (simple open/close class)
document.querySelectorAll('details').forEach(function(d) {
  d.addEventListener('toggle', function() {
    if (d.open) { d.classList.add('open'); } else { d.classList.remove('open'); }
  });
});

// Appointment form handling (client-side only demo)
// Calendly popup trigger
const openCalendlyBtn = document.getElementById('open-calendly');
if (openCalendlyBtn) {
  openCalendlyBtn.addEventListener('click', function() {
    const url = 'https://calendly.com/your-username/consultation';
    if (window.Calendly && Calendly.initPopupWidget) {
      Calendly.initPopupWidget({ url: url });
    } else {
      window.open(url, '_blank');
    }
  });
}

// Google Calendar quick-add: creates a 30-min event from current time
const quickGcalBtn = document.getElementById('quick-gcal');
if (quickGcalBtn) {
  quickGcalBtn.addEventListener('click', function() {
    const now = new Date();
    const in30 = new Date(now.getTime() + 30 * 60000);
    function fmt(d){
      const p = (n)=>String(n).padStart(2,'0');
      return `${d.getFullYear()}${p(d.getMonth()+1)}${p(d.getDate())}T${p(d.getHours())}${p(d.getMinutes())}00`;
    }
    const params = new URLSearchParams({
      action: 'TEMPLATE',
      text: 'Consultation',
      dates: `${fmt(now)}/${fmt(in30)}`,
      details: 'Quick-add from site',
      location: 'Online meeting'
    });
    window.open('https://calendar.google.com/calendar/render?' + params.toString(), '_blank');
  });
}

// FAB: open Calendly popup or jump to appointment
const fabBook = document.getElementById('fab-book');
if (fabBook) {
  fabBook.addEventListener('click', function() {
    const url = 'https://calendly.com/your-username/consultation';
    if (window.Calendly && Calendly.initPopupWidget) {
      Calendly.initPopupWidget({ url: url });
    } else {
      const el = document.querySelector('#appointment');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      else window.open(url, '_blank');
    }
  });
}


