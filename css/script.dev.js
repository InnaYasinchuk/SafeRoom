"use strict";

var joinSwiper = new Swiper("#joinSwiper", {
  slidesPerView: 3,
  spaceBetween: 11,
  loop: true,
  speed: 0,
  slideToClickedSlide: true,
  centeredSlides: true,
  centeredSlidesBounds: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true // dynamicBullets: true,
    // dynamicMainBullets: 3,

  },
  allowTouchMove: false
});

function setActiveSlide(index) {
  joinSwiper.slides.forEach(function (slide, i) {
    if (i === index) {
      slide.classList.add('swiper-slide-active');
    } else {
      slide.classList.remove('swiper-slide-active');
    }
  });
}

joinSwiper.on('click', function () {
  var clickedSlide = joinSwiper.clickedIndex;

  if (clickedSlide !== undefined) {
    joinSwiper.slideTo(clickedSlide);
    setActiveSlide(clickedSlide);
  }
});
joinSwiper.on('slideChange', function () {
  var activeIndex = joinSwiper.activeIndex;
  setActiveSlide(activeIndex);
});