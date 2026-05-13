/**
 * MATEMATIKUP — index.js
 * Scripts spécifiques à la page d'accueil uniquement.
 */
document.addEventListener('DOMContentLoaded', function () {

  /* ── Counter animation ── */
  function animateCount(el, target, suffix, duration) {
    if (!el) return;
    let current = 0;
    const step = target / (duration / 16);
    (function run() {
      current = Math.min(current + step, target);
      el.textContent = Math.floor(current).toLocaleString('fr-FR') + suffix;
      if (current < target) requestAnimationFrame(run);
    })();
  }

  const elStudents = document.getElementById('stat-students');
  const elCourses  = document.getElementById('stat-courses');
  let counted = false;

  if (elStudents) {
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !counted) {
        counted = true;
        animateCount(elStudents, 5000, '+', 1800);
        animateCount(elCourses,  500,   '+', 1800);
        io.disconnect();
      }
    }, { threshold: 0.4 });
    io.observe(elStudents);
  }

  /* ── Newsletter (footer handles its own, this is for any inline form) ── */
  const nlForm = document.getElementById('newsletter-form');
  if (nlForm) {
    nlForm.addEventListener('submit', function (e) {
      e.preventDefault();
      this.style.display = 'none';
      const ok = document.getElementById('nl-success');
      if (ok) { ok.classList.remove('hidden'); ok.style.position = 'static'; }
    });
  }

  /* ── Course filter ── */
  const filterBtns   = document.querySelectorAll('.filter-btn');
  const courseSearch = document.getElementById('course-search');
  const courseCount  = document.getElementById('course-count');
  const noResults    = document.getElementById('no-results');

  const state = { niveau: 'all', theme: 'all', diff: 'all', search: '' };

  function applyFilters() {
    const cards = document.querySelectorAll('.course-item');
    let visible = 0;
    cards.forEach(card => {
      const ok =
        (state.niveau === 'all' || card.dataset.niveau === state.niveau) &&
        (state.theme  === 'all' || card.dataset.theme  === state.theme)  &&
        (state.diff   === 'all' || card.dataset.diff   === state.diff)   &&
        (state.search === '' || card.querySelector('h3').textContent.toLowerCase().includes(state.search));
      card.style.display = ok ? '' : 'none';
      if (ok) visible++;
    });
    if (courseCount) courseCount.textContent = visible;
    if (noResults)   noResults.classList.toggle('hidden', visible > 0);
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const type = btn.dataset.filter;
      const val  = btn.dataset.val;
      state[type] = val;
      const map = { niveau: 'active-navy', theme: 'active-gold', diff: 'active-purple' };
      document.querySelectorAll(`[data-filter="${type}"]`).forEach(b => {
        b.className = b.className.replace(map[type], '').replace('inactive-pill', '').trim();
        b.classList.add(b === btn ? map[type] : 'inactive-pill');
      });
      applyFilters();
    });
  });

  if (courseSearch) {
    courseSearch.addEventListener('input', function () {
      state.search = this.value.toLowerCase().trim();
      applyFilters();
    });
  }
});
