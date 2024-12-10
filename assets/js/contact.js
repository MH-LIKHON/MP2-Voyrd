$(document).ready(function() {
    // ========== FAQ Answer Display ==========
    $(document).ready(function () {
        const $faqDropdown = $('#faqDropdown');
        const $faqAnswers = $('.faq-answer');
    
        function showFaqAnswer(selectedValue) {
            // Hide all answers
            $faqAnswers.removeClass('active');
            // Show the selected answer
            $(`.faq-answer[data-faq="${selectedValue}"]`).addClass('active');
        }
    
        // Initialize with the first answer visible
        if ($faqDropdown.length) {
            showFaqAnswer($faqDropdown.val());
            $faqDropdown.on('change', function () {
                showFaqAnswer($(this).val());
            });
        } else {
            console.error("FAQ dropdown not found.");
        }
    });        

    // ========== Contact Form Submission and Success Modal ==========
    const $contactForm = $('#contactForm');
    const $successModal = $('#successModal');
    const $closeModalButton = $('.close-btn');

    // Ensure the modal is hidden on page load
    $successModal.hide();

    // Handle form submission
    if ($contactForm.length) {
        $contactForm.on('submit', function(event) {
            event.preventDefault();

            console.log("Form submitted. Showing success modal...");
            $successModal.fadeIn();

            // Reset the form fields after submission
            $contactForm[0].reset();
        });
    } else {
        console.error("Contact form not found!");
    }

    // Close modal when close button is clicked
    if ($closeModalButton.length) {
        $closeModalButton.on('click', function() {
            console.log("Close button clicked. Hiding the modal...");
            $successModal.fadeOut();
        });
    } else {
        console.error("Close button not found in the modal.");
    }

    // Close the modal if user clicks outside the modal content
    $(window).on('click', function(event) {
        if ($(event.target).is($successModal)) {
            console.log("Clicked outside modal. Hiding modal...");
            $successModal.fadeOut();
        }
    });

    // Ensure modal is not shown when the page is loaded
    $(window).on('load', function() {
        console.log("Page loaded. Ensuring modal is hidden...");
        if ($successModal.is(':visible')) {
            $successModal.fadeOut();
        }
    });
});

    // ========== EMAIL JS ==========
    document.addEventListener("DOMContentLoaded", () => {
        const contactForm = document.getElementById("contactForm");

        // Ensure EmailJS is initialized once DOM is ready
        emailjs.init("W2YSRyqhhCt5N8kVj");

        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();

            // Collect form data into an object
            const formData = new FormData(contactForm);
            const formObject = Object.fromEntries(formData);

            // Debugging: Log form data for verification
            console.log("Form Data Sent to EmailJS:", formObject);

            // Send email using EmailJS
            emailjs
                .send("service_9fhnu4c", "template_0h7vmqw", formObject)
                .then(
                    (response) => {
                        console.log("Email sent successfully:", response.status, response.text);
                        alert("Your message has been sent successfully! The page will now refresh.");

                        contactForm.reset(); // Reset form fields

                        // Refresh the page
                        setTimeout(() => {
                            location.reload();
                        }, 0);
                    },
                    (error) => {
                        console.error("Failed to send email:", error);
                        alert("There was an error sending your message. Please try again.");
                    }
                );
        });
    });
