const bullet = document.querySelectorAll(".bullet");
const hero = document.querySelector(".hero");
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");

leftArrow.addEventListener("click", () => {
  let scroll = window.innerWidth; // why not const
  hero.scrollLeft += -scroll;
  let bulletNumber = Math.round( 
    (hero.scrollLeft - window.innerWidth) / window.innerWidth
  ); //why not const
  if (bulletNumber >= 0 && bulletNumber <= 3) {
    bullet.forEach((el) => (el.style.backgroundColor = "#eee")); // again, dont use style, add class and then change style in css
    bullet[
      Math.round((hero.scrollLeft - window.innerWidth) / window.innerWidth)
    ].style.backgroundColor = "#DEAC28"; // again, dont use style, add class and then change style in css
  } else console.log(bulletNumber); // why console.log
});

// same stuff for rest of lines (classes, const, console logs)

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
