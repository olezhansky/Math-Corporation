
// var swiper = new Swiper('.swiper-container', {
//     slidesPerView: 1,
//     spaceBetween: 40,
//     loop: true,
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true,
//     },
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
//   });

var galleryThumbs = new Swiper('.gallery-thumbs', {
  spaceBetween: 1,
  slidesPerView: 4,
  loop: true,
  centeredSlides: true,
  freeMode: true,
  loopedSlides: 4,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev'
  },
});
var galleryTop = new Swiper('.gallery-top', {
  spaceBetween: 1,
  loop: true,
  freeMode: true,
  loopedSlides: 1,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  navigation: {
      nextEl: '.button-next',
      prevEl: '.button-prev'
    },
    thumbs: {
      swiper: galleryThumbs
    }
});

