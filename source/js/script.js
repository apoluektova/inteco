const projectsSwiper = new Swiper('.projects__swiper', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  allowTouchMove: true,
  initialSlide: 6,

  pagination: {
    el: '.projects__swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.projects__swiper-button-next',
    prevEl: '.projects__swiper-button-prev',
  },

  breakpoints: {
    1340: {
      initialSlide: 8,
    }
  }
});

const principlesSwiper = new Swiper('.principles__swiper', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  allowTouchMove: true,
  autoHeight: true,

  pagination: {
    el: '.principles__swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.principles__swiper-button-next',
    prevEl: '.principles__swiper-button-prev',
  },

  breakpoints: {
    1340: {
      initialSlide: 1,
    }
  }
});

const employeesSwiper = new Swiper('.employees__swiper', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  allowTouchMove: true,
  initialSlide: 6,

  pagination: {
    el: '.employees__swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.employees__swiper-button-next',
    prevEl: '.employees__swiper-button-prev',
  },

  breakpoints: {
    1340: {
      initialSlide: 9,
    }
  }
});
