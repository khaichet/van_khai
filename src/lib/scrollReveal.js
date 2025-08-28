// scrollReveal.js
document.addEventListener("scroll", () => {
  const reveals = document.querySelectorAll(".reveal");
  for (const el of reveals) {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 80) {
      el.classList.add("show");
    }
  }
});
