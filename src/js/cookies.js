const cookiesButton = document.querySelector(".cookies-button");

cookiesButton.addEventListener("click", () => {
  const wrapper = document.querySelector(".cookies-wrapper"); // move it to line 2
  wrapper.style.display = "none"; // don't use style in JS, toggle class in JS then add styles in css, e.g addClass("hidden") and then in
  // css on class hidden add display: none
});
