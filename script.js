document.addEventListener("DOMContentLoaded", () => {
    setCurrentYear();
    enableLanguageSwitch();
    enableRevealAnimations();
});

function setCurrentYear() {
    const year = document.getElementById("year");
    if (year) year.textContent = new Date().getFullYear();
}

function enableLanguageSwitch() {
    const buttons = document.querySelectorAll("[data-language]");
    const translatedElements = document.querySelectorAll("[data-en][data-es]");
    let savedLanguage = "en";

    try { savedLanguage = localStorage.getItem("portfolio-language") || "en"; }
    catch (_) { /* The page works when storage is unavailable. */ }

    const setLanguage = (language) => {
        const selectedLanguage = language === "es" ? "es" : "en";
        document.documentElement.lang = selectedLanguage;
        document.title = document.body.dataset[selectedLanguage === "es" ? "titleEs" : "titleEn"] || document.title;

        translatedElements.forEach((element) => { element.textContent = element.dataset[selectedLanguage]; });
        buttons.forEach((button) => {
            const isActive = button.dataset.language === selectedLanguage;
            button.classList.toggle("active", isActive);
            button.setAttribute("aria-pressed", String(isActive));
        });

        try { localStorage.setItem("portfolio-language", selectedLanguage); }
        catch (_) { /* Language switching does not depend on storage. */ }
    };

    buttons.forEach((button) => button.addEventListener("click", () => setLanguage(button.dataset.language)));
    setLanguage(savedLanguage);
}

function enableRevealAnimations() {
    const elements = document.querySelectorAll(".section");
    if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    elements.forEach((element) => element.classList.add("reveal"));
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        });
    }, { threshold: 0.08 });

    elements.forEach((element) => observer.observe(element));
}
