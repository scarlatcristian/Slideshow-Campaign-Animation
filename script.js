"use strict";

const btnNext = document.querySelectorAll(".next-step");
const btnPrev = document.querySelectorAll(".prev-question");
const helpPage = document.querySelector(".how-we-help");

btnPrev.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    if (index === 0) {
      helpPage.classList.remove("invisible-left");

      document
        .querySelector(`.page-${index + 1}`)
        .classList.add("invisible-right");

      return;
    }

    document.querySelector(`.page-${index}`).classList.remove("invisible-left");
    document
      .querySelector(`.page-${index + 1}`)
      .classList.add("invisible-right");
  });
});

btnNext.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    if (index !== 17) {
      console.log(index);
      document
        .querySelector(`.page-${index + 3}`)
        .classList.remove("invisible-right");

      document
        .querySelector(`.page-${index + 2}`)
        .classList.add("invisible-left");
    }
  });
});
