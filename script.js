/* =========================================================
   ADRIÁN PÉREZ COBO — PORTFOLIO
========================================================= */


document.addEventListener("DOMContentLoaded", () => {

    setCurrentYear();

    enableRevealAnimations();

});


/* =========================================================
   CURRENT YEAR
========================================================= */

function setCurrentYear() {

    const yearElement = document.getElementById("year");

    if (!yearElement) {
        return;
    }

    yearElement.textContent = new Date().getFullYear();

}


/* =========================================================
   SCROLL REVEAL
========================================================= */

function enableRevealAnimations() {

    const elements = document.querySelectorAll(
        ".section, .connect"
    );


    elements.forEach(element => {

        element.classList.add("reveal");

    });


    const observer = new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) {
                    return;
                }

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            });

        },

        {
            threshold: 0.08
        }

    );


    elements.forEach(element => {

        observer.observe(element);

    });

}