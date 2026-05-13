/**
 * MATEMATIKUP — Header Component
 * Usage: <script src="components/header.js" data-page="index"></script>
 *
 * Chaque page passe son identifiant via data-page pour activer le lien courant.
 * Pages valides : index | programmes | examens | apropos
 */
(function () {
  /* ─── Config navigation ─── */
  const NAV = [
    { id: 'index',      label: 'Accueil',             href: 'index.html' },
    { id: 'programmes', label: 'Nos programmes',       href: 'programmes.html' },
    { id: 'examens',    label: 'Examen & concours',    href: 'examens.html' },
    { id: 'apropos',    label: 'A propos',             href: 'apropos.html' },
  ];

  /* ─── Detect current page ─── */
  const scriptEl  = document.currentScript;
  const activePage = scriptEl ? scriptEl.getAttribute('data-page') || 'index' : 'index';

  /* ─── SVG icons ─── */
  const SVG = {
    book: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg>`,
    login: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4M10 17l5-5-5-5M15 12H3"/></svg>`,
    register: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/><line x1="19" y1="8" x2="19" y2="14"/><line x1="22" y1="11" x2="16" y2="11"/></svg>`,
    chevron: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 9l6 6 6-6"/></svg>`,
    home: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>`,
    book2: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>`,
    exam:  `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>`,
    info:  `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`,
    user:  `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>`,
  };

  const MOB_ICONS = {
    'index':      SVG.home,
    'programmes': SVG.book2,
    'examens':    SVG.exam,
    'apropos':    SVG.info,
  };

  /* ─── Desktop nav links HTML ─── */
  const desktopLinks = NAV.map(n =>
    `<li>
      <a href="${n.href}"
         style="color:${n.id === activePage ? '#ffa300' : 'rgba(255,255,255,.7)'}; font-size:.875rem; font-weight:700; text-decoration:none; transition:color .2s;"
         onmouseover="this.style.color='#ffa300'"
         onmouseout="this.style.color='${n.id === activePage ? '#ffa300' : 'rgba(255,255,255,.7)'}'">
        ${n.label}
      </a>
    </li>`
  ).join('');

  /* ─── Mobile nav links HTML (design from screenshot) ─── */
  const mobileLinks = NAV.map(n =>
    `<a href="${n.href}" class="mob-nav-item${n.id === activePage ? ' active' : ''}">
      ${n.label}
    </a>`
  ).join('');

  /* ─── Full header HTML ─── */
  const html = `
<header id="mk-header">
  <!-- ═══ DESKTOP / NAV BAR ═══ -->
  <div style="max-width:1280px; margin:0 auto; padding:14px 24px; display:flex; align-items:center; justify-content:space-between; gap:20px;">

    <!-- Logo -->
    <a href="index.html" style="display:flex; align-items:center; gap:10px; text-decoration:none; flex-shrink:0;">
      <span style="width:40px; height:40px; background:#ffa300; border-radius:11px; display:flex; align-items:center; justify-content:center; box-shadow:0 4px 14px rgba(255,163,0,.35); color:#0d2b56;">
        ${SVG.book}
      </span>
      <span style="font-family:'Nunito',sans-serif; font-weight:900; font-size:1.15rem; color:#fff; letter-spacing:-.01em;">
        MATEMATIK<span style="color:#ffa300;">UP</span>
      </span>
    </a>

    <!-- Desktop nav -->
    <ul class="mk-desktop-nav" style="display:none; align-items:center; gap:32px; list-style:none; margin:0; padding:0;">
      ${desktopLinks}
    </ul>

    <!-- Actions desktop + burger mobile -->
    <div style="display:flex; align-items:center; gap:12px;">

      <!-- Compte dropdown (desktop) -->
      <div class="has-dropdown mk-desktop-nav" style="display:none;">
        <button style="display:flex; align-items:center; gap:6px; border:1.5px solid rgba(255,255,255,.25); border-radius:11px; padding:9px 16px; font-family:'Nunito',sans-serif; font-weight:700; font-size:.875rem; color:#fff; background:transparent; cursor:pointer; transition:border-color .2s;"
                onmouseover="this.style.borderColor='rgba(255,255,255,.55)'"
                onmouseout="this.style.borderColor='rgba(255,255,255,.25)'">
          Compte ${SVG.chevron}
        </button>
        <div class="dropdown-panel">
          <a href="auth.html#login">${SVG.login} Se connecter</a>
          <div class="dp-div"></div>
          <a href="auth.html#register">${SVG.register} S'inscrire</a>
        </div>
      </div>

      <!-- CTA desktop -->
      <a href="auth.html#register" class="mk-desktop-nav" style="display:none; background:#ffa300; color:#0d2b56; font-family:'Nunito',sans-serif; font-weight:900; font-size:.875rem; padding:10px 22px; border-radius:11px; text-decoration:none; transition:background .2s, transform .15s; white-space:nowrap;"
         onmouseover="this.style.background='#cc8200'; this.style.transform='translateY(-1px)'"
         onmouseout="this.style.background='#ffa300'; this.style.transform='translateY(0)'">
        Commencer
      </a>

      <!-- Burger mobile -->
      <button id="mk-burger" aria-label="Menu" aria-expanded="false"
              style="display:flex; flex-direction:column; justify-content:center; gap:5px; width:40px; height:40px; background:rgba(255,255,255,.08); border:none; border-radius:10px; cursor:pointer; padding:10px; align-items:center;">
        <span class="bl1" style="display:block; height:2px; width:20px; background:#fff; border-radius:99px; transform-origin:center;"></span>
        <span class="bl2" style="display:block; height:2px; width:20px; background:#fff; border-radius:99px; transform-origin:center;"></span>
        <span class="bl3" style="display:block; height:2px; width:14px; background:#fff; border-radius:99px; transform-origin:center; align-self:flex-end;"></span>
      </button>
    </div>
  </div>

  <!-- ═══ MOBILE MENU PANEL ═══ -->
  <div id="mk-mob-menu">

    <!-- Nav links — exact design from screenshot -->
    ${mobileLinks}

    <!-- Compte accordion -->
    <button class="mob-nav-item" onclick="window._mkToggleCompte()" style="justify-content:space-between;">
      <span>Compte</span>
      <span id="mk-compte-arrow" style="display:inline-block; transition:transform .25s; color:rgba(255,255,255,.4);">${SVG.chevron}</span>
    </button>
    <div id="mk-compte-sub">
      <a href="auth.html#login"  class="mob-sub-link">${SVG.login}  Se connecter</a>
      <a href="auth.html#register" class="mob-sub-link">${SVG.register} S'inscrire</a>
    </div>

    <!-- CTA buttons — matches screenshot -->
    <div class="mob-cta-zone">
      <a href="auth.html#login"    class="mob-cta-primary">Se connecter</a>
      <a href="auth.html#register" class="mob-cta-secondary">S'inscrire</a>
    </div>
  </div>
</header>
`;

  /* ─── Inject into page ─── */
  document.write(html);

  /* ─── Init logic after DOM ready ─── */
  document.addEventListener('DOMContentLoaded', function () {

    const burger  = document.getElementById('mk-burger');
    const mobMenu = document.getElementById('mk-mob-menu');

    /* Responsive: show/hide desktop elements */
    function applyResponsive() {
      const isDesktop = window.innerWidth >= 768;
      document.querySelectorAll('.mk-desktop-nav').forEach(el => {
        el.style.display = isDesktop ? (el.tagName === 'UL' ? 'flex' : 'flex') : 'none';
      });
      if (burger) burger.style.display = isDesktop ? 'none' : 'flex';
    }
    applyResponsive();
    window.addEventListener('resize', applyResponsive);

    /* Burger toggle */
    if (burger) {
      burger.addEventListener('click', function (e) {
        e.stopPropagation();
        const isOpen = mobMenu.classList.toggle('open');
        burger.classList.toggle('open', isOpen);
        burger.setAttribute('aria-expanded', isOpen);
        burger.setAttribute('aria-label', isOpen ? 'Fermer le menu' : 'Ouvrir le menu');
      });
    }

    /* Close on outside click */
    document.addEventListener('click', function (e) {
      if (burger && mobMenu && !burger.contains(e.target) && !mobMenu.contains(e.target)) {
        mobMenu.classList.remove('open');
        burger.classList.remove('open');
      }
    });

    /* Scroll shadow */
    const header = document.getElementById('mk-header');
    window.addEventListener('scroll', function () {
      header.classList.toggle('scrolled', window.scrollY > 8);
    }, { passive: true });

    /* Compte accordion */
    window._mkToggleCompte = function () {
      const sub   = document.getElementById('mk-compte-sub');
      const arrow = document.getElementById('mk-compte-arrow');
      const isOpen = sub.classList.toggle('open');
      arrow.style.transform = isOpen ? 'rotate(180deg)' : 'rotate(0deg)';
    };

    /* Close mobile links on click */
    document.querySelectorAll('#mk-mob-menu .mob-nav-item[href], #mk-mob-menu .mob-sub-link').forEach(a => {
      a.addEventListener('click', () => {
        if (mobMenu) mobMenu.classList.remove('open');
        if (burger)  burger.classList.remove('open');
      });
    });

    /* Add padding-top to body = header height */
    function syncBodyPadding() {
      const h = document.getElementById('mk-header');
      if (h) document.body.style.paddingTop = h.offsetHeight + 'px';
    }
    syncBodyPadding();
    window.addEventListener('resize', syncBodyPadding);
    // Also sync after mobile menu opens/closes (height changes)
    if (mobMenu) {
      new MutationObserver(syncBodyPadding).observe(mobMenu, { attributes: true, attributeFilter: ['class'] });
    }
  });
})();
