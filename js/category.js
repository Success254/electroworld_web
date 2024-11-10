// category.js
document.addEventListener('DOMContentLoaded', () => {
    const categoryLinks = document.querySelectorAll('.category-grid a');

    categoryLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.backgroundColor = '#f39c12'; // Change background color on hover
            link.style.color = '#fff'; // Change text color on hover
        });

        link.addEventListener('mouseleave', () => {
            link.style.backgroundColor = '#f0f0f0'; // Reset background color
            link.style.color = '#333'; // Reset text color
        });
    });
});
