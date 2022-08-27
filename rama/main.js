/*==================== INITIALIZE SWIPER  ====================*/
const swiperSlider = new Swiper('.hero-section-swiper', {
  cssMode: true,
  loop: true,
  observer: true,
  observeParents: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

swiperSlider.update();
