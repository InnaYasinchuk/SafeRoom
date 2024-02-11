"use strict";

// ANIMATION
AOS.init({
  mirror: false,
  once: true
}); // BURGER MENU

var menu = document.querySelector('.nav-wrapper');
var menuBtn = document.querySelector('.menu-burger');
var body = document.body;

if (menu && menuBtn) {
  menuBtn.addEventListener('click', function () {
    menu.classList.toggle('active');
    menuBtn.classList.toggle('active');
    body.classList.toggle('lock');
  });
} // SWIPER JOIN


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
      slide.classList.add("swiper-slide-active");
    } else {
      slide.classList.remove("swiper-slide-active");
    }
  });
}

joinSwiper.on("click", function () {
  var clickedSlide = joinSwiper.clickedIndex;

  if (clickedSlide !== undefined) {
    joinSwiper.slideTo(clickedSlide);
    setActiveSlide(clickedSlide);
  }
});
joinSwiper.on("slideChange", function () {
  var activeIndex = joinSwiper.activeIndex;
  setActiveSlide(activeIndex);
}); // SWIPER REVIEWS

var reviewsSwiper = new Swiper("#reviewsSwiper", {
  slidesPerView: 3,
  spaceBetween: 18,
  loop: true,
  speed: 2000,
  slideToClickedSlide: true,
  centeredSlides: true,
  centeredSlidesBounds: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true // dynamicMainBullets: 3,

  }
}); // FAQ

var accordionTitle = document.querySelectorAll(".accordion-item-title");
accordionTitle.forEach(function (el, index) {
  el.addEventListener("click", function () {
    var accordionContent = el.nextElementSibling;
    var faqClose = document.querySelectorAll(".faq-close")[index];

    if (accordionContent.style.maxHeight) {
      document.querySelectorAll(".accordion-item-content").forEach(function (el) {
        el.style.maxHeight = null;
        el.style.marginTop = "0px";
      });
      document.querySelectorAll(".faq-close").forEach(function (el) {
        el.style.transform = "rotate(0deg)";
        el.style.fill = "#007AFF";
      });
    } else {
      document.querySelectorAll(".accordion-item-content").forEach(function (el) {
        el.style.maxHeight = null;
        el.style.marginTop = "0px";
      });
      document.querySelectorAll(".faq-close").forEach(function (el) {
        el.style.transform = "rotate(0deg)";
        el.style.fill = "#007AFF";
      });
      accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
      accordionContent.style.marginTop = "20px";
      faqClose.style.transform = "rotate(45deg)";
      faqClose.style.fill = "#F0BB75";
    }
  });
});