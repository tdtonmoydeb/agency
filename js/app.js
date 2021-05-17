// ########################
// MOBILE MENU
// ########################

var menuOpenBtn = document.querySelector('.menu-open-btn');
var menuCloseBtn = document.querySelector('.menu-close-btn');
var navList = document.querySelector('.nav-list');

function menuOpen() {
    if(navList.classList.contains('mobile-hide')){
        navList.classList.add('delay');
        navList.classList.remove('mobile-hide');

        navList.addEventListener('transitionend', () => {
            navList.classList.remove('delay');
        })
    }
}

function menuClose() {
    navList.classList.add('delay');
    navList.classList.add('mobile-hide');
    navList.addEventListener('transitionend', () => {
        navList.classList.remove('delay');
    })
}

menuOpenBtn.addEventListener('click', menuOpen);
menuCloseBtn.addEventListener('click', menuClose);