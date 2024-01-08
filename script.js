const swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  spaceBetween: -7,
  loop: true,
  speed: 1000,
  // grabCursor: true,
  slideToClickedSlide: true,
  centeredSlides: true,
  centeredSlidesBounds: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
    dynamicMainBullets: 3,
  },
  allowTouchMove: false, 

  // autoplay: {
  //   delay: 3500,
  // },

  // coverflowEffect: {},

  
});
