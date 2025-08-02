// === MODE & SOUND TOGGLE ===
const toggleMode = document.getElementById('toggleMode');
const soundToggle = document.getElementById('soundToggle');
let isDark = true;
let isMuted = true;

if (toggleMode) {
  toggleMode.addEventListener('click', () => {
    document.body.classList.toggle('night');
    document.body.classList.toggle('day');
    isDark = !isDark;
    toggleMode.textContent = isDark ? '🌙' : '☀️';
  });
}

if (soundToggle) {
  soundToggle.addEventListener('click', () => {
    isMuted = !isMuted;
    soundToggle.textContent = isMuted ? '🔇' : '🔊';
    // Optionally: handle background music here
  });
}

// === SMOOTH SCROLL ON CTA ===
const cta = document.querySelector('.cta');
if (cta) {
  cta.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  });
}

// === GSAP ANIMATIONS ===
gsap.registerPlugin(ScrollTrigger);

// Hero fade-in
gsap.from(".content", {
  opacity: 0,
  y: -50,
  duration: 1.5,
  ease: "power4.out"
});

// Section animations on scroll
document.querySelectorAll(".section").forEach((section) => {
  gsap.from(section, {
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
      toggleActions: "play none none none"
    },
    opacity: 0,
    y: 60,
    duration: 1,
    ease: "power2.out"
  });
});

// === LOTTIE GHOST ANIMATION ===
const ghostAnim = document.getElementById("ghostAnim");
if (ghostAnim) {
  lottie.loadAnimation({
    container: ghostAnim,
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "https://lottie.host/f9bfbf0e-3918-49c7-b2c7-54b5245f0e17/nmQmjPo3ep.json"
  });
}

// === TILT EFFECT ON PROJECT CARDS ===
VanillaTilt.init(document.querySelectorAll(".project-card"), {
  max: 15,
  speed: 400,
  glare: true,
  "max-glare": 0.3
});

// === MOBILE NAV MENU ===
const toggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

if (toggle && navLinks) {
  toggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    toggle.textContent = navLinks.classList.contains('show') ? '✖' : '☰';
  });

  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('show');
      toggle.textContent = '☰';
    });
  });
}

// === CUSTOM CURSOR TRACKING ===
const ghostCursor = document.getElementById("ghostCursor");
if (ghostCursor) {
  document.addEventListener("mousemove", (e) => {
    ghostCursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  });
}
