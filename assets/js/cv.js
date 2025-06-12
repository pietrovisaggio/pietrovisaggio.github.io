/* assets/js/cv.js */
document.addEventListener("scroll", () => {
  const pos = window.scrollY + 140;          // header offset
  document.querySelectorAll(".cv-nav a").forEach(link => {
    const sec = document.querySelector(link.hash);
    if (sec && sec.offsetTop <= pos && sec.offsetTop + sec.offsetHeight > pos) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});