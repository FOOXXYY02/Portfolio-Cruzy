// Menu burger toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  menuToggle.classList.toggle('open');
});

// Animation des photos au scroll
const photoBlocks = document.querySelectorAll('.photo-block');

function checkVisibility() {
  const triggerBottom = window.innerHeight * 0.9;

  photoBlocks.forEach(block => {
    const rect = block.getBoundingClientRect();
    if (rect.top < triggerBottom) {
      block.classList.add('visible');
    }
  });
}



window.addEventListener('scroll', checkVisibility);
window.addEventListener('load', checkVisibility);
