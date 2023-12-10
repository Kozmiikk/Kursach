"use strict"

// body with burger menu

const btnMenu = document.querySelector('.btn-menu')

if (btnMenu) {
    btnMenu.addEventListener('click', (e) => {
        document.body.classList.toggle('body--no-scroll')
    })
}

// swiper slider
const swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
});

