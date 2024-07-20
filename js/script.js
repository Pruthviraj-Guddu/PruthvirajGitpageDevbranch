document.addEventListener('DOMContentLoaded', function() {
    // Navigation menu toggle for mobile
    const menuIcon = document.querySelector('.sec1__menuIcon');
    const navMenu = document.querySelector('.navBar__menu');

    menuIcon.addEventListener('click', function() {
        this.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
