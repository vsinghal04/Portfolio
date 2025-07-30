// Smooth Scroll for internal anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Typing animation in Hero section
const text = "Full Stack Developer passionate about clean, efficient code.";
let index = 0;
const speed = 50;
function typeEffect() {
  const target = document.querySelector("#hero p");
  if (target && index < text.length) {
    target.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, speed);
  }
}
window.addEventListener("DOMContentLoaded", typeEffect);

// Fade-in on scroll for sections
const sections = document.querySelectorAll("section");
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
      }
    });
  },
  { threshold: 0.1 }
);
sections.forEach(section => observer.observe(section));
