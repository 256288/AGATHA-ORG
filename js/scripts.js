// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Handle restaurant order buttons
document.querySelectorAll('.btn-order').forEach(button => {
    button.addEventListener('click', function () {
        let menuItem = this.previousElementSibling.previousElementSibling.textContent;
        alert(`You have selected ${menuItem}. This feature is under development.`);
    });
});

// Responsive navigation menu toggle for mobile
const nav = document.querySelector('nav ul');
const burger = document.querySelector('.burger');

burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
});

// Sticky header on scroll
window.addEventListener('scroll', function() {
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});
