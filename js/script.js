// script.js

// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function() {
    // Get all the navigation links
    const navLinks = document.querySelectorAll('nav a');

    // Add an event listener for each link
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();  // Prevent the default anchor link behavior

            // Hide all sections
            const sections = document.querySelectorAll('main section');
            sections.forEach(section => {
                section.style.display = 'none';
            });

            // Show the section corresponding to the clicked link
            const targetSection = document.querySelector(this.getAttribute('href'));
            targetSection.style.display = 'block';
        });
    });
});