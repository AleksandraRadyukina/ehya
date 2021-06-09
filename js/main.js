const swiper = new Swiper(".category__slider-container", {
  // Optional parameters
  loop: true,
  keyboard: {
    enabled: true,
  },
  // Navigation arrows
  navigation: {
    nextEl: ".category__button-next",
  },
  slidesPerView: 4,
  spaceBetween: 30,
  slideClass: "category-slide",
});

// const unreleasedSlider = new Swiper(".unreleased__slider", {
//   loop: true,
//   keyboard: {
//     enabled: true,
//   },
//   slidesPerVeiw: 5,
//   spaceBetween: 30,
//   slideClass: "unreleased__slide",
// });

const unreleasedSlider = new Swiper(".unreleased__slider", {
  loop: true,
  slidesPerView: 5,
  spaceBetween: 30,
  slideClass: "unreleased__slide",
  navigation: {
    nextEl: ".unreleased__button-next",
    prevEl: ".unreleased__button-prev",
  },
});


