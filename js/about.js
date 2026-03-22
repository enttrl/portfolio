document.addEventListener('DOMContentLoaded', () => {
  const skillsSection = document.querySelector('.hard-skills');
  const skillFills = document.querySelectorAll('.skills-list__fill');

  if (!skillsSection) return;

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        skillFills.forEach((fill, index) => {
          const level = fill.dataset.level || 0;

          fill.style.setProperty('--target-width', `${level}%`);

          setTimeout(() => {
            fill.classList.add('is-animated');
          }, index * 120);
        });

        // отключаем observer после первого запуска
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.3 // когда 30% блока видно
  });

  observer.observe(skillsSection);
});