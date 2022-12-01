// * Script for hero-slider
// Ініціалізуємо Свайпер
new Swiper('.hero-slider',{
    // Стрілки навігації
    navigation: {
        nextEl: '.hero-slider__button--next',
        prevEl: '.hero-slider__button--prev'
    },
    // slidesPerView: 1,
    
    // Ефект переключення слайдів
    // Зміна прозорості
    effect: 'fade',
    speed: 250,
    // Додаток до fade
    fadeEffect: {
    // Паралельна зміна прозорості
        crossFade: true
    },
    });