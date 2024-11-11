$(document).ready(function() {
    // ========== FAQ Answer Display ==========

    /**
     * Displays the answer associated with the selected FAQ question.
     * @param {string} selectedValue - The identifier of the selected FAQ item.
     */
    function showFaqAnswer(selectedValue) {
        // Hide all FAQ answers and show only the selected one
        $('.faq-answer').addClass('d-none');
        $(`.faq-answer[data-faq="${selectedValue}"]`).removeClass('d-none');
    }

    // Initialize FAQ display with the first answer visible on page load
    const $faqDropdown = $('#faqDropdown');
    if ($faqDropdown.length) {
        showFaqAnswer($faqDropdown.val()); // Display initial FAQ answer
        $faqDropdown.on('change', function() {
            showFaqAnswer($(this).val());
        });
    } else {
        console.error("FAQ dropdown not found.");
    }

    // ========== Contact Form Submission and Success Modal ==========

    const $contactForm = $('#contactForm');
    const $successModal = $('#successModal');
    const $closeModalButton = $('.close-btn');

    // Ensure the modal is hidden initially
    $successModal.hide();

    if ($contactForm.length) {
        // Handle form submission
        $contactForm.on('submit', function(event) {
            event.preventDefault(); // Prevent page reload

            // Show the success modal
            $successModal.fadeIn();

            // Reset the form fields after submission
            $contactForm[0].reset();
        });
    } else {
        console.error("Contact form not found!");
    }

    if ($closeModalButton.length) {
        // Close modal when close button is clicked
        $closeModalButton.on('click', function() {
            $successModal.fadeOut();
        });
    } else {
        console.error("Close button not found in the modal.");
    }

    // Close the modal if the user clicks outside the modal content
    $(window).on('click', function(event) {
        if ($(event.target).is($successModal)) {
            $successModal.fadeOut();
        }
    });
});
