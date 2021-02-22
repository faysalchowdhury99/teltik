// Menu Icon Change Toggle
let navbarToggler = document.querySelector(".navbar-toggler");
navbarToggler.addEventListener("click", () => {
  let menuIcon = document.querySelector(".menu-icon");
  if (menuIcon.classList.contains("fa-bars")) {
    menuIcon.classList.add("fa-times");
    menuIcon.classList.remove("fa-bars");
  } else if (menuIcon.classList.contains("fa-times")) {
    menuIcon.classList.add("fa-bars");
    menuIcon.classList.remove("fa-times");
  }
});

// Device Card Slider
var swiper = new Swiper(".device-card .swiper-container", {
  loop: true,
  navigation: {
    nextEl: ".swiper-next-button",
    prevEl: ".swiper-prev-button",
  },
});

// Swiper JS Testimonial Carousel
var swiper = new Swiper(".swiper-slider", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetweenSlides: 50,
    },
    768: {
      slidesPerView: 2,
      spaceBetweenSlides: 50,
    },
    1200: {
      slidesPerView: 3,
      spaceBetweenSlides: 30,
    },
  },
});
