const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  allowTouchMove: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
