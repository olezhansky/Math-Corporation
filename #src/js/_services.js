{
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
}