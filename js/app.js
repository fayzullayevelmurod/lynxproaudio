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
});



let nav_search = document.querySelector('.nav_search');
let nav_search_block = document.querySelector('.nav_search_block');
let search_block_close = document.querySelector('.search_block_close');

nav_search.addEventListener('click', () => {
    nav_search_block.classList.toggle('active');
});


search_block_close.addEventListener('click', () => {
    nav_search_block.classList.remove('active');
});