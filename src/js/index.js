let prevScrollpos = window.pageYOffset;
const bullet = document.querySelectorAll(".bullet");
const langFirst = document.querySelector(".lang-first");
const products = document.querySelectorAll(".products");
const nav = document.getElementsByTagName("nav")[0];
const hero = document.querySelector(".hero");
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");
const cookiesButton = document.querySelector(".cookies-button");
const placeholder = document.querySelectorAll(".placeholder");
const placeholderArrow = document.querySelectorAll(".placeholder-arrow");
const arrowPath = document.querySelectorAll(".arrow-path");
const langOptions = document.querySelectorAll(".lang-item");
const footerArrow = document.querySelector(".footer-arrow");
const dropdownMenu = document.querySelectorAll(".dropdown-menu")[0];
const dropdownMenu2 = document.querySelectorAll(".dropdown-menu")[1];
const picture = document.querySelectorAll(".picture");
const background = document.querySelectorAll(".background");
const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

for (let i = 0; i <= 2; i++) {
  picture[i].addEventListener("mouseover", () => {
    background[i].style.transform = "scale(1.1)";
  });
  picture[i].addEventListener("mouseout", () => {
    background[i].style.transform = "none";
  });
}

window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos >= currentScrollPos) {
    document.getElementsByClassName("topbar-black")[0].style.top = "0";
    nav.style.top = "40px";
  } else {
    document.getElementsByClassName("topbar-black")[0].style.top = "-40px";
    nav.style.top = "-80px";
    dropdownMenu.style.display = "none";
    dropdownMenu2.style.display = "none";
    for (let i = 0; i < 6; i++) {
      langOptions[i].style.display = "none";
    }
  }
  prevScrollpos = currentScrollPos;
};

langFirst.addEventListener("mouseover", () => {
  if (langOptions[0].style.display === "none") {
    for (let i = 0; i < 6; i++) {
      langOptions[i].style.display = "flex";
    }
  } else
    for (let i = 0; i < 6; i++) {
      langOptions[i].style.display = "none";
    }
});

products[0].addEventListener("mouseover", () => {
  dropdownMenu.style.display = "block";
});

products[1].addEventListener("mouseover", () => {
  dropdownMenu2.style.display = "block";
});

nav.addEventListener("mouseleave", () => {
  dropdownMenu.style.display = "none";
  dropdownMenu2.style.display = "none";
  for (let i = 0; i < 6; i++) {
    langOptions[i].style.display = "none";
  }
});

leftArrow.addEventListener("click", () => {
  let scroll = window.innerWidth;
  hero.scrollLeft += -scroll;
  let bulletNumber = Math.round(
    (hero.scrollLeft - window.innerWidth) / window.innerWidth
  );
  if (bulletNumber >= 0 && bulletNumber <= 3) {
    for (let i = 0; i <= 3; i++) {
      bullet[i].style.backgroundColor = "#eee";
    }
    bullet[
      Math.round((hero.scrollLeft - window.innerWidth) / window.innerWidth)
    ].style.backgroundColor = "#DEAC28";
  } else console.log(bulletNumber);
});

rightArrow.addEventListener("click", () => {
  let scroll = window.innerWidth;
  hero.scrollLeft += scroll;
  let bulletNumber = Math.round(
    (hero.scrollLeft + window.innerWidth) / window.innerWidth
  );
  if (bulletNumber >= 0 && bulletNumber <= 3) {
    for (let i = 0; i <= 3; i++) {
      bullet[i].style.backgroundColor = "#eee";
    }
    bullet[
      Math.round((hero.scrollLeft + window.innerWidth) / window.innerWidth)
    ].style.backgroundColor = "#DEAC28";
  } else console.log(bulletNumber);
});

cookiesButton.addEventListener("click", () => {
  const wrapper = document.querySelector(".cookies-wrapper");
  wrapper.style.display = "none";
});

for (let i = 0; i <= 2; i++) {
  placeholder[i].addEventListener("mouseover", () => {
    let transform = placeholder[i].querySelector(".transform");
    let img = placeholder[i].querySelector("img");
    img.classList.add("hover");
    transform.classList.add("hover");
  });

  placeholder[i].addEventListener("mouseout", () => {
    let transform = placeholder[i].querySelector(".transform");
    let img = placeholder[i].querySelector("img");
    img.classList.remove("hover");
    transform.classList.remove("hover");
  });
}

for (let i = 0; i <= 3; i++) {
  bullet[i].addEventListener("click", () => {
    let scroll = window.innerWidth;
    hero.scrollLeft = i * scroll;
    for (let i = 0; i <= 3; i++) {
      bullet[i].style.backgroundColor = "#eee";
    }
    bullet[i].style.backgroundColor = "#DEAC28";
    console.log(hero.scrollLeft);
  });
}

for (let i = 0; i <= 2; i++) {
  placeholder[i].addEventListener("mouseover", () => {
    placeholderArrow[i].style.backgroundColor = "#323232";
    arrowPath[i].style.fill = "#fff";
  });
  placeholder[i].addEventListener("mouseout", () => {
    placeholderArrow[i].style.backgroundColor = "#fff";
    arrowPath[i].style.fill = "#323232";
  });
}

footerArrow.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
