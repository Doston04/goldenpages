var swiper = new Swiper(".mySwiper", {
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: {
    nextEl: "#next",
    prevEl: "#prev",
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  speed: 1600,
  loop: true,
});