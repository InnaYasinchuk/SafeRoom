// ANIMATION

AOS.init({
  mirror: false,
  once: true,
});

// BURGER MENU

const menu = document.querySelector(".nav-wrapper");
const menuBtn = document.querySelector(".menu-burger");
const navBtn = document.querySelector("#nav-button");

const body = document.body;

if (menu && menuBtn) {
  menuBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
    menuBtn.classList.toggle("active");
    body.classList.toggle("lock");
  });
}

menu.querySelectorAll(".menu-item").forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("active");
    menuBtn.classList.remove("active");
    body.classList.remove("lock");
  });
});

navBtn.addEventListener("click", () => {
  menu.classList.remove("active");
  menuBtn.classList.remove("active");
  body.classList.remove("lock");
});


// SWIPER JOIN DESKTOP

const joinSwiper = new Swiper("#joinSwiper", {
  slidesPerView: 3,
  spaceBetween: 11,
  loop: true,
  speed: 0,
  slideToClickedSlide: true,
  centeredSlides: true,
  centeredSlidesBounds: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    // dynamicBullets: true,
    // dynamicMainBullets: 3,
  },
  allowTouchMove: false,
});

function setActiveSlide(index) {
  joinSwiper.slides.forEach((slide, i) => {
    if (i === index) {
      slide.classList.add("swiper-slide-active");
    } else {
      slide.classList.remove("swiper-slide-active");
    }
  });
}

joinSwiper.on("click", function () {
  const clickedSlide = joinSwiper.clickedIndex;

  if (clickedSlide !== undefined) {
    joinSwiper.slideTo(clickedSlide);
    setActiveSlide(clickedSlide);
  }
});

joinSwiper.on("slideChange", function () {
  const activeIndex = joinSwiper.activeIndex;
  setActiveSlide(activeIndex);
});


// SWIPER JOIN MOBILE

const joinSwiperMobile = new Swiper("#joinSwiperMobile", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  speed: 2000,
  slideToClickedSlide: true,
  centeredSlides: true,
  centeredSlidesBounds: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    420: {
      slidesPerView: 1.5,
      spaceBetween: 15,
    },
    575: {
      slidesPerView: 2,
      spaceBetween: 25,
    },
  },
});


// SWIPER REVIEWS

const reviewsSwiper = new Swiper("#reviewsSwiper", {
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
    dynamicBullets: true,
    // dynamicMainBullets: 3,
  },
});

// FAQ

let accordionTitle = document.querySelectorAll(".accordion-item-title");

accordionTitle.forEach((el, index) => {
  el.addEventListener("click", () => {
    let accordionContent = el.nextElementSibling;
    let faqClose = document.querySelectorAll(".faq-close")[index];

    if (accordionContent.style.maxHeight) {
      document.querySelectorAll(".accordion-item-content").forEach((el) => {
        el.style.maxHeight = null;
        el.style.marginTop = "0px";
      });
      document.querySelectorAll(".faq-close").forEach((el) => {
        el.style.transform = "rotate(0deg)";
        el.style.fill = "#007AFF";
      });
    } else {
      document.querySelectorAll(".accordion-item-content").forEach((el) => {
        el.style.maxHeight = null;
        el.style.marginTop = "0px";
      });
      document.querySelectorAll(".faq-close").forEach((el) => {
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
