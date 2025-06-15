// assets/js/theme-toggle.js
document.addEventListener("DOMContentLoaded", function() {
  const toggleButton = document.getElementById("theme-toggle");
  if (!toggleButton) return;
  const iconSpan = toggleButton.querySelector(".icon");
  const root = document.documentElement;
  const storageKey = "theme-preference";

    function applyTheme(theme) {
    if (theme === "light") {
        root.classList.add("light-mode");
        root.classList.remove("dark-mode");
        if (iconSpan) iconSpan.textContent = "☀️"; // show sun icon to switch back to dark?
        // or keep as "🌙" if you want opposite semantics
    } else {
        root.classList.add("dark-mode");
        root.classList.remove("light-mode");
        if (iconSpan) iconSpan.textContent = "🌙"; // show moon icon even in dark?
        // but typically you want "☀️" here so clicking yields light.
    }
    }

  // On load: check localStorage, else system preference
  const saved = localStorage.getItem(storageKey);
  if (saved === "light" || saved === "dark") {
    applyTheme(saved);
  } else {
    const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
    applyTheme(prefersLight ? "light" : "dark");
  }

  toggleButton.addEventListener("click", function() {
    const isLight = root.classList.contains("light-mode");
    const newTheme = isLight ? "dark" : "light";
    applyTheme(newTheme);
    localStorage.setItem(storageKey, newTheme);
  });
});