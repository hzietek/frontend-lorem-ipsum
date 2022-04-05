const placeholder = document.querySelectorAll(".placeholder");
const placeholderArrow = document.querySelectorAll(".placeholder-arrow");
const arrowPath = document.querySelectorAll(".arrow-path");

placeholder.forEach((el, index) => {
  el.addEventListener("mouseover", () => {
    let transform = el.querySelector(".transform");
    let img = el.querySelector("img");
    img.classList.add("hover");
    transform.classList.add("hover");
    placeholderArrow[index].style.backgroundColor = "#323232";
    arrowPath[index].style.fill = "#fff";
  });

  el.addEventListener("mouseout", () => {
    let transform = el.querySelector(".transform");
    let img = el.querySelector("img");
    img.classList.remove("hover");
    transform.classList.remove("hover");
    placeholderArrow[index].style.backgroundColor = "#fff";
    arrowPath[index].style.fill = "#323232";
  });
});
