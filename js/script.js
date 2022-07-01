const navLinkFirst = document.getElementById('navLinkFirst');
const hoverCardFirst = document.getElementById('hoverCardFirst');
const navLinkSecond = document.getElementById('navLinkSecond');
const hoverCardSecond = document.getElementById('hoverCardSecond');
const dropIcon1 = document.getElementById('dropIcon');
const dropIcon2 = document.getElementById('dropIcon2');
const mediaQuery = window.matchMedia('(max-width: 850px)')
const mediaQuery2 = window.matchMedia('(min-width:851px)')


if (mediaQuery.matches) {
    hoverCardFirst.style.display = "none"
    navLinkFirst.addEventListener('click', function () {

        if (hoverCardFirst.style.display == "none") {
            hoverCardFirst.style.display = "flex"
            dropIcon1.style.transform = "rotate(180deg)"
        }
        else {
            hoverCardFirst.style.display = "none"
            dropIcon1.style.transform = "rotate(0deg)"
        }
        if (mediaQuery2.matches)
            hoverCardSecond.style.display = "none"
    })

}

else {
    navLinkFirst.addEventListener('mouseover', function () {

        hoverCardFirst.style.display = "flex"
        hoverCardSecond.style.display = "none"
    })
}

hoverCardFirst.addEventListener('mouseleave', function () {
    hoverCardFirst.style.display = "none"
})

if (mediaQuery.matches) {
    hoverCardSecond.style.display = "none"
    navLinkSecond.addEventListener('click', function () {

        if (hoverCardSecond.style.display == "none") {
            hoverCardSecond.style.display = "flex"
            dropIcon2.style.transform = "rotate(180deg)"
        }
        else {
            hoverCardSecond.style.display = "none"
            dropIcon2.style.transform = "rotate(0deg)"
        }

        if (mediaQuery2.matches)
            hoverCardFirst.style.display = "none"
    })
}

else {
    navLinkSecond.addEventListener('mouseover', function () {
        hoverCardSecond.style.display = "flex"
        hoverCardFirst.style.display = "none"
    })
}

hoverCardSecond.addEventListener('mouseleave', function () {
    hoverCardSecond.style.display = "none"
})



// SLIDER //


let swiper = new Swiper(".mySwiper", {
    slidesPerView: 1.1,
    slidesPerGroup: 1,
    spaceBetween: 20,
    centeredSlides: true,
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    //     slidesPerView: 3,
    // },
    loop: true,
    navigation: {
        nextEl: ".swiper-button-prev1",
        prevEl: ".swiper-button-next1",
    },
    breakpoints: {
        620: {
            spaceBetween: 30,

        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
            slidesPerGroup: 3,
        },
    },
});



// HAMICON //

const hamIcon = document.getElementById('hamIcon');
const navLink = document.getElementById('navList');
const crossIcon = document.getElementById('crossIcon');

hamIcon.addEventListener('click', function () {
    navLink.style.left = '0%';

})

crossIcon.addEventListener('click', function () {
    navLink.style.left = "200%"
    hoverCardSecond.style.display = "none"
    hoverCardFirst.style.display = "none"
})

