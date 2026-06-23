const themeToggle = document.getElementById("theme-toggle");
const themeIcon = themeToggle?.querySelector("i");

function setTheme(theme) {
  document.documentElement.classList.add("no-transitions");
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);

  if (themeIcon) {
    themeIcon.className = theme === "dark" ? "fas fa-sun fa-fw" : "fas fa-moon fa-fw";
  }

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      document.documentElement.classList.remove("no-transitions");
    });
  });
}

if (themeToggle) {
  const currentTheme = document.documentElement.getAttribute("data-theme") || "light";
  setTheme(currentTheme);

  themeToggle.addEventListener("click", (e) => {
    e.preventDefault();
    const nextTheme = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    setTheme(nextTheme);
  });
}

let progressSpans = document.querySelectorAll(".the-progress span");
let section = document.querySelector(".our-skills");

let nums = document.querySelectorAll(".stats .number");
let statsSection = document.querySelector(".stats");
let started = false;

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop - 250) {
    progressSpans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }

  if (window.scrollY >= statsSection.offsetTop - 250) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
};

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}
