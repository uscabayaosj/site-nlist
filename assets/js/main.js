// NLIST, product site
(function () {
  'use strict';

  function prefersReducedMotion() {
    return window.matchMedia &&
           window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  var H = 72;
  document.querySelectorAll('a[href^="#"]').forEach(function (l) {
    l.addEventListener('click', function (e) {
      var t = document.querySelector(this.getAttribute('href'));
      if (!t) return;
      e.preventDefault();
      window.scrollTo({ top: t.getBoundingClientRect().top + window.pageYOffset - H, behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
    });
  });
})();
