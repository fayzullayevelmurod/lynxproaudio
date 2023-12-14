
try {
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
} catch (rrr) {
    console.log(rrr);
}
try {
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
} catch (rrr) {
    console.log(rrr);
}
try {
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
} catch (rrr) {
    console.log(rrr);
}
try {
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
} catch (rrr) {
    console.log(rrr);
}

try {
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
} catch (rrr) {
    console.log(rrr);
};

try {
    // burger
    let burger_open = document.querySelector('.burger_open');
    let media_menu = document.querySelector('.media_menu');

    burger_open.addEventListener('click', () => {
        media_menu.classList.toggle('active');
    });

    // media_menu.addEventListener('click', () => {
    //     media_menu.classList.remove('active');
    // });

} catch (rrr) {
    console.log(rrr);
};

try {
    // footer_modal
    let footer_modal_close = document.querySelector('.footer_modal_close');
    let footer_modal = document.querySelector('.footer_modal');

    footer_modal_close.addEventListener('click', () => {
        footer_modal.classList.add('active')
    })

} catch (rrr) {
    console.log(rrr);
};


try {
    document.querySelectorAll('.catalog_series_mobile').forEach((catalog,index) => {
        let btns = catalog.querySelectorAll('.catalog_tabs button')
        let tab_items = catalog.querySelectorAll('.tabs_in ul')

        btns.forEach((btn, btn_idx) => {
            btn.onclick = () => {
                let tab = tab_items[btn_idx];
                btns.forEach(item => {
                    item.classList.remove('active')
                })
                btn.classList.add('active')
                if (!tab.classList.contains('active')) {
                    tab_items.forEach(tab => {
                        if (tab.classList.contains('active')) {
                            tab.classList.remove('active')
                            tab.classList.add('end-active')
                            setTimeout(() => {
                                tab.classList.remove('end-active')
                            }, 600);
                        }
                    })
                    setTimeout(() => {
                        tab_items[btn_idx].classList.add('active')
                    }, 600);
                }
            } 
        })
    })  


} catch (err) {
    
}


try {
    let about_btn = document.querySelector('.about_btn');
    let video_modal = document.querySelector('.video_modal');
    let about_bg = document.querySelector('.about_bg');
    
    about_btn.addEventListener('click', () => {
        video_modal.classList.add('active');
        about_bg.classList.add('.active');
    });
    
    about_bg.addEventListener('click', () => {
        video_modal.classList.remove('active');
        about_bg.classList.remove('.active');
    });
    
} catch (err) {

}

let nav_item_media = document.querySelectorAll('.nav_item_media')  

nav_item_media.forEach(item => {
    
    const nav_item_media_btn = item.querySelector('a')
    const support_media_menu = item.querySelector('.support_media_menu')
    nav_item_media_btn.addEventListener('click', (e) => {
        e.preventDefault()
        item.classList.toggle('active')
        if (support_media_menu) {
            support_media_menu.classList.toggle('active')
        }
    })
})


try {

    const el = document.createElement('div')
    el.classList.add('dropdown_menu_bg')
    const body = document.querySelector('body')
    body.appendChild(el)


    let dropdown_in = document.querySelectorAll('.dropdown_in a');
    let dropdown_link_item = document.querySelectorAll('.dropdown_link_item a');
    
    [...dropdown_in, ...dropdown_link_item].forEach(item => {
        item.onclick = () => {
            dropdown_menu.forEach((menu, idx) => {
                menu.classList.remove('active')
            })
            document.querySelector('.dropdown_menu_bg').classList.remove('active')
        }
    })


    let support_drop = document.querySelectorAll('.support_drop a');
    let dropdown_menu = document.querySelectorAll('.dropdown_menu');
    let dropdown_close = document.querySelectorAll('.dropdown_menu .dropdown_close');

    support_drop.forEach((item, index) => {
        item.onclick = e => {
            e.preventDefault()
            dropdown_menu.forEach((menu, idx) => {
                if (index !== idx) {
                    menu.classList.remove('active')
                }
            })

            dropdown_menu[index].classList.add('active')
            document.querySelector('.dropdown_menu_bg').classList.add('active')
            
        }
    }) 

    document.querySelector('.dropdown_menu_bg').onclick = () => {
        dropdown_menu.forEach((menu, idx) => {
            menu.classList.remove('active')
        })
    }

    dropdown_close.forEach(item => {
        item.onclick = () => {
            dropdown_menu.forEach((menu, idx) => {
                menu.classList.remove('active')
                document.querySelector('.dropdown_menu_bg').classList.remove('active')
            })
        }
    })


} catch (err) {

}