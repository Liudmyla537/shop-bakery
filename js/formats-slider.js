const swiper = new Swiper('.formats-section', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,

  breakpoints: {
    375: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1280: {
      slidesPerView: 3,
    },
  },

  pagination: {
    el: '.pagination',
    clickable: true,
    bulletClass: 'pagination-button',
    bulletActiveClass: 'pagination-button-active',
  },
  navigation: {
    nextEl: '.btn-carousel.next',
    prevEl: '.btn-carousel.prev',
  },
});
