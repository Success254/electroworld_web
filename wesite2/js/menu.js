// menu.js
document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.querySelector('.menu-button');
    const navMenu = document.querySelector('.nav-menu');

    // Toggle navigation menu visibility
    menuButton.addEventListener('click', () => {
        navMenu.classList.toggle('hidden'); // Toggle 'hidden' class
    });
});
const mobileMenuButton = document.querySelector('[aria-haspopup="dialog"]');
const mobileMenu = document.querySelector('nav');
document.querySelector("body > div.flex.min-h-screen.flex-col > header > div > button")
mobileMenuButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});
