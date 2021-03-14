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
