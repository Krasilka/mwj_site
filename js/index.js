const menuIcon = document.querySelector('.hamburger-icon');
const mobileMenu = document.querySelector('.hamburger-menu');
const mobileMenuItems = document.querySelector('ul');

menuIcon.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    mobileMenuItems.classList.toggle('active');
})

