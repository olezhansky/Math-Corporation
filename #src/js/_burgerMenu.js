{
    const burgerMenuBtn = document.querySelector('.header__menu-burger');
    const headerMenuList = document.querySelector('.header__menu-list');
    const headerMenuLink = document.querySelectorAll('.header__menu-link');
    console.log(headerMenuLink);
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
    headerMenuLink.forEach(element => {
        element.addEventListener('click', () => {
            headerMenuList.classList.toggle('header__menu-list--active');
            burgerMenuBtnSpan1.classList.toggle('first');
            burgerMenuBtnSpan2.classList.toggle('middle');
            burgerMenuBtnSpan3.classList.toggle('last');
        })
    })
}
