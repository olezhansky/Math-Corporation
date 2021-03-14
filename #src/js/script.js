// // Reviews
(function(){
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
})();

var swiper = new Swiper('.header__content-slider', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 4000,
  }
});


// // Services
(function() {
    const buttonsTab = document.querySelector('.services__menu');
    const COLOR_TAB_1= '#fff';
    const COLOR_TAB_2= '#717171';
    const BACKGROUND_COLOR_TAB_1= '#4965a6';
    const BACKGROUND_COLOR_TAB_2 = '#F8FCFE';
    function changeTabsOnClick(event) {
        if (event.target.className == 'services__menu-item') {
            const dataTabMenu = event.target.getAttribute('data-tab');
            const tabContentItem = document.querySelectorAll('.services__menu-content-item');
            const tabsTitle = document.querySelectorAll('.services__menu-item');
            for (let item of tabsTitle) {
                item.classList.remove('services__menu-item--active');
            }
            for (let i = 0; i < tabContentItem.length; i++) {
                const dataTabContent = tabContentItem[i].getAttribute('data-tab');
                if (dataTabMenu == dataTabContent) {
                    tabContentItem[i].style.display = 'flex';
                    tabsTitle[i].classList.add('services__menu-item--active');
                    tabsTitle[i].style.color = COLOR_TAB_1;
                    tabsTitle[i].style.backgroundColor = BACKGROUND_COLOR_TAB_1;
                } else {
                    tabContentItem[i].style.display = 'none'
                    tabsTitle[i].style.color = COLOR_TAB_2;
                    tabsTitle[i].style.backgroundColor = BACKGROUND_COLOR_TAB_2;
                }
            }
        }
    };
    buttonsTab.addEventListener('click', changeTabsOnClick);
}());

// // Button top
(function(){
  const btnTopEl = document.querySelector('.header__menu-btn-top');
  function tracScroll() {
    if (window.pageYOffset > 250) {
      btnTopEl.style.display = 'block';
    } else {
      btnTopEl.style.display = 'none';
    }
  }
  function btnToTop() {
    if (window.pageYOffset > 0) {
      window.scrollTo(0, 0);
    }
  }
  window.addEventListener('scroll', tracScroll);
  btnTopEl.addEventListener('click', btnToTop);
}());


// Burger menu

(function() {
  const burgerMenuBtn = document.querySelector('.header__menu-burger');
  const headerMenuList = document.querySelector('.header__menu-list');
  const burgerMenuBtnSpan1 = document.querySelector('.header__menu-burger span:nth-child(1)');
  const burgerMenuBtnSpan2 = document.querySelector('.header__menu-burger span:nth-child(2)');
  const burgerMenuBtnSpan3 = document.querySelector('.header__menu-burger span:nth-child(3)');
  const headerTop = document.querySelector('.header__top');
  burgerMenuBtn.addEventListener('click', function() {
    headerMenuList.classList.toggle('header__menu-list--active');
    burgerMenuBtnSpan1.classList.toggle('first');
    burgerMenuBtnSpan2.classList.toggle('middle');
    burgerMenuBtnSpan3.classList.toggle('last');
    headerTop.classList.toggle('header__top--active')
  })
})();


