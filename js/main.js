/* ============================================================
   SUS-SOIL Website Replica — Main Script
   ============================================================ */

(function () {
  'use strict';

  /* ---------- Footer year ---------- */
  var yearEl = document.getElementById('footer-year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  /* ---------- Mobile menu ---------- */
  var navToggle = document.querySelector('[data-nav-toggle]');
  var mobileMenu = document.querySelector('[data-mobile-menu]');
  var mobileSubToggles = document.querySelectorAll('[data-mobile-sub-toggle]');

  function closeMobileMenu() {
    if (!mobileMenu) return;
    mobileMenu.classList.remove('open');
    if (navToggle) navToggle.setAttribute('aria-expanded', 'false');
  }

  if (navToggle && mobileMenu) {
    navToggle.addEventListener('click', function () {
      var open = mobileMenu.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  mobileSubToggles.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var target = document.getElementById(btn.getAttribute('aria-controls'));
      if (target) {
        var open = target.classList.toggle('open');
        btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      }
    });
  });

  /* ---------- Desktop dropdowns ---------- */
  var dropItems = document.querySelectorAll('.nav-item--dropdown');

  function closeAllDropdowns(except) {
    dropItems.forEach(function (item) {
      if (item !== except) item.classList.remove('open');
    });
  }

  dropItems.forEach(function (item) {
    var btn = item.querySelector('.nav-link');
    var menu = item.querySelector('.dropdown');

    if (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        var open = item.classList.toggle('open');
        btn.setAttribute('aria-expanded', open ? 'true' : 'false');
        closeAllDropdowns(item);
      });
    }

    if (menu) {
      menu.addEventListener('click', function (e) { e.stopPropagation(); });
    }
  });

  document.addEventListener('click', function () { closeAllDropdowns(null); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      closeAllDropdowns(null);
      closeMobileMenu();
    }
  });

  /* ---------- Back to top ---------- */
  var backToTop = document.querySelector('[data-back-to-top]');

  function onScroll() {
    if (!backToTop) return;
    if (window.scrollY > 480) {
      backToTop.classList.add('show');
    } else {
      backToTop.classList.remove('show');
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  if (backToTop) {
    backToTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ---------- Animated count-up stats ---------- */
  var statValues = document.querySelectorAll('.stat-value[data-count]');
  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (statValues.length) {
    var animateCount = function (el) {
      var target = parseFloat(el.getAttribute('data-count'));
      var duration = 1400;
      var start = null;
      var easeOut = function (p) { return 1 - Math.pow(1 - p, 3); };
      var step = function (ts) {
        if (!start) start = ts;
        var p = Math.min((ts - start) / duration, 1);
        el.textContent = Math.round(easeOut(p) * target);
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };
    if (reduceMotion || !('IntersectionObserver' in window)) {
      statValues.forEach(function (el) { el.textContent = el.getAttribute('data-count'); });
    } else {
      var statsObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            animateCount(entry.target);
            statsObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.4 });
      statValues.forEach(function (el) { statsObserver.observe(el); });
    }
  }

  /* ---------- Country chips + interactive map ---------- */
  var chips = document.querySelectorAll('.region-chip');
  var countryMap = document.querySelector('[data-save-water-map]');
  var mapStatus = document.querySelector('[data-map-status]');
  var mapReset = document.querySelector('[data-map-reset]');
  var partnerPanel = document.querySelector('[data-partner-panel]');
  var isPartnerMap = !!(countryMap && countryMap.hasAttribute('data-partner-map'));
  var countries = countryMap ? countryMap.querySelectorAll('.country') : [];

  var partnerData = [
    { code: 'TN', name: 'Tunisia', logo: 'assets/partner-fst.gif', inst: 'Faculty of Sciences of Tunis, University of Tunis El Manar (FST-UTM)', pi: 'Salwa SAIDI', role: 'Coordinator' },
    { code: 'TN', name: 'Tunisia', logo: 'assets/partner-mse.webp', inst: 'Manouba School of Engineering (MSE-UMA)', pi: 'Imed Riadh FARAH' },
    { code: 'MA', name: 'Morocco', logo: 'assets/partner-fstt.png', inst: 'Faculty of Sciences and Techniques, Tangier, University of Abdelmalek Essaadi (FSTT)', pi: 'Abdes Samed BERNOUSSI' },
    { code: 'MA', name: 'Morocco', logo: 'assets/partner-iav.png', inst: 'Institute of Agronomy and Veterinary Medicine Hassan II (IAV)', pi: 'Imane SEBARI' },
    { code: 'DZ', name: 'Algeria', logo: 'assets/partner-ubma.png', inst: 'University of Badji Mokhtar Annaba (UBMA)', pi: 'Larbi JABRI' },
    { code: 'DE', name: 'Germany', logo: 'assets/partner-tu-berlin.svg', inst: 'Technical University of Berlin (TU Berlin)', pi: 'Basem ALJOUMANI' },
    { code: 'IT', name: 'Italy', logo: 'assets/partner-isasi-cnr.png', inst: 'Institute of Applied Sciences and Intelligent Systems — CNR (ISASI-CNR)', pi: 'Pier Luigi Mazzeo' },
    { code: 'IT', name: 'Italy', logo: 'assets/partner-agrianto.jpeg', inst: 'Azienda Agricola Agrianto di Maria Consilia Antonelli (Agrianto)', pi: 'Maria Consilia Antonelli' },
    { code: 'EG', name: 'Egypt', logo: 'assets/partner-foafu.jpg', inst: 'Faculty of Agriculture, Fayoum University (FOAFU)', pi: 'Ali Gaber Mohamed Mahmoud' },
    { code: 'FR', name: 'France', logo: 'assets/partner-cirad.png', inst: 'CIRAD — Research Center of International Cooperation in Agronomic Research for Development', pi: 'Simon Taugourdeau' },
    { code: 'FR', name: 'France', logo: 'assets/partner-uge.svg', inst: 'Gustave Eiffel University (UGE)', pi: 'Pierre-Louis FRISON' },
    { code: 'PT', name: 'Portugal', logo: 'assets/FCI.webp', inst: 'FCiências.ID — Association for Science Research and Development (FC.ID)', pi: 'Cristina Cruz' },
    { code: 'ES', name: 'Spain', logo: 'assets/partner-usc.svg', inst: 'Engineering Department of University of Santiago de Compostela (USC)', pi: 'María Rosa Mosquera Losada' }
  ];

  function chipFor(code) {
    var found = null;
    chips.forEach(function (c) { if (c.dataset.country === code) found = c; });
    return found;
  }

  function countryElFor(code) {
    var found = null;
    countries.forEach(function (p) { if (p.getAttribute('data-country') === code) found = p; });
    return found;
  }

  function dotColor(chip) {
    var dot = chip ? chip.querySelector('.dot') : null;
    return dot ? (dot.style.backgroundColor || dot.style.background || '#ee9c39') : '#ee9c39';
  }

  function clearActive() {
    chips.forEach(function (c) {
      c.classList.remove('is-active');
      c.setAttribute('aria-pressed', 'false');
    });
    countries.forEach(function (p) {
      p.classList.remove('is-active', 'is-dimmed');
      p.style.removeProperty('fill');
    });
  }

  function setActive(code) {
    var chip = chipFor(code);
    var el = countryElFor(code);
    if (chip) {
      chip.classList.add('is-active');
      chip.setAttribute('aria-pressed', 'true');
    }
    if (el) {
      el.classList.add('is-active');
      el.style.fill = dotColor(chip);
    }
    countries.forEach(function (p) {
      p.classList.toggle('is-dimmed', p.getAttribute('data-country') !== code);
    });
  }

  function statusFor(code) {
    var chip = chipFor(code);
    var el = countryElFor(code);
    var name = (chip && chip.dataset.region) ? chip.dataset.region : (el ? el.getAttribute('data-name') : code);
    if (!mapStatus) return;
    mapStatus.innerHTML = isPartnerMap
      ? '<strong>' + name + '</strong> — partners shown below.'
      : '<strong>' + name + '</strong> — living labs highlighted on the map.';
  }

  function renderPartners(code, name) {
    if (!partnerPanel) return;
    var items = [];
    partnerData.forEach(function (p) { if (p.code === code) items.push(p); });
    if (!items.length) { clearPanel(); return; }
    var cards = items.map(function (p) {
      var html = '<div class="partner-card">';
      html += '<span class="logo-box"><img src="' + p.logo + '" alt="' + p.inst + '" loading="lazy"></span>';
      html += '<span>';
      html += '<h3>' + p.inst + '</h3>';
      if (p.role) html += '<p class="partner-role">' + p.role + '</p>';
      html += '<p class="pi-name">' + p.pi + '</p>';
      html += '<p class="country">' + p.name + '</p>';
      html += '</span></div>';
      return html;
    }).join('');
    partnerPanel.innerHTML = '<h3 class="partner-panel-title">Partners in ' + name + '</h3><div class="partner-grid">' + cards + '</div>';
  }

  function clearPanel() {
    if (partnerPanel) partnerPanel.innerHTML = '';
  }

  function resetAll() {
    clearActive();
    clearPanel();
    if (mapStatus) {
      mapStatus.innerHTML = isPartnerMap
        ? '<strong>All countries</strong> — click a country to see its partners.'
        : '<strong>All countries</strong> — click a country to highlight its living labs on the map.';
    }
  }

  chips.forEach(function (chip) {
    chip.addEventListener('click', function () {
      if (chip.classList.contains('is-active')) { resetAll(); return; }
      clearActive();
      setActive(chip.dataset.country);
      statusFor(chip.dataset.country);
    });
  });

  var llCards = Array.prototype.slice.call(document.querySelectorAll('.ll-card'));

  function llCardForName(name) {
    for (var i = 0; i < llCards.length; i++) {
      var tag = llCards[i].querySelector('.region-tag');
      if (tag && tag.textContent.trim().toLowerCase() === name.toLowerCase()) return llCards[i];
    }
    return null;
  }

  function focusLivingLab(name) {
    var card = llCardForName(name);
    if (!card) return;
    card.scrollIntoView({ behavior: 'smooth', block: 'center' });
    card.classList.remove('ll-flash');
    void card.offsetWidth;
    card.classList.add('ll-flash');
  }

  countries.forEach(function (el) {
    el.addEventListener('click', function () {
      var code = el.getAttribute('data-country');
      var name = el.getAttribute('data-name') || code;
      clearActive();
      setActive(code);
      statusFor(code);
      if (isPartnerMap) {
        renderPartners(code, name);
      } else if (llCards.length) {
        focusLivingLab(name);
      }
    });
  });

  if (mapReset) mapReset.addEventListener('click', resetAll);

  /* ---------- Consortium image hotspots (partners page) ---------- */
  var consortiumMap = document.querySelector('[data-consortium-map]');
  var consortiumPanel = document.querySelector('[data-consortium-panel]');

  var consortiumData = [
    { p: 9,  left: 2.9,  top: 5.2,  width: 26.4, height: 22.8 },
    { p: 10, left: 2.9,  top: 29.3, width: 26.4, height: 13.7 },
    { p: 12, left: 2.0,  top: 44.3, width: 27.3, height: 19.5 },
    { p: 11, left: 2.0,  top: 65.1, width: 27.3, height: 15.6 },
    { p: 0,  left: 33.2, top: 2.6,  width: 34.2, height: 29.3 },
    { p: 1,  left: 67.9, top: 5.2,  width: 28.3, height: 20.8 },
    { p: 5,  left: 66.9, top: 26.0, width: 29.8, height: 16.9 },
    { p: 8,  left: 66.9, top: 50.8, width: 29.8, height: 19.5 },
    { p: 3,  left: 11.7, top: 67.1, width: 17.6, height: 33.2 },
    { p: 2,  left: 29.3, top: 67.1, width: 14.6, height: 33.2 },
    { p: 4,  left: 44.0, top: 67.1, width: 16.6, height: 33.2 },
    { p: 6,  left: 60.5, top: 67.1, width: 16.6, height: 33.2 },
    { p: 7,  left: 77.1, top: 67.1, width: 19.5, height: 33.2 }
  ];

  if (consortiumMap) {
    var hotspotLayer = consortiumMap.querySelector('.consortium-hotspots');
    var selectedHotspot = null;

    function renderConsortiumPartner(entry) {
      if (!consortiumPanel || !entry) return;
      var p = partnerData[entry.p];
      if (!p) return;
      var role = p.role ? '<p class="partner-role">' + p.role + '</p>' : '';
      consortiumPanel.innerHTML =
        '<div class="consortium-panel-card">' +
          '<span class="logo-box"><img src="' + p.logo + '" alt="' + p.inst + '" loading="lazy"></span>' +
          '<h3>' + p.inst + '</h3>' +
          role +
          '<p class="pi-name">Principal Investigator: ' + p.pi + '</p>' +
          '<p class="country">' + p.name + '</p>' +
        '</div>';
    }

    consortiumData.forEach(function (entry) {
      var p = partnerData[entry.p];
      if (!p || !hotspotLayer) return;
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'consortium-hotspot';
      btn.style.left = entry.left + '%';
      btn.style.top = entry.top + '%';
      btn.style.width = entry.width + '%';
      btn.style.height = entry.height + '%';
      btn.setAttribute('aria-label', 'Show information about ' + p.inst);
      btn.setAttribute('aria-pressed', 'false');
      btn.addEventListener('click', function () {
        if (selectedHotspot === btn) {
          selectedHotspot.classList.remove('is-active');
          btn.setAttribute('aria-pressed', 'false');
          selectedHotspot = null;
          if (consortiumPanel) consortiumPanel.innerHTML = '';
          return;
        }
        if (selectedHotspot) {
          selectedHotspot.classList.remove('is-active');
          selectedHotspot.setAttribute('aria-pressed', 'false');
        }
        selectedHotspot = btn;
        btn.classList.add('is-active');
        btn.setAttribute('aria-pressed', 'true');
        renderConsortiumPartner(entry);
      });
      hotspotLayer.appendChild(btn);
    });
  }

  /* ---------- Data-driven news & events ---------- */
  function newsCardHtml(item) {
    var featured = item.featured ? ' is-featured' : '';
    var poster = item.poster ? ' is-poster' : '';
    var overlay = item.link
      ? '<a class="news-overlay" href="' + item.link + '" target="_blank" rel="noopener noreferrer" aria-label="View on ' + item.platform + '"></a>'
      : '';
    var thumb;
    if (item.image) {
      thumb = '<div class="news-thumb"><img src="' + item.image + '" alt="' + item.imageAlt + '" loading="lazy"></div>';
    } else {
      thumb = '<div class="news-thumb is-empty" aria-hidden="true"><span>' + (item.thumbText || item.category) + '</span></div>';
    }
    var embed = item.fbEmbed ? '<div class="fb-post-embed">' + item.fbEmbed + '</div>' : '';
    var readMore = item.readMoreLabel ? item.readMoreLabel + ' \u203A' : 'View on ' + item.platform + ' \u203A';
    return '<article class="news-card' + featured + poster + '">' +
      overlay +
      '<div class="news-meta">' +
        '<span class="meta-chip">' + item.category + '</span>' +
        '<time datetime="' + item.dateISO + '">' + item.dateLabel + '</time>' +
      '</div>' +
      thumb +
      '<h3 id="' + item.id + '"><span class="title-underline">' + item.title + '</span></h3>' +
      '<p class="excerpt">' + item.excerpt + '</p>' +
      embed +
      '<p class="read-more">' + readMore + '</p>' +
      '</article>';
  }

  if (typeof SAVE_NEWS !== 'undefined') {
    document.querySelectorAll('[data-news-grid]').forEach(function (grid) {
      var section = grid.getAttribute('data-news-section') || 'news';
      var limit = parseInt(grid.getAttribute('data-news-limit'), 10);
      var items = [];
      SAVE_NEWS.forEach(function (n) { if (n.section === section) items.push(n); });
      if (!isNaN(limit) && items.length > limit) items = items.slice(0, limit);
      grid.innerHTML = items.map(newsCardHtml).join('');
    });
  }

  /* ---------- Region accordion (Living Labs) ---------- */
  document.querySelectorAll('[data-region-toggle]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var row = btn.closest('[data-region-row]');
      if (!row) return;
      var open = row.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  });

  /* ---------- Reveal on scroll ---------- */
  var revealEls = document.querySelectorAll('.reveal, .stagger');
  if ('IntersectionObserver' in window && revealEls.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* ---------- Contact / newsletter form ---------- */
  var form = document.querySelector('[data-contact-form]');
  if (form) {
    var success = document.querySelector('[data-form-success]');

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var valid = true;
      var firstInvalid = null;

      var fields = form.querySelectorAll('.form-control');
      fields.forEach(function (input) {
        if (input.dataset.honeypot) return;
        var errEl = document.getElementById(input.getAttribute('aria-describedby'));
        var value = input.value.trim();
        var ok = value.length > 0;

        if (ok && input.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) ok = false;
        if (ok && input.id === 'input-consent' && !input.checked) ok = false;

        input.classList.toggle('is-invalid', !ok);
        if (errEl) errEl.textContent = ok ? '' : input.dataset.errmsg || 'This field is required.';
        if (!ok && !firstInvalid) firstInvalid = input;
        valid = valid && ok;
      });

      if (!valid) {
        if (firstInvalid) firstInvalid.focus();
        return;
      }

      var btn = form.querySelector('.btn--submit');
      if (btn) {
        btn.disabled = true;
        btn.classList.add('is-sending');
      }

      var subject = (form.dataset.subject || 'SUS-SOIL contact') + ' — ' +
        (form.querySelector('#input-name') ? form.querySelector('#input-name').value : '');

      var bodyLines = [];
      fields.forEach(function (input) {
        if (input.type === 'checkbox' || input.dataset.honeypot) return;
        var label = form.querySelector('label[for="' + input.id + '"]');
        bodyLines.push((label ? label.textContent.trim() : input.name) + ': ' + input.value.trim());
      });

      var mailto = form.dataset.mailto || 'mrosa.mosquera.losada@usc.es';
      var url = 'mailto:' + encodeURIComponent(mailto) +
        '?subject=' + encodeURIComponent(subject) +
        '&body=' + encodeURIComponent(bodyLines.join('\n'));

      setTimeout(function () {
        window.location.href = url;
        if (btn) {
          btn.disabled = false;
          btn.classList.remove('is-sending');
        }
        if (success) success.textContent = 'Opening your email client...';
      }, 350);
    });

    form.addEventListener('input', function (e) {
      if (e.target && e.target.classList && e.target.classList.contains('form-control')) {
        e.target.classList.remove('is-invalid');
        var errEl = document.getElementById(e.target.getAttribute('aria-describedby'));
        if (errEl) errEl.textContent = '';
      }
    });

    var messageInput = form.querySelector('#input-message');
    var countEl = form.querySelector('[data-message-count]');
    if (messageInput && countEl) {
      messageInput.addEventListener('input', function () {
        countEl.textContent = String(messageInput.value.length);
      });
    }
  }

  /* ---------- Newsletter subscribe form ---------- */
  var subForm = document.querySelector('[data-subscribe-form]');
  if (subForm) {
    var subSuccess = document.querySelector('[data-subscribe-success]');
    subForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var email = subForm.querySelector('#subscribe-email');
      var ok = email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim());
      if (!ok) {
        email.classList.add('is-invalid');
        return;
      }
      email.classList.remove('is-invalid');
      if (subSuccess) subSuccess.textContent = 'Almost there — check your inbox to confirm your subscription.';
      subForm.reset();
    });
  }
})();
