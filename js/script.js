// script.js

// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function() {
    // Get all the navigation links
    const navLinks = document.querySelectorAll('nav a');

    // Get all sections
    const sections = document.querySelectorAll("section");


    // Function to show a specific section
    function showSection(targetId) {
        // Hide all sections
        sections.forEach(section => section.style.display = "none");

        const targetSection = document.getElementById(targetId);
        
        // Show the targeted section
        if (targetSection) {
            targetSection.style.display = "block";
        }
    }
    
    // Add an event listener for each link
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();  // Prevent the default anchor link behavior

            // Hide all sections
            sections.forEach(section => section.style.display = "none");

            const targetId = link.getAttribute("href").substring(1);

            showSection(targetId);
        });
    });

    showSection("home");
});