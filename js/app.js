// home slider
var swiper = new Swiper(".homeSwiper", {
    spaceBetween: 30,
    effect: "fade",
    loop: true,
    autoplay: {
        delay: 5000,
    },
    navigation: {
        nextEl: ".homeSwiper_next",
        prevEl: ".homeSwiper_prev",
    },
    pagination: {
        el: '.home .home_swiper_pagination',
        clickable: true
    }
});


// news slider
var swiperNews = new Swiper(".newsSlider", {
    spaceBetween: 30,
    effect: "fade",
    loop: true,
    autoplay: {
        delay: 5000,
    },
    navigation: {
        nextEl: ".homeSwiper_next",
        prevEl: ".homeSwiper_prev",
    },
    pagination: {
        el: '#news .home_swiper_pagination',
        clickable: true
    }
});

// coaxialSwiper slider
var swiperNews = new Swiper(".coaxialSwiper", {
    spaceBetween: 30,
    effect: "fade",
    loop: true,
    autoplay: {
        delay: 5000,
    },
    navigation: {
        nextEl: ".homeSwiper_next",
        prevEl: ".homeSwiper_prev",
    },
    pagination: {
        el: '#coaxial .home_swiper_pagination',
        clickable: true
    }
});

// new slider
var swiperNew = new Swiper(".newSlider", {
    spaceBetween: 30,
    effect: "fade",
    loop: true,
    autoplay: {
        delay: 5000,
    },
    navigation: {
        nextEl: ".homeSwiper_next",
        prevEl: ".homeSwiper_prev",
    },
});


// search
let nav_search = document.querySelector('.nav_search');
let nav_search_block = document.querySelector('.nav_search_block');
let search_block_close = document.querySelector('.search_block_close');

nav_search.addEventListener('click', () => {
    nav_search_block.classList.toggle('active');
});


search_block_close.addEventListener('click', () => {
    nav_search_block.classList.remove('active');
});



// burger
let burger_open = document.querySelector('.burger_open');
let media_menu = document.querySelector('.media_menu');

burger_open.addEventListener('click', () => {
    media_menu.classList.toggle('active');
});

media_menu.addEventListener('click', () => {
    media_menu.classList.remove('active');
});

// footer_modal
let footer_modal_close = document.querySelector('.footer_modal_close');
let footer_modal = document.querySelector('.footer_modal');

footer_modal_close.addEventListener('click', () => {
    footer_modal.classList.add('active')
})

