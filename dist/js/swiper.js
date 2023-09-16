import Swiper from "swiper/bundle";

import "swiper/swiper-bundle.css";

const swiper = new Swiper(".swiper-container", {
  //   speed: 400,
  //   spaceBetween: 100,
});

const swiperElem = document.querySelector(".swiper-container").swiper;

swiperElem.slideNext();
