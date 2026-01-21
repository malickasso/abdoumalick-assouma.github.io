/* ===== MENU MOBILE ===== */
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');
const navLinks = document.querySelectorAll('.nav-link');

// Ouvrir le menu
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}

// Fermer le menu
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

// Fermer le menu quand on clique sur un lien
navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
});

/* ===== HEADER SCROLL ===== */
const header = document.getElementById('header');

function scrollHeader() {
  if (window.scrollY >= 50) {
    header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)';
    header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
  } else {
    header.style.boxShadow = 'none';
    header.style.backgroundColor = '#ffffff';
  }
}

window.addEventListener('scroll', scrollHeader);

/* ===== ACTIVE LINK ON SCROLL ===== */
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 100;
    const sectionId = section.getAttribute('id');
    const navLink = document.querySelector(`.nav-link[href*="${sectionId}"]`);

    if (navLink) {
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLink.classList.add('active');
        navLink.style.color = '#0ea5e9';
      } else {
        navLink.classList.remove('active');
        navLink.style.color = '';
      }
    }
  });
}

window.addEventListener('scroll', scrollActive);

/* ===== ANIMATION DES BARRES DE COMPÉTENCES ===== */
const skillProgressBars = document.querySelectorAll('.skill-progress');

function animateSkillBars() {
  skillProgressBars.forEach((bar) => {
    const progress = bar.getAttribute('data-progress');
    const barPosition = bar.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;

    if (barPosition < screenPosition) {
      bar.style.width = `${progress}%`;
    }
  });
}

window.addEventListener('scroll', animateSkillBars);
window.addEventListener('load', animateSkillBars);

/* ===== FORMULAIRE DE CONTACT ===== */
const contactForm = document.getElementById('contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Récupérer les valeurs du formulaire
    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Validation simple
    if (firstname && lastname && subject && message) {
      // Simuler l'envoi du message
      alert(`Merci ${firstname} ${lastname} ! Votre message a bien été envoyé.`);
      
      // Réinitialiser le formulaire
      contactForm.reset();
    } else {
      alert('Veuillez remplir tous les champs du formulaire.');
    }
  });
}

/* ===== SCROLL REVEAL ANIMATION ===== */
function revealOnScroll() {
  const elements = document.querySelectorAll('.project-card, .about-container, .skills-box, .contact-form');
  
  elements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    
    if (elementTop < windowHeight - 100) {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }
  });
}

// Initialiser les éléments pour l'animation
document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.project-card, .about-container, .skills-box, .contact-form');
  
  elements.forEach((element) => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  });
  
  // Lancer l'animation au chargement
  setTimeout(revealOnScroll, 100);
});

window.addEventListener('scroll', revealOnScroll);

/* ===== SMOOTH SCROLL POUR LES LIENS D'ANCRAGE ===== */
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      const headerHeight = document.getElementById('header').offsetHeight;
      const targetPosition = targetElement.offsetTop - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});
