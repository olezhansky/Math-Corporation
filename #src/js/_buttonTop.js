{
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
}
 