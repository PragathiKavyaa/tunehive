//faq
document.addEventListener("DOMContentLoaded", function () {

    const faqButtons = document.querySelectorAll(".faq-btn");

    faqButtons.forEach(button => {

        button.addEventListener("click", function () {

            const content = this.nextElementSibling;

            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }

        });

    });

});
