const picture = document.querySelectorAll(".picture");
const background = document.querySelectorAll(".background");

picture.forEach((el, index) => {
  el.addEventListener("mouseover", () => {
    background[index].style.transform = "scale(1.1)";
  });
  el.addEventListener("mouseout", () => {
    background[index].style.transform = "none";
  });
});
