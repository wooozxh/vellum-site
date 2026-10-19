(function () {
  const header = document.getElementById('siteHead');
  const menuBtn = document.getElementById('menuBtn');

  function onScroll() {
    if (header) header.classList.toggle('solid', window.scrollY > 24);
  }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  if (menuBtn && header) {
    menuBtn.addEventListener('click', function () {
      const open = header.classList.toggle('nav-open');
      menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    header.querySelectorAll('nav a').forEach(function (a) {
      a.addEventListener('click', function () {
        header.classList.remove('nav-open');
        menuBtn.setAttribute('aria-expanded', 'false');
      });
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        header.classList.remove('nav-open');
        menuBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  const io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });

  const tabs = Array.prototype.slice.call(document.querySelectorAll('.tab[data-filter]'));
  const rows = Array.prototype.slice.call(document.querySelectorAll('[data-product]'));
  if (tabs.length && rows.length) {
    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        tabs.forEach(function (t) { t.classList.remove('on'); });
        tab.classList.add('on');
        const filter = tab.getAttribute('data-filter');
        rows.forEach(function (row) {
          row.style.display = (filter === 'all' || row.getAttribute('data-product') === filter) ? '' : 'none';
        });
      });
    });
  }
})();
