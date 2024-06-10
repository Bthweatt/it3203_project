document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('.content-section');
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
  
    navItems.forEach(item => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        const targetSection = e.target.getAttribute('data-section');
  
        sections.forEach(section => {
          if (section.id === targetSection) {
            section.classList.add('active');
          } else {
            section.classList.remove('active');
          }
        });
  
        if (navLinks.classList.contains('active')) {
          navLinks.classList.remove('active');
        }
      });
    });
  
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  });
  