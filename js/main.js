const swiper = new Swiper(".category__slider-container",  {
  // Optional parameters
  loop: true,
  keyboard: {
    enabled: true,
  },
  // Navigation arrows
  navigation: {
    nextEl: ".category__button--next",
    prevEl: ".category__button--prev",
  },
  slidesPerView: 4,
  spaceBetween: 30,
  slideClass: "category-slide",
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 40
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 26
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 26
    },
  }
});

const unreleasedSlider = new Swiper(".unreleased__slider", {
  
  slidesPerView: 5,
  spaceBetween: 30,
  slideClass: "unreleased__slide",
  navigation: {
    disabledClass: "unreleased__button-disabled",
    nextEl: ".unreleased__button-next",
    prevEl: ".unreleased__button-prev",
  },
  breakpoints: {
    1200: {
      slidesPerView: 5,
      spaceBetween: 25
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 40
    }
  }
});

const menuButton = document.querySelector(".menu-button");
menuButton.addEventListener("click", function () {
  document
  .querySelector(".navbar__menu")
  .classList.toggle("navbar__menu--visible");
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

$(".form").each(function() {
  $(".modal__phone").mask("+7 (000) 000-0000");
  $(".footer__input-phone").mask("+7 (000) 000-0000");
  $(this).validate({
    errorClass: "invalid",
    messages: {
      name: {
        required: "Please specify your name",
        minlength: "The name must be at least two letters",
      },
      phone: {
        required: "Please enter your phone number",
        minlength: "please enter 10 digits",
      },
      email: {
        required: "We need your email address to contact you",
        email: "Your email address must be in the format of name@domain.com",
      },
      },
    });
})

