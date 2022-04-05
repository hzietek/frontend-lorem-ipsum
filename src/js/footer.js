const footerArrow = document.querySelector(".footer-arrow");

footerArrow.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
