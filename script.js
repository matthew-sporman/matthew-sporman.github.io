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

            // Remove the 'active' class from all links
            navLinks.forEach(link => link.classList.remove('active'));

            // Hide all sections
            sections.forEach(section => section.style.display = "none");

            const targetId = link.getAttribute("href").substring(1);

            showSection(targetId);

            // Add the 'active' class to the clicked link
            link.classList.add('active');
        });
    });

    showSection("home");
});

// Initialize: Set the 'home' link as active on load
const homeLink = document.querySelector('#nav .nav-link[href="#home"]');
if (homeLink) {
    homeLink.classList.add('active');
}

const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };
  
  const validate = () => {
    const $result = $('#result');
    const email = $('#email').val();
    $result.text('');
  
    if(validateEmail(email)){
      $result.text(email + ' is valid.');
      $result.css('color', 'green');
    } else{
      $result.text(email + ' is invalid.');
      $result.css('color', 'red');
    }
    return false;
  }
  
  $('#email').on('input', validate);