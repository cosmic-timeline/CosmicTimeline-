document.addEventListener("DOMContentLoaded", function () {
    // Header background change on scroll
    window.addEventListener("scroll", function () {
        let header = document.querySelector("header");
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

    // Scroll animations for elements
    function revealOnScroll() {
        let elements = document.querySelectorAll(".scroll-animate");
        let windowHeight = window.innerHeight;

        elements.forEach(function (element) {
            let position = element.getBoundingClientRect().top;

            if (position < windowHeight - 50) {
                element.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Run once on load
});
