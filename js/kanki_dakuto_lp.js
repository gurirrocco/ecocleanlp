document.addEventListener('DOMContentLoaded', function () {

  /* ================================================
     1. スクロールフェードイン (Intersection Observer)
  ================================================ */
  const fadeTargets = [
    '.benefits-white-card',
    '.benefit-item',
    '.sec-cta .cta-wrap',
    '.sec-cta2 .cta2-navy-box',
    '.what-is-row',
    '.customer-card',
    '.dirt-photos-box',
    '.risk-block',
    '.service-card',
    '.region-title-wrap',
    '.region-maps-row',
    '.abs-step',
    '.abs-label',
    '.movie-section',
    '.reason-item',
    '.review-row',
    '.flow-item',
    '.pricing-img-wrap',
    '.pricing-note',
  ];

  const fadeEls = document.querySelectorAll(fadeTargets.join(','));
  fadeEls.forEach(function (el, i) {
    el.classList.add('fade-in');
    // カード系は順番に遅延
    const delay = (i % 4) * 80;
    el.style.transitionDelay = delay + 'ms';
  });

  const fadeObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        fadeObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  fadeEls.forEach(function (el) { fadeObserver.observe(el); });


  /* ================================================
     2. 数字カウントアップ
  ================================================ */
  const counters = [
    { selector: '.risk-compare-card p[style*="color:#e74c3c"]:nth-child(2)', target: 30, suffix: '%', prefix: '最大' },
    { selector: '.risk-compare-card p[style*="color:#b23e3a"]:nth-child(2)', target: 7,  suffix: '割', prefix: '約' },
  ];

  // data-count属性で汎用的に対応
  document.querySelectorAll('[data-count]').forEach(function (el) {
    const target = parseInt(el.dataset.count, 10);
    const prefix = el.dataset.prefix || '';
    const suffix = el.dataset.suffix || '';

    const countObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        countObserver.unobserve(entry.target);
        let start = 0;
        const duration = 1500;
        const step = Math.ceil(target / (duration / 16));
        const timer = setInterval(function () {
          start += step;
          if (start >= target) {
            start = target;
            clearInterval(timer);
          }
          el.textContent = prefix + start + suffix;
        }, 16);
      });
    }, { threshold: 0.5 });

    countObserver.observe(el);
  });

  /* リスクセクションの数字にdata-count付与 */
  document.querySelectorAll('.risk-compare-card').forEach(function (card) {
    const big = card.querySelector('p:nth-child(2)');
    if (!big) return;
    const text = big.textContent.trim();

    if (text.includes('30%')) {
      big.setAttribute('data-count', '30');
      big.setAttribute('data-prefix', '最大');
      big.setAttribute('data-suffix', '%');
      big.textContent = '最大0%';
    } else if (text.includes('7割')) {
      big.setAttribute('data-count', '7');
      big.setAttribute('data-prefix', '約');
      big.setAttribute('data-suffix', '割');
      big.textContent = '約0割';
    } else if (text.includes('換気改善') || text.includes('1,000')) {
      // 口コミ件数
    }

    if (big.dataset.count) {
      const target = parseInt(big.dataset.count, 10);
      const prefix = big.dataset.prefix || '';
      const suffix = big.dataset.suffix || '';
      const countObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          countObserver.unobserve(entry.target);
          let start = 0;
          const timer = setInterval(function () {
            start += 1;
            if (start >= target) { start = target; clearInterval(timer); }
            entry.target.textContent = prefix + start + suffix;
          }, 1500 / target);
        });
      }, { threshold: 0.5 });
      countObserver.observe(big);
    }
  });


  /* ================================================
     3. ボタンのホバーエフェクト（CSSで対応済み）
        ripple（波紋）エフェクトをJS追加
  ================================================ */
  document.querySelectorAll('.btn-consult, .btn-diagnosis, .btn-tel').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      const ripple = document.createElement('span');
      ripple.classList.add('ripple');
      const rect = btn.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      ripple.style.cssText = [
        'position:absolute',
        'border-radius:50%',
        'background:rgba(255,255,255,0.35)',
        'transform:scale(0)',
        'animation:ripple-anim 0.5s linear',
        'pointer-events:none',
        'width:' + size + 'px',
        'height:' + size + 'px',
        'left:' + (e.clientX - rect.left - size / 2) + 'px',
        'top:' + (e.clientY - rect.top - size / 2) + 'px',
      ].join(';');
      btn.style.position = 'relative';
      btn.style.overflow = 'hidden';
      btn.appendChild(ripple);
      setTimeout(function () { ripple.remove(); }, 500);
    });
  });

});
