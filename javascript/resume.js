
const swiper = new Swiper('.card-wrapper', {
spaceBetween: 10,
slidesPerView: 1.2,  
loop: true,

// If we need pagination
pagination: {
  el: '.swiper-pagination',
},

// Navigation arrows
navigation: {
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
},
breakpoints: {
    0: {
        slidesPerView: 1,
    },
    768: {
        slidesPerView: 2,
    },
    1024: {
        slidesPerView: 3,
    },
    1200: {
        slidesPerView: 4,
    },

}

});
