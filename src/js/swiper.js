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