
// DOM Elements
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const contactForm = document.getElementById('contactForm');
const counters = document.querySelectorAll('.stat-number');


// Mobile Menu Toggle
menuToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
  
  // Toggle icon between menu and x
  const icon = menuToggle.querySelector('i');
  if (mobileMenu.classList.contains('active')) {
    icon.setAttribute('data-lucide', 'x');
  } else {
    icon.setAttribute('data-lucide', 'menu');
  }
  
  // Refresh Lucide icons
  lucide.createIcons();
});

// Close mobile menu when clicking on a link
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
mobileNavLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    const icon = menuToggle.querySelector('i');
    icon.setAttribute('data-lucide', 'menu');
    lucide.createIcons();
  });
});


// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll('a[href^="#"]');
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    
    if (targetSection) {
      const headerHeight = document.querySelector('.header').offsetHeight;
      const targetPosition = targetSection.offsetTop - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});


// Contact form submission alert

  // Only show alert AFTER form successfully submits (on success page)
  if (window.location.href.includes('success')) {
    alert("Thank you for your message! We'll get back to you soon.");
  }



// Header scroll effect
window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  
  if (window.scrollY > 100) {
    header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
  } else {
    header.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
  }
});

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe elements for scroll animations
const animateElements = document.querySelectorAll('.team-card, .project-card, .service-card');
animateElements.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// Initialize Lucide icons
document.addEventListener('DOMContentLoaded', () => {
  lucide.createIcons();
});

// Add click handlers for CTA buttons
document.querySelectorAll('.btn').forEach(btn => {
  if (btn.textContent.includes('View Our Work')) {
    btn.addEventListener('click', () => {
      document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' });
    });
  }
  
  if (btn.textContent.includes("Let's Talk") || btn.textContent.includes('Schedule a Call')) {
    btn.addEventListener('click', () => {
      document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
    });
  }
  
  if (btn.textContent.includes('Start Project')) {
    btn.addEventListener('click', () => {
      document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
    });
  }
});

// Project card hover effects
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-8px)';
    card.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
  });
  
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0)';
    card.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.1)';
  });
});

// Service card hover effects
document.querySelectorAll('.service-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-8px)';
    card.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
  });
  
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0)';
    card.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.1)';
  });
});

// Team card hover effects
document.querySelectorAll('.team-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-8px)';
    card.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
  });
  
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0)';
    card.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.1)';
  });
});

document.addEventListener('DOMContentLoaded', () => {
const statObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const counter = entry.target;
      const target = +counter.getAttribute('data-target');
      const duration = 1500; // animation duration in ms (adjust for smoothness)
      let start = null;

      const animate = (timestamp) => {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const current = Math.min(target, Math.ceil((progress / duration) * target));
        counter.innerText = current + '+';

        if (current < target) {
          requestAnimationFrame(animate);
        } else {
          counter.innerText = target + '+';
        }
      };

      requestAnimationFrame(animate);
      statObserver.unobserve(counter);
    }
  });
}, { threshold: 0.6 });

counters.forEach(counter => {
  statObserver.observe(counter);
});


});
