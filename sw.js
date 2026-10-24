document.addEventListener('DOMContentLoaded', function () {

  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
      navigator.serviceWorker.register('./sw.js').catch(function () {});
    });
  }

  var nav = document.querySelector('.nav');
  function onScroll() {
    if (!nav) return;
    if (window.scrollY > 24) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  }
  window.addEventListener('scroll', onScroll);
  onScroll();

  var burger = document.getElementById('burgerBtn');
  var mobileNav = document.getElementById('mobileNav');
  if (burger && mobileNav) {
    burger.addEventListener('click', function () {
      mobileNav.classList.toggle('open');
      var openIcon = burger.querySelector('.i-menu');
      var closeIcon = burger.querySelector('.i-close');
      if (openIcon && closeIcon) {
        openIcon.style.display = mobileNav.classList.contains('open') ? 'none' : 'block';
        closeIcon.style.display = mobileNav.classList.contains('open') ? 'block' : 'none';
      }
    });
    mobileNav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { mobileNav.classList.remove('open'); });
    });
  }

  var sections = document.querySelectorAll('main section[id]');
  var navAnchors = document.querySelectorAll('.nav-links a, #mobileNav a');
  if (sections.length && navAnchors.length) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          navAnchors.forEach(function (a) {
            a.classList.toggle('active', a.getAttribute('href') === '#' + entry.target.id);
          });
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach(function (s) { observer.observe(s); });
  }

  var revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length) {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach(function (el) { revealObserver.observe(el); });
  }

  var orbs = document.querySelectorAll('.bg-orb');
  window.addEventListener('mousemove', function (e) {
    var x = (e.clientX / window.innerWidth - 0.5) * 18;
    var y = (e.clientY / window.innerHeight - 0.5) * 18;
    orbs.forEach(function (o, i) {
      var depth = (i + 1) * 0.4;
      o.style.transform = 'translate(' + x * depth + 'px,' + y * depth + 'px)';
    });
  });

  var form = document.getElementById('contactForm');
  if (form) {
    var submitBtn = form.querySelector('button[type="submit"]');
    var errorBox = document.getElementById('formError');
    var defaultBtnLabel = submitBtn ? submitBtn.textContent : '';

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (errorBox) { errorBox.classList.remove('show'); errorBox.textContent = ''; }

      var lang = (typeof SAKA_LANG !== 'undefined') ? SAKA_LANG : 'id';
      var payload = new FormData();
      payload.append('name', document.getElementById('fname').value.trim());
      payload.append('email', document.getElementById('femail').value.trim());
      payload.append('company', document.getElementById('fcompany').value.trim());
      payload.append('message', document.getElementById('fmsg').value.trim());
      payload.append('lang', lang);

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = (SAKA_I18N && SAKA_I18N[lang] && SAKA_I18N[lang].form_sending) ? SAKA_I18N[lang].form_sending : 'Sending...';
      }

      fetch('mail/send-mail.php', { method: 'POST', body: payload })
        .then(function (res) { return res.json().then(function (data) { return { ok: res.ok, data: data }; }); })
        .then(function (result) {
          if (result.ok && result.data && result.data.success) {
            form.style.display = 'none';
            var success = document.getElementById('formSuccess');
            if (success) success.classList.add('show');
          } else {
            var msg = (result.data && result.data.message) ? result.data.message
              : (lang === 'en' ? 'Something went wrong. Please try again.' : 'Terjadi kesalahan. Silakan coba lagi.');
            if (errorBox) { errorBox.textContent = msg; errorBox.classList.add('show'); }
          }
        })
        .catch(function () {
          var msg = (lang === 'en')
            ? 'Could not reach the server. Please check your connection and try again.'
            : 'Tidak bisa menghubungi server. Cek koneksi kamu dan coba lagi.';
          if (errorBox) { errorBox.textContent = msg; errorBox.classList.add('show'); }
        })
        .finally(function () {
          if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = defaultBtnLabel; }
        });
    });
  }

  var visitorCountEl = document.getElementById('visitorCount');
  if (visitorCountEl) {
    fetch('analytics.php?track=1', { cache: 'no-store' })
      .then(function (res) { return res.ok ? res.json() : null; })
      .then(function (data) {
        if (data && typeof data.count !== 'undefined') {
          visitorCountEl.textContent = Number(data.count).toLocaleString('en-US');
        }
      })
      .catch(function () {
        visitorCountEl.textContent = '0';
      });
  }

  var statEls = document.querySelectorAll('.hero-stats [data-count]');
  var statsAnimated = false;
  function animateStats() {
    if (statsAnimated || !statEls.length) return;
    var rect = statEls[0].closest('.hero-stats').getBoundingClientRect();
    if (rect.top < window.innerHeight - 60) {
      statsAnimated = true;
      statEls.forEach(function (el) {
        var target = el.getAttribute('data-count');
        var numeric = parseInt(target, 10);
        var suffix = target.replace(/[0-9]/g, '');
        if (isNaN(numeric)) { return; }
        var current = 0;
        var step = Math.max(1, Math.round(numeric / 36));
        var timer = setInterval(function () {
          current += step;
          if (current >= numeric) { current = numeric; clearInterval(timer); }
          el.textContent = current + suffix;
        }, 22);
      });
    }
  }
  window.addEventListener('scroll', animateStats);
  animateStats();

  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
