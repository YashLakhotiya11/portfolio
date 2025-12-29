/* SCROLL REVEAL */
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      section.classList.add("active");
    }
  });

  animateSkills();
});

/* SKILL BAR */
function animateSkills() {
  document.querySelectorAll(".bar div").forEach(bar => {
    bar.style.width = bar.dataset.progress + "%";
  });
}
