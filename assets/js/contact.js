document.addEventListener("DOMContentLoaded", function() {
    const faqDropdown = document.getElementById("faqDropdown");
    const faqAnswerBox = document.getElementById("faqAnswer");

    // FAQ answers stored as key-value pairs
    const faqAnswers = {
        "1": "Voyrd is a platform offering a range of travel booking services, including hotels, flights, car rentals, and more, helping travelers explore the United Kingdom and beyond.",
        "2": "Voyrd provides services for booking hotels, flights, car rentals, and other travel-related services to make your journey convenient and enjoyable.",
        "3": "Simply use the Voyrd platform to search for your desired travel service, choose from available options, and proceed with the booking process online.",
        "4": "Yes, Voyrd offers a mobile app for easy access to booking services, travel planning, and managing reservations on the go.",
        "5": "Yes, Voyrd provides transparent pricing and cost estimates based on your selected options and travel dates before you confirm your booking.",
        "6": "Voyrd allows both immediate bookings and advanced reservations, giving you flexibility to plan your travels according to your schedule.",
        "7": "Yes, Voyrd provides options to cancel or modify bookings based on the terms and conditions of the chosen service provider.",
        "8": "Yes, all operators associated with Voyrd are licensed professionals trained to provide quality service.",
        "9": "Voyrd is committed to transparent pricing. Any applicable fees or charges will be clearly outlined during the booking process.",
        "10": "If you anticipate a delay, please inform the provider as soon as possible to avoid potential additional charges.",
        "11": "Most services offer a complimentary waiting period. Check the terms of your booking for specifics.",
        "12": "Voyrd accepts various payment methods, including credit cards, debit cards, and digital payment options, for a seamless experience."
    };

    // Automatically display the answer for the first question on page load
    faqAnswerBox.textContent = faqAnswers[faqDropdown.value];

    // Listen for changes in the dropdown selection
    faqDropdown.addEventListener("change", function() {
        const selectedValue = faqDropdown.value;
        
        // Display the corresponding answer
        if (selectedValue && faqAnswers[selectedValue]) {
            faqAnswerBox.textContent = faqAnswers[selectedValue];
        } else {
            faqAnswerBox.textContent = ""; // Clear the answer box if no question is selected
        }
    });
});
