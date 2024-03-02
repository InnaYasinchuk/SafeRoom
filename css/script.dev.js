"use strict";

// ANIMATION
AOS.init({
  mirror: false,
  once: true
}); // BURGER MENU

var menu = document.querySelector(".nav-wrapper");
var menuBtn = document.querySelector(".menu-burger");
var navBtn = document.querySelector("#nav-button");
var body = document.body;

if (menu && menuBtn) {
  menuBtn.addEventListener("click", function () {
    menu.classList.toggle("active");
    menuBtn.classList.toggle("active");
    body.classList.toggle("lock");
  });
}

menu.querySelectorAll(".menu-item").forEach(function (link) {
  link.addEventListener("click", function () {
    menu.classList.remove("active");
    menuBtn.classList.remove("active");
    body.classList.remove("lock");
  });
});
navBtn.addEventListener("click", function () {
  menu.classList.remove("active");
  menuBtn.classList.remove("active");
  body.classList.remove("lock");
}); // SWIPER JOIN DESKTOP

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
}); // SWIPER JOIN MOBILE

var joinSwiperMobile = new Swiper("#joinSwiperMobile", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  speed: 3000,
  slideToClickedSlide: true,
  centeredSlides: true,
  centeredSlidesBounds: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  breakpoints: {
    360: {
      slidesPerView: 1.2,
      spaceBetween: 12
    },
    400: {
      slidesPerView: 1.3,
      spaceBetween: 15
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 25
    }
  }
}); // SWIPER REVIEWS

var reviewsSwiper = new Swiper("#reviewsSwiper", {
  slidesPerView: 1.24,
  spaceBetween: 10,
  loop: true,
  speed: 3000,
  slideToClickedSlide: true,
  centeredSlides: true,
  centeredSlidesBounds: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true // dynamicMainBullets: 3,

  },
  breakpoints: {
    360: {
      slidesPerView: 1.4,
      spaceBetween: 10
    },
    410: {
      slidesPerView: 1.5,
      spaceBetween: 15
    },
    470: {
      slidesPerView: 1.6,
      spaceBetween: 15
    },
    510: {
      slidesPerView: 1.9,
      spaceBetween: 15
    },
    655: {
      slidesPerView: 2,
      spaceBetween: 15
    },
    860: {
      slidesPerView: 2.5,
      spaceBetween: 18
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 18
    }
  }
}); // FAQ

var accordionTitle = document.querySelectorAll(".accordion-item-title");
accordionTitle.forEach(function (el, index) {
  el.addEventListener("click", function () {
    var accordionContent = el.nextElementSibling;
    var faqClose = document.querySelectorAll(".faq-close")[index];
    var windowWidth = window.innerWidth;

    if (accordionContent.style.maxHeight) {
      document.querySelectorAll(".accordion-item-content").forEach(function (el) {
        el.style.maxHeight = null;
        el.style.marginTop = "0px";
      });
      document.querySelectorAll(".faq-close").forEach(function (el) {
        el.style.transform = "scale(".concat(getScaleValueFaqClose(windowWidth), ") rotate(0deg)");
        el.style.fill = "#007AFF";
      });
    } else {
      document.querySelectorAll(".accordion-item-content").forEach(function (el) {
        el.style.maxHeight = null;
        el.style.marginTop = "0px";
      });
      document.querySelectorAll(".faq-close").forEach(function (el) {
        el.style.transform = "scale(".concat(getScaleValueFaqClose(windowWidth), ") rotate(0deg)");
        el.style.fill = "#007AFF";
      });
      accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
      accordionContent.style.marginTop = "".concat(getMarginTopValue(windowWidth), "px");
      faqClose.style.transform = "scale(".concat(getScaleValueFaqClose(windowWidth), ") rotate(45deg)");
      faqClose.style.fill = "#F0BB75";
    }
  });
});

function getScaleValueFaqClose(width) {
  if (width <= 389.98) {
    return 0.45;
  } else if (width > 389.98 && width <= 575.98) {
    return 0.5;
  } else if (width > 575.98 && width <= 767.98) {
    return 0.6;
  } else if (width > 767.98 && width <= 991.98) {
    return 0.8;
  } else {
    return 1;
  }
}

function getMarginTopValue(width) {
  if (width <= 389.98) {
    return 5;
  } else if (width > 389.98 && width <= 575.98) {
    return 8;
  } else if (width > 575.98 && width <= 767.98) {
    return 10;
  } else if (width > 767.98 && width <= 991.98) {
    return 15;
  } else {
    return 20;
  }
}