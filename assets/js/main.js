// Zero:Archive Interactive Features
// osu! inspired click feedback + smooth interactions

document.addEventListener('DOMContentLoaded', () => {
  
  // osu! Style Click Ripple Effect
  document.addEventListener('click', (e) => {
    const ripple = document.createElement('div');
    ripple.className = 'click-ripple';
    ripple.style.left = e.clientX + 'px';
    ripple.style.top = e.clientY + 'px';
    document.body.appendChild(ripple);
    
    setTimeout(() => {
      ripple.remove();
    }, 600);
  });
  
  // Smooth Scroll for Navigation Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  
  // Active Navigation Highlight
  const navLinks = document.querySelectorAll('.nav-links a');
  const sections = document.querySelectorAll('section[id]');
  
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (scrollY >= (sectionTop - 200)) {
        current = section.getAttribute('id');
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').includes(current)) {
        link.classList.add('active');
      }
    });
  });
  
  // Audio Preview Interaction (Placeholder - ready for real audio)
  document.querySelectorAll('.audio-preview').forEach(preview => {
    preview.addEventListener('click', function() {
      const bars = this.querySelectorAll('.audio-bar');
      bars.forEach(bar => {
        bar.style.animationPlayState = 
          bar.style.animationPlayState === 'paused' ? 'running' : 'paused';
      });
      
      // Add visual feedback
      this.style.borderColor = 
        this.style.borderColor === 'rgb(0, 217, 255)' ? '' : '#00D9FF';
    });
  });
  
  // Parallax Effect on Hero Background
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const hero = document.querySelector('.hero::before');
    if (hero) {
      document.querySelector('.hero').style.transform = 
        `translateY(${scrolled * 0.5}px)`;
    }
  });
  
  // Card Hover Sound Effect Placeholder
  document.querySelectorAll('.artist-card, .hex-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      // Placeholder for sound effect
      // new Audio('/assets/sounds/hover.mp3').play();
      console.log('Card hover - sound effect would play here');
    });
  });
  
  // Lazy Load Optimization
  const lazyImages = document.querySelectorAll('img[data-src]');
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        imageObserver.unobserve(img);
      }
    });
  });
  
  lazyImages.forEach(img => imageObserver.observe(img));
  
  // Typing Effect for Hero Tagline
  const tagline = document.querySelector('.hero-tagline');
  if (tagline) {
    const text = tagline.textContent;
    tagline.textContent = '';
    let i = 0;
    
    const typeWriter = () => {
      if (i < text.length) {
        tagline.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
      }
    };
    
    setTimeout(typeWriter, 500);
  }
  
  // Konami Code Easter Egg (osu! tribute)
  let konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
  let konamiIndex = 0;
  
  document.addEventListener('keydown', (e) => {
    if (e.key === konamiCode[konamiIndex]) {
      konamiIndex++;
      if (konamiIndex === konamiCode.length) {
        activateEasterEgg();
        konamiIndex = 0;
      }
    } else {
      konamiIndex = 0;
    }
  });
  
  function activateEasterEgg() {
    document.body.style.animation = 'glitchText 0.5s ease-in-out 3';
    console.log('🎮 osu! mode activated');
    // Add special effects here
  }
});

// Performance: Throttle scroll events
function throttle(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Apply throttling to scroll handlers
window.addEventListener('scroll', throttle(() => {
  // Scroll-based animations
}, 100));
