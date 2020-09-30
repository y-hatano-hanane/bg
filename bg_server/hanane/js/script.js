window.addEventListener('DOMContentLoaded', function(e) {

  const faq_triger = document.querySelectorAll('input[name="faq_trigger"]');
  const box_faq = document.getElementById('box_faq');
  let faq_active;
  const className_faq_active = 'open';

  let window_h = window.innerHeight;
  const fixedFooter = document.getElementById('fixedFooter');

  window.addEventListener( 'resize', function() {
    window_h = window.innerHeight;
  }, false );
  window.addEventListener('load', set_fixedFooter);
  window.addEventListener('scroll', set_fixedFooter);

  for (let i = 0; i < faq_triger.length; i++) {
    faq_triger[i].addEventListener('click', function() {
      let el = faq_triger[i];
      if (el.checked) {
        for (let j = 0; j<faq_triger.length; j++) {
          if ( i !== j && faq_triger[j].checked ) {
            console.log( faq_triger[j] )
            faq_triger[j].checked = false
          }
        }
      }

    })
  }

  function set_fixedFooter() {
    if (window.pageYOffset > window_h/2 ) {
      fixedFooter.classList.add('active')
    } else {
      fixedFooter.classList.remove('active')
    }
  }

});

