const slides = document.querySelectorAll(".slider__card");
const slidesCount = slides.length - 1;
let currentSlideIndex = 0;
let currentSlide = slides[currentSlideIndex];

const prevArrow = document.querySelector(".slider__controls__arrow_left");
const nextArrow = document.querySelector(".slider__controls__arrow_right");

const slidesCountElement = document.querySelector("#slider__slides-count");
let currentSlideElement = document.querySelector("#slider__current-slide");

slidesCountElement.innerHTML = slides.length;
currentSlideElement.innerHTML = 1;

const switchSlide = (direction) => {
  currentSlide.classList.remove("slider__card_current");

  if (direction === "next") {
    currentSlideIndex < slidesCount
      ? (currentSlideIndex += 1)
      : (currentSlideIndex = 0);
  } else {
    currentSlideIndex > 0
      ? (currentSlideIndex -= 1)
      : (currentSlideIndex = slidesCount);
  }

  currentSlide = slides[currentSlideIndex];
  currentSlide.classList.add("slider__card_current");
  currentSlideElement.innerHTML = currentSlideIndex + 1;
};

prevArrow.addEventListener("click", () => {
  switchSlide("prev");
});
nextArrow.addEventListener("click", () => {
  switchSlide("next");
});
