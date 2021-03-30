// Hamburger menu for mobile view
const menuIcon = document.querySelector('.hamburger-icon');
const mobileMenu = document.querySelector('.hamburger-menu');
const mobileMenuItems = document.querySelector('ul');

hidden = true;
menuIcon.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    mobileMenuItems.classList.toggle('active');
    hidden = false;
})

const outside = document.querySelector('body');

outside.addEventListener('click', function () {
    if (hidden) {
        mobileMenuItems.classList.remove('active');
        mobileMenu.classList.remove('active');
    }
    hidden = true;
});

// Fade out effect for mobile nav bar
const navbar = document.querySelector('nav');
const navHeight = parseInt(window.getComputedStyle(navbar).height)

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > navHeight || document.documentElement.scrollTop > navHeight) {
    navbar.classList.add('fade-out');
  } else {
    navbar.classList.remove('fade-out');
  }};

  