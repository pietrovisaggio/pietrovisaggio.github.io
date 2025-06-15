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
      if (iconSpan) iconSpan.textContent = "🌙"; 
      // Show moon icon when in light mode so user can switch back to dark.
    } else {
      root.classList.add("dark-mode");
      root.classList.remove("light-mode");
      if (iconSpan) iconSpan.textContent = "☀️"; 
      // Show sun icon when in dark mode so user can switch to light.
    }
  }

  // On load: check localStorage; if none, force dark mode
  const saved = localStorage.getItem(storageKey);
  if (saved === "light" || saved === "dark") {
    applyTheme(saved);
  } else {
    // Force dark mode as default, regardless of system preference
    applyTheme("dark");
  }

  toggleButton.addEventListener("click", function() {
    const isLight = root.classList.contains("light-mode");
    const newTheme = isLight ? "dark" : "light";
    applyTheme(newTheme);
    localStorage.setItem(storageKey, newTheme);
  });
});