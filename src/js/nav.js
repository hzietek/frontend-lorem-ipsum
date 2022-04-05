let prevScrollPosition = window.pageYOffset;
const nav = document.querySelector("nav");
const langFirst = document.querySelector(".lang-first");
const langOptions = document.querySelectorAll(".lang-item");
const products = document.querySelectorAll(".products");
const dropdownMenu = document.querySelectorAll(".dropdown-menu");

nav.addEventListener("mouseleave", () => {
  dropdownMenu[0].style.display = "none";
  dropdownMenu[1].style.display = "none";
  langOptions.forEach((el) => {
    el.style.display = "none";
  });
});

window.onscroll = function () {
  let currentScrollPosition = window.pageYOffset;
  if (prevScrollPosition >= currentScrollPosition) {
    document.getElementsByClassName("topbar-black")[0].style.top = "0";
    nav.style.top = "40px";
  } else {
    document.getElementsByClassName("topbar-black")[0].style.top = "-40px";
    nav.style.top = "-80px";
    dropdownMenu[0].style.display = "none";
    dropdownMenu[1].style.display = "none";
    langOptions.forEach((el) => {
      el.style.display = "none";
    });
  }
  prevScrollPosition = currentScrollPosition;
};

langFirst.addEventListener("mouseover", () => {
  if (langOptions[0].style.display === "none") {
    langOptions.forEach((el) => {
      el.style.display = "flex";
    });
  } else
    langOptions.forEach((el) => {
      el.style.display = "none";
    });
});

products.forEach((el, index) => {
  el.addEventListener("mouseover", () => {
    dropdownMenu[index].style.display = "block";
  });
});
