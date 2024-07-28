// typed js 

var typed = new Typed('#element', {
  strings: ['Full-Stack Developer', 'Graphic Designer', 'Video Editor'],
  typeSpeed: 70,
});

// typed js 

// cursor js 

new kursor({
  type: 1
})

// cursor js 


// hamburg js (animation) 

document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });

  const navItems = navLinks.querySelectorAll('li');
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      navLinks.classList.remove('show');
    });
  });
});

// hamburg js (animation) 


// page animation (loader)

const tl = gsap.timeline();
tl
    .to("#fs", {
        height: 0,
        duration: 2,
        ease: Expo.easeInOut
    })
    .to("#elem", {
        height: 0,
        duration: 2,
        delay: -2,
        ease: Expo.easeInOut
    })
    .to("#dark", {
        height: 0,
        duration: 2,
        delay: -1.5,
        ease: Expo.easeInOut
    })