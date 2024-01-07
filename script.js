const swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  spaceBetween: -7,
  loop: true,
  speed: 2500,
  grabCursor: true,
  slideToClickedSlide: true,
  centeredSlides: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: "true",
    dynamicBullets: "true",
  },

  autoplay: {
    delay: 3500,
  },

  coverflowEffect: {},
});
