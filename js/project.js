document.addEventListener('DOMContentLoaded', () => {
  const slider = document.querySelector('[data-slider]');
  if (!slider) return;

  const track = slider.querySelector('.auto-slider__track');
  const slides = slider.querySelectorAll('.auto-slider__slide');

  if (slides.length <= 1) return;

  let currentIndex = 0;

  function goToSlide(index) {
    track.style.transform = `translateX(-${index * 100}%)`;
  }

  setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    goToSlide(currentIndex);
  }, 3000);
});