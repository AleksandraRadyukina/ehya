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

const modalButton = document.querySelector('[data-toggle="modal"]');
const closeModalButton = document.querySelector(".modal__close");

modalButton.addEventListener("click", openModal);
closeModalButton.addEventListener("click", closeModal);

function openModal() {
  const modalOverlay = document.querySelector(".modal__overlay");
  const modalDialog = document.querySelector(".modal__dialog");
  modalOverlay.classList.add("modal__overlay--visible");
  modalDialog.classList.add("modal__dialog--visible");
}
function closeModal(event) {
  event.preventDefault();
  const modalOverlay = document.querySelector(".modal__overlay");
  const modalDialog = document.querySelector(".modal__dialog");
  modalOverlay.classList.remove("modal__overlay--visible");
  modalDialog.classList.remove("modal__dialog--visible");
}


