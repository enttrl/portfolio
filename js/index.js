const lenis = new Lenis({
  autoRaf: true,
  lerp: 0.06,
  smoothWheel: true,
  smoothTouch: false,
  wheelMultiplier: 0.9
});

const slider = document.querySelector('.slider');

if (slider) {
  const slides = slider.querySelectorAll('.slider__slide');
  const dots = slider.querySelectorAll('.slider__dot');
  const autoplayDelay = 3000;
  let currentIndex = 0;
  let autoplayId = null;

  const setActiveSlide = (index) => {
    slides.forEach((slide, slideIndex) => {
      slide.classList.toggle('slider__slide--active', slideIndex === index);
    });

    dots.forEach((dot, dotIndex) => {
      dot.classList.toggle('slider__dot--active', dotIndex === index);
    });

    currentIndex = index;
  };

  const showNextSlide = () => {
    const nextIndex = (currentIndex + 1) % slides.length;
    setActiveSlide(nextIndex);
  };

  const stopAutoplay = () => {
    if (autoplayId) {
      clearTimeout(autoplayId);
    }
  };

  const startAutoplay = () => {
    stopAutoplay();

    autoplayId = setTimeout(function run() {
      showNextSlide();
      autoplayId = setTimeout(run, autoplayDelay);
    }, autoplayDelay);
  };

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      setActiveSlide(index);
      startAutoplay();
    });
  });

  slider.addEventListener('mouseenter', stopAutoplay);
  slider.addEventListener('mouseleave', startAutoplay);

  setActiveSlide(0);
  startAutoplay();
}

const scrollTopButton = document.querySelector('.scroll-top');

if (scrollTopButton) {
  const toggleScrollTopButton = () => {
    if (window.scrollY > 300) {
      scrollTopButton.classList.add('scroll-top--visible');
    } else {
      scrollTopButton.classList.remove('scroll-top--visible');
    }
  };

  window.addEventListener('scroll', toggleScrollTopButton);

  scrollTopButton.addEventListener('click', () => {
    lenis.scrollTo(0);
  });

  toggleScrollTopButton();
}


const burgerButton = document.querySelector('.header__burger');
const mobileMenu = document.querySelector('.mobile-menu');
const closeMenuButton = document.querySelector('.mobile-menu__close');
const mobileMenuLinks = document.querySelectorAll('.mobile-menu__link');

if (burgerButton && mobileMenu && closeMenuButton) {
  burgerButton.addEventListener('click', () => {
    mobileMenu.classList.add('mobile-menu--active');
    document.body.classList.add('menu-open');
  });

  closeMenuButton.addEventListener('click', () => {
    mobileMenu.classList.remove('mobile-menu--active');
    document.body.classList.remove('menu-open');
  });

  mobileMenuLinks.forEach((link) => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('mobile-menu--active');
      document.body.classList.remove('menu-open');
    });
  });
}