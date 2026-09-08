// Tiny retro touches. No libraries, no tracking.

document.getElementById("year").textContent = new Date().getFullYear();

function updateClock() {
  const now = new Date();

  const time = now.toLocaleTimeString("en-GB", {
    hour12: false
  });

  document.getElementById("clock").textContent = time;
}

updateClock();
setInterval(updateClock, 1000);

// Short terminal-style boot effect.
const bootLines = document.querySelectorAll("#boot p");

bootLines.forEach((line, index) => {
  line.style.opacity = "0";

  setTimeout(() => {
    line.style.opacity = "1";
  }, index * 180);
});