document.addEventListener("DOMContentLoaded", function() {
    // === Navigation Sections ===
    const navLinks = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll("section");

    function showSection(targetId) {
        sections.forEach(section => section.style.display = "none");
        const targetSection = document.getElementById(targetId);
        if (targetSection) targetSection.style.display = "block";
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            navLinks.forEach(link => link.classList.remove('active'));
            const targetId = link.getAttribute("href").substring(1);
            showSection(targetId);
            link.classList.add('active');
        });
    });

    showSection("home"); // show home initially
    const homeLink = document.querySelector('#nav .nav-link[href="#home"]');
    if (homeLink) homeLink.classList.add('active');

    // === Typing Animation ===
    const headerText = "Welcome! I'm Matthew.";
    const paragraphText = "Take a look around!";

    const headerEl = document.getElementById('home_h2_text');
    const paraEl = document.getElementById('home_intro');

    let i = 0;

    function typeHeader() {
        if (i < headerText.length) {
            headerEl.textContent += headerText.charAt(i);
            i++;
            setTimeout(typeHeader, 75);
        } else {
            i = 0;
            typeParagraph();
        }
    }

    function typeParagraph() {
        if (i < paragraphText.length) {
            paraEl.textContent += paragraphText.charAt(i);
            i++;
            setTimeout(typeParagraph, 75);
        }
    }

    // Start typing animation
    typeHeader();
});

const toggle = document.querySelector('#themeToggle');
toggle.addEventListener('click', () => document.body.classList.toggle('dark-mode'));