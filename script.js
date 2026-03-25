const fadeEls = document.querySelectorAll('.fade-up');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15,
    rootMargin: '0px 0px -20px 0px'
  }
);

fadeEls.forEach((el, index) => {
  el.style.transitionDelay = `${index * 70}ms`;
  observer.observe(el);
});

const navLinks = document.querySelectorAll('.quick-nav a');

navLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    const targetId = link.getAttribute('href');
    if (!targetId || !targetId.startsWith('#')) {
      return;
    }

    const targetEl = document.querySelector(targetId);
    if (!targetEl) {
      return;
    }

    event.preventDefault();
    targetEl.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});
