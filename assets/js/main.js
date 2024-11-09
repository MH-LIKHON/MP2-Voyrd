document.addEventListener("DOMContentLoaded", function () {
    const seeMoreBtn = document.querySelector(".see-more-btn");
    const hiddenFaqs = document.querySelectorAll(".faq.hidden");

    seeMoreBtn.addEventListener("click", function () {
        hiddenFaqs.forEach(faq => faq.classList.remove("hidden"));
        seeMoreBtn.textContent = seeMoreBtn.textContent === "See More" ? "See Less" : "See More";
    });

    const faqs = document.querySelectorAll(".faq");
    faqs.forEach(faq => {
        faq.querySelector(".faq-question").addEventListener("click", function () {
            const answer = faq.querySelector(".faq-answer");
            answer.style.display = answer.style.display === "block" ? "none" : "block";
        });
    });
});
