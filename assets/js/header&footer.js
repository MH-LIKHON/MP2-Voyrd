// JavaScript to control FAQ answer display
function showFaqAnswer(selectedValue) {
    // Hide all answers
    document.querySelectorAll('.faq-answer').forEach(el => el.classList.add('d-none'));
    
    // Show selected answer
    const answer = document.querySelector(`.faq-answer[data-faq="${selectedValue}"]`);
    if (answer) {
        answer.classList.remove('d-none');
    }
}

// Initialize with the first answer visible
document.addEventListener("DOMContentLoaded", function() {
    showFaqAnswer(document.getElementById("faqDropdown").value);
});
