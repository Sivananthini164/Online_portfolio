function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// script.js
document.addEventListener('DOMContentLoaded', () => {
  const progressBars = document.querySelectorAll('.progress');
  progressBars.forEach(bar => {
    const progress = bar.getAttribute('data-progress');
    bar.style.width = `${progress}%`;
  });
});

