const header = document.querySelector('header');
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');

window.addEventListener('scroll', function() {
  if (window.pageYOffset > 0) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

mobileMenuToggle.addEventListener('click', function() {
  header.classList.toggle('menu-open');
});

