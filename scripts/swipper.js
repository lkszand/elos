// import Swiper from "swiper";
// import "swiper/swiper-bundle.css";

const containerSlide = document.querySelector(".swiper-container");
console.log(containerSlide);
document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".swiper-container", {
    loop: true,
  });
});
