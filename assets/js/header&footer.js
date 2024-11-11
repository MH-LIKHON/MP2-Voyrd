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
    const faqDropdown = document.getElementById("faqDropdown");
    if (faqDropdown) {
        showFaqAnswer(faqDropdown.value);
        faqDropdown.addEventListener("change", function(event) {
            showFaqAnswer(event.target.value);
        });
    }

    // ========== Contact Form Submission and Success Modal ==========

    const contactForm = document.querySelector('.contact-form');
    const successModal = document.getElementById("successModal");
    const closeModalButton = document.querySelector(".close-btn");

    // Ensure the modal is hidden initially
    successModal.style.display = "none";

    if (contactForm) {
        // Handle form submission
        contactForm.addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent page reload
            console.log("Form submitted successfully.");

            // Show the success modal
            successModal.style.display = "flex";
            console.log("Success modal displayed after form submission.");

            // Reset the form fields after submission
            contactForm.reset();
        });

        // Close the modal when the close button is clicked
        closeModalButton.addEventListener("click", function(event) {
            successModal.style.display = "none";
            console.log("Close button clicked - success modal hidden.");
        });

        // Close the modal if the user clicks outside the modal content
        window.addEventListener("click", function(event) {
            if (event.target === successModal) {
                successModal.style.display = "none";
                console.log("Clicked outside modal - success modal hidden.");
            }
        });
    } else {
        console.error("Contact form not found!");
    }
});
