window.addEventListener('DOMContentLoaded', (e) => {

  let faq_triger = document.querySelectorAll('.faq_q');
  let faq_active;
  const className_faq_active = 'open';

  let window_h = window.innerHeight;
  const fixedFooter = document.getElementById('fixedFooter');

  window.addEventListener( 'resize', function() {
    window_h = window.innerHeight;
  }, false );
  window.addEventListener('load', set_fixedFooter);
  window.addEventListener('scroll', set_fixedFooter);


  faq_triger.forEach(function(el, i) {
    el.addEventListener('click', function() {
      if ( !el.classList.contains(className_faq_active)) {
        if ( faq_active ) {
          faq_active.classList.remove(className_faq_active);
        }
        faq_active = el;
        el.classList.add(className_faq_active)
      } else {
        el.classList.remove(className_faq_active)
      }
    })
  })

  function set_fixedFooter() {
    if (window.pageYOffset > window_h/2 ) {
      fixedFooter.classList.add('active')
    } else {
      fixedFooter.classList.remove('active')
    }
  }

});

