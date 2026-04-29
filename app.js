/* =========================================================
   WARRIORS LENS — App JS
   ========================================================= */

/* ---------- LOADER (matrix rain) ---------- */
(function loader(){
  const rain = document.getElementById('loaderRain');
  if (rain){
    const cols = Math.floor(window.innerWidth / 14);
    const chars = '01ABCDEFGHJKLMNPQRSTUVWXYZ$@*#%&+=<>/\\|';
    let html = '';
    for (let c = 0; c < cols; c++){
      const dur = (3 + Math.random()*4).toFixed(2);
      const delay = (-Math.random()*4).toFixed(2);
      const opacity = (0.3 + Math.random()*0.7).toFixed(2);
      let stream = '';
      for (let r = 0; r < 30; r++){
        stream += chars[Math.floor(Math.random()*chars.length)];
        stream += '<br>';
      }
      html += `<span style="position:absolute;left:${(c*14)}px;top:0;animation-duration:${dur}s;animation-delay:${delay}s;opacity:${opacity}">${stream}</span>`;
    }
    rain.innerHTML = html;
  }

  function done(){
    const el = document.getElementById('loader');
    if (el) el.classList.add('hide');
    setTimeout(()=>{ if (el) el.style.display='none'; }, 900);
  }
  // Show loader briefly, then hide
  if (document.readyState === 'complete'){
    setTimeout(done, 1400);
  } else {
    window.addEventListener('load', () => setTimeout(done, 1100));
  }
})();

/* ---------- NAV scroll state + active link ---------- */
(function nav(){
  const nav = document.getElementById('nav');
  const links = document.querySelectorAll('.nav-links a');
  const sections = ['hero','work','about','capabilities','coursework','volunteer','experience','contact']
    .map(id => document.getElementById(id))
    .filter(Boolean);

  function onScroll(){
    if (window.scrollY > 30) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');

    const y = window.scrollY + 120;
    let active = sections[0];
    for (const s of sections){
      if (s.offsetTop <= y) active = s;
    }
    links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + active.id));
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

/* ---------- WORK GRID ---------- */
const WORK_ITEMS = [
  { src:'/media/img_07.jpg', title:'NAVCENT/PATFORSWA Conducts VBSS Training with Pakistan Navy', cat:'COMBAT CAMERA · 2024', filter:'combat', span:'feat',
    cap:'Visit, Board, Search, and Seizure (VBSS) training with the Pakistan Navy — close-quarters work in low light.' },
  { src:'/media/img_00.jpg', title:'JEMX-25: Joint Forces Master Combat Medical Care', cat:'JOINT OPS · 2025', filter:'joint',
    cap:'Joint Emergency Medicine Exercise 2025, Fort Cavazos, TX.' },
  { src:'/media/img_02.jpg', title:'Military Medics Train in Realistic Scenarios — JEMX-25', cat:'TRAINING · 2025', filter:'training',
    cap:'Realistic medical scenarios driving joint readiness.' },
  { src:'/media/img_05.jpg', title:'Patrol Forces SW Asia — Water Survival Training', cat:'MARITIME · 2024', filter:'maritime', span:'tall',
    cap:'PATFORSWA personnel during water survival qualification.' },
  { src:'/media/img_06.jpg', title:'FASTCENT Conducts Tactical Live-Fire', cat:'COMBAT CAMERA · 2024', filter:'combat', span:'wide',
    cap:'Fleet Anti-Terrorism Security Team Company, Central — live-fire ops.' },
  { src:'/media/img_08.jpg', title:'USCGC Glen Harris — Pyrotechnics Training', cat:'MARITIME · 2024', filter:'maritime',
    cap:'5th Fleet AOO, training to maintain readiness.' },
  { src:'/media/img_13.jpg', title:'PATFORSWA — Change of Command Ceremony', cat:'CEREMONY · 2024', filter:'ceremony', span:'wide',
    cap:'Coast Guard Patrol Forces Southwest Asia hands over command.' },
  { src:'/media/img_12.jpg', title:'Egypt Assumes Command — CMF CTF-154', cat:'CEREMONY · 2024', filter:'ceremony',
    cap:'Egypt takes command of Combined Task Force 154.' },
  { src:'/media/img_03.jpg', title:'JEMX-25 — Briefings, Didactics & Tactical Lanes', cat:'JOINT OPS · 2025', filter:'joint',
    cap:'Comprehensive joint training spanning briefings to lane execution.' },
  { src:'/media/img_04.jpg', title:'Joint Medical Teams — JEMX-25 Air Lift Operations', cat:'JOINT OPS · 2025', filter:'joint', span:'tall',
    cap:'Processing and air lift operations as JEMX-25 begins.' },
  { src:'/media/img_09.jpg', title:'USCGC Glen Harris — Trilateral Exercise w/ Iraq & Kuwait', cat:'MARITIME · 2024', filter:'maritime',
    cap:'Coalition maritime cooperation, U.S. 5th Fleet AOO.' },
  { src:'/media/img_10.jpg', title:'USCGC Glen Harris — Trilateral Exercise', cat:'MARITIME · 2024', filter:'maritime',
    cap:'Multilateral training builds interoperability.' },
  { src:'/media/img_11.jpg', title:'USCGC Glen Harris — GunX', cat:'TRAINING · 2024', filter:'training',
    cap:'Gunnery exercise aboard USCGC Glen Harris, July 15, 2024.' },
  { src:'/media/img_14.jpg', title:'Compass Rose III — Day Four', cat:'JOINT OPS · 2024', filter:'joint', span:'wide',
    cap:'Compass Rose III multinational training, day four.' },
  { src:'/media/img_15.jpg', title:'Compass Rose III — Day Three', cat:'JOINT OPS · 2024', filter:'joint',
    cap:'Compass Rose III, day three.' },
  { src:'/media/img_16.jpg', title:'Compass Rose III — Day Two', cat:'JOINT OPS · 2024', filter:'joint',
    cap:'Compass Rose III, day two.' },
  { src:'/media/img_17.jpg', title:'Rose Compass III — Day One', cat:'JOINT OPS · 2024', filter:'joint',
    cap:'Compass Rose III, day one.' },
  { src:'/media/img_01.jpg', title:'JEMX-25 Continues — Joint Combat Medical Care', cat:'TRAINING · 2025', filter:'training',
    cap:'Joint forces master combat medical care during JEMX-25.' },
];

(function workGrid(){
  const grid = document.getElementById('workGrid');
  if (!grid) return;
  WORK_ITEMS.forEach((it, i) => {
    const el = document.createElement('div');
    el.className = 'work-item' + (it.span ? ' ' + it.span : '');
    el.dataset.filter = it.filter;
    el.dataset.idx = i;
    el.innerHTML = `
      <img src="${it.src}" alt="${it.title}" loading="lazy" />
      <span class="work-item-num">${String(i+1).padStart(2,'0')}</span>
      <div class="work-item-meta">
        <span class="work-item-cat">${it.cat}</span>
        <h3 class="work-item-title">${it.title}</h3>
      </div>`;
    el.addEventListener('click', () => openLightbox(i));
    grid.appendChild(el);
  });
  document.getElementById('frameCount').textContent = WORK_ITEMS.length;

  // Filters
  document.querySelectorAll('[data-filter]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-filter]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const f = btn.dataset.filter;
      let visible = 0;
      grid.querySelectorAll('.work-item').forEach(item => {
        const show = (f === 'all') || item.dataset.filter === f;
        item.style.display = show ? '' : 'none';
        if (show) visible++;
      });
      document.getElementById('frameCount').textContent = visible;
    });
  });
})();

/* ---------- COURSEWORK GRID ---------- */
(function coursework(){
  const grid = document.getElementById('courseGrid');
  if (!grid) return;
  fetch('/assignments.json').then(r => r.json()).then(items => {
    items.forEach(a => {
      const el = document.createElement('article');
      el.className = 'course-card';
      el.dataset.course = a.course;
      el.innerHTML = `
        ${a.is_deck ? '<span class="cc-deck-flag">Slide Deck</span>' : ''}
        <div class="cc-head">
          <div class="cc-course">
            <strong>${a.course}</strong>
            <span>${a.course_name}</span>
          </div>
          <div class="cc-type">${a.type}</div>
        </div>
        <h3 class="cc-title">${a.title}</h3>
        <p class="cc-summary">${a.summary}</p>
        <div class="cc-tags">
          ${a.tags.map(t => `<span class="cc-tag">${t}</span>`).join('')}
        </div>
        <div class="cc-foot">
          <span class="cc-date">${a.date}</span>
          <a class="cc-download" href="/files/${a.file}" download>Download <span aria-hidden="true">↓</span></a>
        </div>`;
      grid.appendChild(el);
      // Reveal on intersect
      observer.observe(el);
    });
    document.getElementById('courseCount').textContent = items.length;

    // Course filters
    document.querySelectorAll('[data-cfilter]').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('[data-cfilter]').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const f = btn.dataset.cfilter;
        let visible = 0;
        grid.querySelectorAll('.course-card').forEach(card => {
          const show = (f === 'all') || card.dataset.course === f;
          card.style.display = show ? '' : 'none';
          if (show) visible++;
        });
        document.getElementById('courseCount').textContent = visible;
      });
    });
  });
})();

/* ---------- LIGHTBOX ---------- */
let LB_INDEX = 0;
function openLightbox(i){
  LB_INDEX = i;
  const lb = document.getElementById('lightbox');
  const img = document.getElementById('lbImg');
  const cap = document.getElementById('lbCap');
  const it = WORK_ITEMS[i];
  img.src = it.src;
  img.alt = it.title;
  cap.innerHTML = `<strong>${it.title}</strong> — <span style="opacity:.7">${it.cat}</span><br><span style="font-size:13px;opacity:.7">${it.cap || ''}</span>`;
  lb.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeLightbox(){
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
}
function navLightbox(d){
  let i = (LB_INDEX + d + WORK_ITEMS.length) % WORK_ITEMS.length;
  // Skip filtered-out items
  while (document.querySelector(`.work-item[data-idx="${i}"]`).style.display === 'none'){
    i = (i + d + WORK_ITEMS.length) % WORK_ITEMS.length;
    if (i === LB_INDEX) break;
  }
  openLightbox(i);
}
document.getElementById('lbClose').addEventListener('click', closeLightbox);
document.getElementById('lbPrev').addEventListener('click', () => navLightbox(-1));
document.getElementById('lbNext').addEventListener('click', () => navLightbox(1));
document.getElementById('lightbox').addEventListener('click', e => {
  if (e.target.id === 'lightbox') closeLightbox();
});
document.addEventListener('keydown', e => {
  if (!document.getElementById('lightbox').classList.contains('open')) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowLeft') navLightbox(-1);
  if (e.key === 'ArrowRight') navLightbox(1);
});

/* ---------- INTERSECTION REVEAL ---------- */
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting){
      e.target.classList.add('in');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.work-item, .reveal').forEach(el => observer.observe(el));

/* ---------- CONTACT FORM (front-end only) ---------- */
const form = document.getElementById('contactForm');
if (form){
  form.addEventListener('submit', e => {
    e.preventDefault();
    const status = document.getElementById('formStatus');
    if (!form.name.value || !form.email.value){
      status.textContent = '⚠ Name and email required.';
      status.style.color = '#f5c542';
      return;
    }
    // Build mailto fallback
    const subject = encodeURIComponent(`Mission Brief from ${form.name.value}`);
    const body = encodeURIComponent(
      `Name: ${form.name.value}\nEmail: ${form.email.value}\nUnit/Org: ${form.unit.value}\nScope: ${form.scope.value}\n\nMission Brief:\n${form.brief.value}`
    );
    window.location.href = `mailto:julioc.hernandez18@gmail.com?subject=${subject}&body=${body}`;
    status.textContent = '✓ Brief packaged — your email client should open.';
    status.style.color = '#c9a961';
    form.reset();
  });
}

/* ---------- SUBTLE PARALLAX on hero image ---------- */
(function parallax(){
  const img = document.querySelector('.hero-image');
  if (!img || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (y < window.innerHeight){
      img.style.transform = `scale(1.05) translateY(${y * 0.3}px)`;
    }
  }, { passive: true });
})();
