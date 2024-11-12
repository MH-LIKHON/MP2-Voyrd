$(document).ready(function() {
    // ========== FAQ Answer Display ==========
    function showFaqAnswer(selectedValue) {
        $('.faq-answer').addClass('d-none');
        $(`.faq-answer[data-faq="${selectedValue}"]`).removeClass('d-none');
    }

    const $faqDropdown = $('#faqDropdown');
    if ($faqDropdown.length) {
        showFaqAnswer($faqDropdown.val());
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

    // Ensure the modal is hidden on page load
    $successModal.hide();

    // Handle form submission
    if ($contactForm.length) {
        $contactForm.on('submit', function(event) {
            event.preventDefault(); // Prevent page reload

            console.log("Form submitted. Showing success modal...");
            $successModal.fadeIn(); // Show success modal

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
