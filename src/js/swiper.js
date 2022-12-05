new Swiper('.two-img-slider', {
    navigation: {
        nextEl: '.arrow-right',
        prevEl: '.arrow-left'
    },
    
    slidesPerView: "auto",

    spaceBetween: 20,

    loop: true,

    breakpoints: {
        1024: {
            spaceBetween: 40,
        }
    },
});

new Swiper('.three-img-slider', {
    navigation: {
        nextEl: '.arrow-right',
        prevEl: '.arrow-left'
    },
    
    slidesPerView: "auto",

    spaceBetween: 20,

    loop: true,

    breakpoints: {
        1024: {
            spaceBetween: 34,
        },

        1280: {
            spaceBetween: 86,
        }
    },
});

new Swiper('.restaurant-slider', {
    navigation: {
        nextEl: '.arrow-right',
        prevEl: '.arrow-left'
    },
    
    slidesPerView: "auto",

    spaceBetween: 24,

    loop: true,

    breakpoints: {
        1024: {
            spaceBetween: 40,
        }
    },
});

new Swiper('.hotel-slider', {
    navigation: {
        nextEl: '.arrow-right',
        prevEl: '.arrow-left'
    },
    
    slidesPerView: "auto",

    spaceBetween: 16,

    loop: true,

    breakpoints: {
        1024: {
            spaceBetween: 40,
        }
    },
});