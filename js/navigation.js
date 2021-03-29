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





//TODO navigation menu disappear on scroll for mobile view
