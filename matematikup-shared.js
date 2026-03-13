/* ═══════════════════════════════════════════════════════
   matematikup-shared.js
   Navbar behaviour, mobile menu, auth modal — shared across all pages
   ═══════════════════════════════════════════════════════ */

/**
 * loadNavbar(activePage)
 * Injects navbar.html into #navbar-placeholder then wires up all interactions.
 * activePage: 'accueil' | 'programmes' | 'examens' | 'apropos'
 */
function loadNavbar(activePage) {
  fetch('navbar.html')
    .then(r => r.text())
    .then(html => {
      const el = document.getElementById('navbar-placeholder');
      if (!el) return;
      el.innerHTML = html;

      // Highlight active link
      el.querySelectorAll('[data-page]').forEach(link => {
        if (link.dataset.page === activePage) {
          link.classList.add('text-[#ffa300]', 'border-b-2', 'border-[#ffa300]', 'pb-1');
          link.classList.remove('hover:text-[#ffa300]');
        }
      });

      initNavbar();
    })
    .catch(() => {
      // Fallback: navbar already in DOM (static pages)
      initNavbar();
    });
}

function initNavbar() {
  // Dropdown compte
  const accountBtn   = document.getElementById('accountBtn');
  const dropdownMenu = document.getElementById('dropdownMenu');
  if (accountBtn && dropdownMenu) {
    accountBtn.addEventListener('click', e => {
      e.stopPropagation();
      dropdownMenu.classList.toggle('hidden');
    });
    window.addEventListener('click', e => {
      if (!dropdownMenu.contains(e.target) && !accountBtn.contains(e.target)) {
        dropdownMenu.classList.add('hidden');
      }
    });
  }

  // Mobile menu
  const hamburgerBtn     = document.getElementById('hamburgerBtn');
  const mobileMenu       = document.getElementById('mobileMenu');
  const closeMobileMenuBtn = document.getElementById('closeMobileMenu');

  if (hamburgerBtn && mobileMenu) {
    hamburgerBtn.addEventListener('click', () => {
      mobileMenu.classList.remove('hidden');
      mobileMenu.classList.add('flex');
    });
  }
  if (closeMobileMenuBtn) {
    closeMobileMenuBtn.addEventListener('click', closeMobileMenuFunc);
  }
}

function closeMobileMenuFunc() {
  const mobileMenu = document.getElementById('mobileMenu');
  if (mobileMenu) {
    mobileMenu.classList.add('hidden');
    mobileMenu.classList.remove('flex');
  }
}

// ── Auth Modal ─────────────────────────────────────────
function openModal(type) {
  const dropdownMenu = document.getElementById('dropdownMenu');
  const authModal    = document.getElementById('authModal');
  const loginForm    = document.getElementById('loginForm');
  const registerForm = document.getElementById('registerForm');
  if (dropdownMenu) dropdownMenu.classList.add('hidden');
  if (authModal)    authModal.classList.remove('hidden');
  if (type === 'login') {
    loginForm?.classList.remove('hidden');
    registerForm?.classList.add('hidden');
  } else {
    loginForm?.classList.add('hidden');
    registerForm?.classList.remove('hidden');
  }
}

function closeModal() {
  document.getElementById('authModal')?.classList.add('hidden');
}

function switchForm(type) {
  const loginForm    = document.getElementById('loginForm');
  const registerForm = document.getElementById('registerForm');
  if (type === 'login') {
    loginForm?.classList.remove('hidden');
    registerForm?.classList.add('hidden');
  } else {
    loginForm?.classList.add('hidden');
    registerForm?.classList.remove('hidden');
  }
}

// Close modal on backdrop click
document.addEventListener('DOMContentLoaded', () => {
  const authModal = document.getElementById('authModal');
  authModal?.addEventListener('click', e => { if (e.target === authModal) closeModal(); });
});

// ── Scroll reveal ──────────────────────────────────────
function revealOnScroll() {
  document.querySelectorAll('.reveal').forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add('active');
    }
  });
}
window.addEventListener('scroll', revealOnScroll);
document.addEventListener('DOMContentLoaded', revealOnScroll);