const bullet = document.querySelectorAll(".bullet");
const hero = document.querySelector(".hero");
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");

leftArrow.addEventListener("click", () => {
  let scroll = window.innerWidth;
  hero.scrollLeft += -scroll;
  let bulletNumber = Math.round(
    (hero.scrollLeft - window.innerWidth) / window.innerWidth
  );
  if (bulletNumber >= 0 && bulletNumber <= 3) {
    bullet.forEach((el) => (el.style.backgroundColor = "#eee"));
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
    bullet.forEach((el) => (el.style.backgroundColor = "#eee"));
    bullet[
      Math.round((hero.scrollLeft + window.innerWidth) / window.innerWidth)
    ].style.backgroundColor = "#DEAC28";
  } else console.log(bulletNumber);
});

bullet.forEach((el, index) => {
  el.addEventListener("click", () => {
    let scroll = window.innerWidth;
    hero.scrollLeft = index * scroll;
    bullet.forEach((el) => (el.style.backgroundColor = "#eee"));
    el.style.backgroundColor = "#DEAC28";
  });
});
