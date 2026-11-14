// Particles
function createParticles() {
  const container = document.querySelector('.particles');
  if (!container) return;
  for (let i = 0; i < 40; i++) {
    const p = document.createElement('div');
    p.classList.add('particle');
    p.style.left = Math.random() * 100 + '%';
    p.style.animationDuration = (8 + Math.random() * 15) + 's';
    p.style.animationDelay = Math.random() * 10 + 's';
    p.style.width = p.style.height = (1 + Math.random() * 3) + 'px';
    p.style.background = Math.random() > 0.5 ? '#00f0ff' : '#ff00aa';
    container.appendChild(p);
  }
}

// Lightbox
function initLightbox() {
  const lightbox = document.createElement('div');
  lightbox.className = 'lightbox';
  lightbox.innerHTML = '<img src="" alt="Zoom">';
  document.body.appendChild(lightbox);

  document.querySelectorAll('.img-zoom, .card-img').forEach(img => {
    img.addEventListener('click', () => {
      lightbox.querySelector('img').src = img.src;
      lightbox.classList.add('active');
    });
  });

  lightbox.addEventListener('click', () => {
    lightbox.classList.remove('active');
  });
}

// Active nav
function setActiveNav() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') === path || (path === '' && a.getAttribute('href') === 'index.html')) {
      a.classList.add('active');
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  createParticles();
  initLightbox();
  setActiveNav();
});
