//============== Highlighting menu items when scrolling =============================
{
    function trackScrollAndAddActiveClass() {
        let scrollDistance = window.scrollY
        const sectionElements = document.querySelectorAll('.section')
        sectionElements.forEach((element, index) => {
            const menuTopEl = document.querySelector('.header__menu-list')
            if (window.screen.width > 1160) {
                if (element.offsetTop - 50 - menuTopEl.clientHeight <= scrollDistance) {
                    const allMenuLink = document.querySelectorAll('.header__menu-list .header__menu-link ')
                    allMenuLink.forEach((element) => {
                        if (element.classList.contains('header__menu-link--active')) {
                            element.classList.remove('header__menu-link--active', 'header__menu-link--selected') 
                        }
                    })
                    const menuTopLiEl = document.querySelectorAll('.header__menu-list li')[index]
                    const menuTopLinkEl = menuTopLiEl.querySelector('.header__menu-link')
                    menuTopLinkEl.classList.add('header__menu-link--active')
                    
                }
            } else {
                if (element.offsetTop + 500 - menuTopEl.clientHeight <= scrollDistance) {
                    const allMenuLink = document.querySelectorAll('.header__menu-list .header__menu-link ')
                    allMenuLink.forEach((element) => {
                        if (element.classList.contains('header__menu-link--active')) {
                            element.classList.remove('header__menu-link--active', 'header__menu-link--selected') 
                        }
                    })
                    const menuTopLiEl = document.querySelectorAll('.header__menu-list li')[index]
                    const menuTopLinkEl = menuTopLiEl.querySelector('.header__menu-link')
                    menuTopLinkEl.classList.add('header__menu-link--active')
                    
                }  
            }
           
        })
    }
    window.addEventListener('scroll', trackScrollAndAddActiveClass)
}
//--------------------------------------------------------------------------

//============== Selecting menu items on click =============================
{
    const menuTtopEl = document.querySelector('.header__menu-list')
        menuTtopEl.addEventListener('click', event => {
            singleSelect(event.target);
        })

        // prevents unnecessary highlighting of list items on click
        menuTtopEl.onmousedown = function() {
            return false;
        };

        function singleSelect(li) {
            let selected = menuTtopEl.querySelectorAll('.header__menu-link--selected');
            for (let element of selected) {
                element.classList.remove('header__menu-link--selected');
            }
            li.classList.add('header__menu-link--selected');
        }
}
//--------------------------------------------------------------------------