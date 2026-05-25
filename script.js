// Theme: respect saved pref, else system, else light
(function () {
  const saved = localStorage.getItem("theme");
  const sys = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  const initial = saved || sys;
  document.documentElement.setAttribute("data-theme", initial);
})();

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("theme-toggle");
  toggle?.addEventListener("click", () => {
    const cur = document.documentElement.getAttribute("data-theme");
    const next = cur === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  });

  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  // Reveal on scroll
  const targets = document.querySelectorAll(".section, .hero");
  targets.forEach(t => t.classList.add("fade-up"));
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add("is-visible");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.08 });
    targets.forEach(t => io.observe(t));
  } else {
    targets.forEach(t => t.classList.add("is-visible"));
  }
});
