const navLinkFirst = document.getElementById('navLinkFirst');
const hoverCardFirst = document.getElementById('hoverCardFirst');
const navLinkSecond = document.getElementById('navLinkSecond');
const hoverCardSecond = document.getElementById('hoverCardSecond');
const mediaQuery = window.matchMedia('(max-width: 850px)')

navLinkFirst.addEventListener('mouseover', function () {
    hoverCardFirst.style.display = "flex"
    hoverCardSecond.style.display = "none"
    if (mediaQuery.matches) {
        hoverCardSecond.style.display = "none"
        hoverCardFirst.style.display = "none"
    }
})

hoverCardFirst.addEventListener('mouseleave', function () {
    hoverCardFirst.style.display = "none"
})


navLinkSecond.addEventListener('mouseover', function () {
    hoverCardSecond.style.display = "flex"
    hoverCardFirst.style.display = "none"
    if (mediaQuery.matches) {
        hoverCardSecond.style.display = "none"
        hoverCardFirst.style.display = "none"
    }
})

hoverCardSecond.addEventListener('mouseleave', function () {
    hoverCardSecond.style.display = "none"
})


let swiper = new Swiper(".mySwiper", {
    slidesPerView: 1.1,
    spaceBetween: 20,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
        slidesPerView: 3,
    },
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next1",
        prevEl: ".swiper-button-prev1",
    },
    breakpoints: {
        620:{
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
});



const hamIcon = document.getElementById('hamIcon');
const navLink = document.getElementById('navList');
const crossIcon = document.getElementById('crossIcon');

hamIcon.addEventListener('click', function () {
    navLink.style.left = '0%';

})

crossIcon.addEventListener('click', function () {
    navLink.style.left = "200%"
})


