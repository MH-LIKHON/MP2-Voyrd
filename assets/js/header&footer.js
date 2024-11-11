// ========== FAQ Answer Display ==========

/**
 * Displays the answer associated with the selected FAQ question.
 * @param {string} selectedValue - The identifier of the selected FAQ item.
 */
function showFaqAnswer(selectedValue) {
    // Hide all FAQ answers
    document.querySelectorAll('.faq-answer').forEach(el => el.classList.add('d-none'));
    
    // Show the answer associated with the selected question
    const answer = document.querySelector(`.faq-answer[data-faq="${selectedValue}"]`);
    if (answer) {
        answer.classList.remove('d-none');
    }
}

// Initialize FAQ display with the first answer visible on page load
document.addEventListener("DOMContentLoaded", function() {
    showFaqAnswer(document.getElementById("faqDropdown").value);
});

// ========== Contact Form Submission with EmailJS ==========

/**
 * Initializes EmailJS with the provided public key and sets up the contact form submission.
 */
document.addEventListener("DOMContentLoaded", function() {
    // Initialize EmailJS with the public key
    emailjs.init("Nr-v4qaxoSS5p_zDP");

    // Select the contact form
    const contactForm = document.querySelector('.contact-form');

    // Add submit event listener to the contact form
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission behavior

        // Send the form data using EmailJS
        emailjs.sendForm('service_c2fa08i', 'template_0h7vmqw', contactForm)
            .then(
                function(response) {
                    // On success, show a confirmation message and reset the form fields
                    alert("Your message has been sent successfully!");
                    contactForm.reset(); // Clear the form fields
                },
                function(error) {
                    // On error, log the issue and show an error message
                    console.error("Error sending email:", error);
                    alert("There was an issue sending your message. Please try again later.");
                }
            );
    });
});
