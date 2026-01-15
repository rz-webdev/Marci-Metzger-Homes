document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const card = document.querySelector('.card');
  const callButton = document.querySelector('.call-button');
  const sliderImgs = document.querySelectorAll('.slider-img');

  /* 🔹 ADDED: select all flip cards */
  const flipCards = document.querySelectorAll('.flip-card');

  // Hamburger menu toggle
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active'); // animate hamburger to X
      navLinks.classList.toggle('active');  // show/hide nav links
    });
  }

  // Check if mobile
  function isMobile() {
    return window.innerWidth <= 1077;
  }

  // Flip card on click (mobile only)
  if (card) {
    card.addEventListener('click', () => {
      if (isMobile()) {
        card.classList.toggle('active');
        card.style.transform = card.classList.contains('active')
          ? 'rotateY(180deg)'
          : 'rotateY(0deg)';
      }
    });
  }

  /* 🔥 ADDED: flip-card support (accordion style on mobile) */
  if (flipCards.length > 0) {
    flipCards.forEach(fc => {
      fc.addEventListener('click', () => {
        if (isMobile()) {

          /* ✅ ACCORDION ADDITION (close others) */
          flipCards.forEach(other => {
            if (other !== fc) {
              other.classList.remove('active');
            }
          });

          /* ✅ TOGGLE CURRENT */
          fc.classList.toggle('active');
        }
      });
    });
  }

  // Call button toggle (mobile only)
  if (callButton) {
    callButton.addEventListener('click', () => {
      if (isMobile()) {
        callButton.classList.toggle('active');
      }
    });
  }

  // Slider image click (vanilla JS replacement for jQuery)
  if (sliderImgs.length > 0) {
    sliderImgs.forEach(img => {
      img.addEventListener('click', () => {
        sliderImgs.forEach(i => i.classList.remove('active')); // remove from all
        img.classList.add('active'); // add to clicked
      });
    });
  }
});
