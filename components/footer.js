/**
 * MATEMATIKUP — Footer Component
 * Usage: <script src="components/footer.js"></script>
 * Placé juste avant </body> sur chaque page.
 */
(function () {

  const html = `
<footer id="mk-footer">

  <!-- ── Main grid ── -->
  <div style="max-width:1280px; margin:0 auto; padding:64px 24px 40px;">
    <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(200px,1fr)); gap:40px;">

      <!-- Col 1 — Brand -->
      <div style="grid-column: span 1;">
        <a href="index.html" style="display:inline-flex; align-items:center; gap:10px; text-decoration:none; margin-bottom:18px;">
          <span style="width:42px; height:42px; background:#ffa300; border-radius:12px; display:flex; align-items:center; justify-content:center; box-shadow:0 4px 14px rgba(255,163,0,.3);">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0d2b56" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/>
            </svg>
          </span>
          <span style="font-family:'Nunito',sans-serif; font-weight:900; font-size:1.1rem; color:#fff;">
            MATEMATI<span style="color:#ffa300;">KUP</span>
          </span>
        </a>

        <p style="color:rgba(255,255,255,.45); font-size:.875rem; line-height:1.7; max-width:240px; margin-bottom:20px;">
          La plateforme e-learning qui réinvente l'apprentissage des mathématiques pour les collégiens et lycéens malgaches.
        </p>

        <!-- Contact -->
        <ul style="list-style:none; display:flex; flex-direction:column; gap:10px; margin-bottom:24px;">
          <li style="display:flex; align-items:center; gap:10px;">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#ffa300" stroke-width="2" stroke-linecap="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 7l10 7 10-7"/></svg>
            <a href="mailto:contact@matematikup.mg" style="color:rgba(255,255,255,.5); font-size:.85rem; text-decoration:none; transition:color .2s;"
               onmouseover="this.style.color='#fff'" onmouseout="this.style.color='rgba(255,255,255,.5)'">
              contact@matematikup.mg
            </a>
          </li>
          <li style="display:flex; align-items:center; gap:10px;">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#ffa300" stroke-width="2" stroke-linecap="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z"/></svg>
            <a href="tel:+261340000000" style="color:rgba(255,255,255,.5); font-size:.85rem; text-decoration:none; transition:color .2s;"
               onmouseover="this.style.color='#fff'" onmouseout="this.style.color='rgba(255,255,255,.5)'">
              +261 32 88 189 52
            </a>
          </li>
          <li style="display:flex; align-items:center; gap:10px;">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#ffa300" stroke-width="2" stroke-linecap="round"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
            <span style="color:rgba(255,255,255,.5); font-size:.85rem;">Antananarivo, Madagascar 🇲🇬</span>
          </li>
        </ul>

        <!-- Socials -->
        <div style="display:flex; gap:10px;">
          ${['Facebook','Twitter','Instagram','YouTube'].map((name, i) => {
            const icons = [
              '<path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>',
              '<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>',
              '<rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>',
              '<path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.97C18.88 4 12 4 12 4s-6.88 0-8.59.45A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.97C5.12 20 12 20 12 20s6.88 0 8.59-.45a2.78 2.78 0 001.95-1.97A29 29 0 0023 12a29 29 0 00-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#0d2b56"/>',
            ];
            const isFill = i === 0 || i === 1 || i === 3;
            return `<a href="https://www.facebook.com/profile.php?id=61564939104580" aria-label="${name}"
              style="width:38px; height:38px; border-radius:10px; border:1px solid rgba(255,255,255,.15); background:rgba(255,255,255,.05); display:flex; align-items:center; justify-content:center; color:rgba(255,255,255,.5); transition:border-color .2s, color .2s;"
              onmouseover="this.style.borderColor='#ffa300'; this.style.color='#ffa300';"
              onmouseout="this.style.borderColor='rgba(255,255,255,.15)'; this.style.color='rgba(255,255,255,.5)';">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="${isFill ? 'currentColor' : 'none'}" stroke="${isFill ? 'none' : 'currentColor'}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${icons[i]}</svg>
            </a>`;
          }).join('')}
        </div>
      </div>

      <!-- Col 2 — Plateforme -->
      <div>
        <h4 style="font-family:'Nunito',sans-serif; font-weight:900; color:#fff; font-size:.9rem; margin-bottom:14px; padding-bottom:10px; border-bottom:1px solid rgba(255,255,255,.1);">Plateforme</h4>
        <ul style="list-style:none; display:flex; flex-direction:column; gap:10px;">
          ${[['Accueil','index.html'],['Nos programmes','programmes.html'],['Concours & Examens','examens.html'],['Version Premium','auth.html#register'],['À propos','apropos.html']].map(([l,h]) =>
            `<li><a href="${h}" style="color:rgba(255,255,255,.5); font-size:.875rem; text-decoration:none; transition:color .2s;"
               onmouseover="this.style.color='#fff'" onmouseout="this.style.color='rgba(255,255,255,.5)'">${l}</a></li>`
          ).join('')}
        </ul>
      </div>

      <!-- Col 3 — Niveaux -->
      <div>
        <h4 style="font-family:'Nunito',sans-serif; font-weight:900; color:#fff; font-size:.9rem; margin-bottom:14px; padding-bottom:10px; border-bottom:1px solid rgba(255,255,255,.1);">Niveaux</h4>
        <ul style="list-style:none; display:flex; flex-direction:column; gap:10px;">
          ${[['6ème – 5ème','programmes.html'],['4ème – 3ème','programmes.html'],['2nde – 1ère','programmes.html'],['Terminale A/C/D','programmes.html'],['Terminale L/OSE/S','programmes.html']].map(([l,h]) =>
            `<li><a href="${h}" style="color:rgba(255,255,255,.5); font-size:.875rem; text-decoration:none; transition:color .2s;"
               onmouseover="this.style.color='#fff'" onmouseout="this.style.color='rgba(255,255,255,.5)'">${l}</a></li>`
          ).join('')}
        </ul>
      </div>

      <!-- Col 4 — Support -->
      <div>
        <h4 style="font-family:'Nunito',sans-serif; font-weight:900; color:#fff; font-size:.9rem; margin-bottom:14px; padding-bottom:10px; border-bottom:1px solid rgba(255,255,255,.1);">Support</h4>
        <ul style="list-style:none; display:flex; flex-direction:column; gap:10px;">
          ${[['FAQ','#'],['Nous contacter','#'],['Blog','#'],['Tutoriels','#'],['Espace professeurs','#']].map(([l,h]) =>
            `<li><a href="${h}" style="color:rgba(255,255,255,.5); font-size:.875rem; text-decoration:none; transition:color .2s;"
               onmouseover="this.style.color='#fff'" onmouseout="this.style.color='rgba(255,255,255,.5)'">${l}</a></li>`
          ).join('')}
        </ul>
      </div>

    </div>

    <!-- Newsletter -->
    <div style="margin-top:48px; border-radius:18px; border:1px solid rgba(255,255,255,.1); background:rgba(255,255,255,.05); padding:28px 32px; display:flex; flex-wrap:wrap; align-items:center; justify-content:space-between; gap:20px;">
      <div>
        <p style="font-family:'Nunito',sans-serif; font-weight:900; color:#fff; font-size:1rem; margin-bottom:4px;">
          📩 Restez informé(e) des nouveaux cours
        </p>
        <p style="color:rgba(255,255,255,.45); font-size:.85rem;">
          Recevez nos actualités, astuces et contenus chaque semaine.
        </p>
      </div>
      <form id="mk-nl-form" onsubmit="window._mkNewsletter(event)"
            style="display:flex; border-radius:12px; overflow:hidden; border:1px solid rgba(255,255,255,.15); background:rgba(13,43,86,.6); flex-shrink:0; min-width:280px;">
        <input id="mk-nl-email" type="email" placeholder="votre@email.mg" required
               style="flex:1; padding:12px 16px; background:transparent; border:none; color:#fff; font-size:.875rem; outline:none; min-width:0;"
               onfocus="this.parentElement.style.borderColor='#ffa300'"
               onblur="this.parentElement.style.borderColor='rgba(255,255,255,.15)'" />
        <button type="submit"
                style="background:#ffa300; color:#0d2b56; font-family:'Nunito',sans-serif; font-weight:900; font-size:.875rem; padding:12px 22px; border:none; cursor:pointer; transition:background .2s; white-space:nowrap;"
                onmouseover="this.style.background='#cc8200'" onmouseout="this.style.background='#ffa300'">
          S'abonner →
        </button>
      </form>
      <p id="mk-nl-ok" style="display:none; color:#22c55e; font-weight:700; font-size:.875rem;">✓ Inscrit(e) avec succès !</p>
    </div>
  </div>

  <!-- Bottom bar -->
  <div style="border-top:1px solid rgba(255,255,255,.07); margin-top:8px;">
    <div style="max-width:1280px; margin:0 auto; padding:18px 24px; display:flex; flex-wrap:wrap; align-items:center; justify-content:space-between; gap:12px;">
      <p style="color:rgba(255,255,255,.3); font-size:.78rem;">
        © 2026 MATEMATIKUP. Tous droits réservés.
      </p>
      <nav style="display:flex; flex-wrap:wrap; gap:16px;">
        ${['Mentions légales','CGU','Confidentialité','Cookies'].map(l =>
          `<a href="#" style="color:rgba(255,255,255,.3); font-size:.78rem; text-decoration:none; transition:color .2s;"
             onmouseover="this.style.color='#fff'" onmouseout="this.style.color='rgba(255,255,255,.3)'">${l}</a>`
        ).join('')}
      </nav>
    </div>
  </div>

</footer>
`;

  document.write(html);

  /* Newsletter handler */
  document.addEventListener('DOMContentLoaded', function () {
    window._mkNewsletter = function (e) {
      e.preventDefault();
      document.getElementById('mk-nl-form').style.display = 'none';
      document.getElementById('mk-nl-ok').style.display   = 'block';
    };
  });
})();
