new Swiper('.two-img-slider', {
    navigation: {
        nextEl: '.arrow-right',
        prevEl: '.arrow-left'
    },
    
    slidesPerView: 1.32,

    spaceBetween: 20,

    loop: true,

    breakpoints: {
        1024: {
            slidesPerView: 2,

            spaceBetween: 40,
        }
    },
});

new Swiper('.three-img-slider', {
    navigation: {
        nextEl: '.arrow-right',
        prevEl: '.arrow-left'
    },
    
    slidesPerView: 1.34,

    spaceBetween: 20,

    loop: true,

autoWidth: true,

    breakpoints: {
        1024: {
            slidesPerView: 3,

            spaceBetween: 34,
        },

        1280: {
            slidesPerView: 3,

            spaceBetween: 86,
        }
    },
});