// ==========================================================
// ADRIAN.EXE
// Portfolio interactions
// No libraries. No tracking.
// ==========================================================


// ----------------------------------------------------------
// CURRENT YEAR
// ----------------------------------------------------------

const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}


// ----------------------------------------------------------
// TERMINAL CLOCK
// ----------------------------------------------------------

const clockElement = document.getElementById("clock");

function updateClock() {

  if (!clockElement) {
    return;
  }

  const now = new Date();

  const time = now.toLocaleTimeString("en-GB", {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  });

  clockElement.textContent = time;
}

updateClock();

setInterval(updateClock, 1000);


// ----------------------------------------------------------
// BOOT SEQUENCE
// ----------------------------------------------------------

const bootLines = document.querySelectorAll("#boot p");

bootLines.forEach((line, index) => {

  line.style.opacity = "0";
  line.style.transform = "translateX(-4px)";

  setTimeout(() => {

    line.style.opacity = "1";
    line.style.transform = "translateX(0)";

  }, index * 140);

});


// ----------------------------------------------------------
// EXTERNAL LINKS
// ----------------------------------------------------------

// Security fallback for every link that opens a new tab.

document
  .querySelectorAll('a[target="_blank"]')
  .forEach((link) => {

    link.setAttribute(
      "rel",
      "noopener noreferrer"
    );

  });


// ----------------------------------------------------------
// TERMINAL HOVER EFFECT
// ----------------------------------------------------------

const interactiveCards = document.querySelectorAll(
  ".stack-card, .capability, .feature"
);

interactiveCards.forEach((card) => {

  card.addEventListener("mouseenter", () => {

    card.dataset.active = "true";

  });

  card.addEventListener("mouseleave", () => {

    delete card.dataset.active;

  });

});


// ----------------------------------------------------------
// CONSOLE MESSAGE
// ----------------------------------------------------------

console.log(
  "%cADRIAN.EXE",
  "color: #7cff6b; font-size: 20px; font-weight: bold;"
);

console.log(
  "%cBackend Software Developer | Java | Spring Boot | Android",
  "color: #48b83e;"
);