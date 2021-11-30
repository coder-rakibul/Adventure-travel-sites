let navbar = document.querySelector('.header .min-nav');
let navbarScroll = document.querySelector('.header');
let obtn = document.querySelector('#manu-bar');
let cbtn = document.querySelector('.nav-crose');
let searchBotton = document.querySelector('#search-bar');
let closeBotton = document.querySelector('#close-section i');
let activeSearch = document.querySelector('.search-form')


// Side Navication Bar Responcive Code Start
obtn.addEventListener('click', function () {
    navbar.classList.add('active');
})

cbtn.addEventListener('click', function () {
    navbar.classList.remove('active');
})




// 1111111111111111
window.addEventListener('scroll', function () {
    navbar.classList.remove('actives');

    if (window.scrollY > 0) {
        navbarScroll.classList.add('actives');
    } else {
        navbarScroll.classList.remove('actives');
    }
})
window.addEventListener('load', function () {
    navbar.classList.remove('active');

    if (window.scrollY > 0) {
        navbarScroll.classList.add('actives');
    } else {
        navbarScroll.classList.remove('actives');
    }
})



// Side Navication Bar Responcive Code End
// Search Option Enable Code Start

searchBotton.addEventListener('click', function () {
    activeSearch.classList.add('active')
})

closeBotton.addEventListener('click', function () {
    activeSearch.classList.remove('active')
})

// Search Option Enable Code End

/**
 * Selider Code
 */

var swiper = new Swiper(".home-selider", {
    loop: true,
    grabCursor: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

});

// End

// Prodact Selider
var swiper = new Swiper(".prodact-selid", {
    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
        },
    },

});
// End
// Revew Selider Start
var swiper = new Swiper(".revews-slider", {
    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        }
    },

});
// End
// Blogs Start
var swiper = new Swiper(".blogs-selider", {
    loop: true,
    grabCursor: true,
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        }
    },

});
// End
// clients-slide
var swiper = new Swiper(".clients-slide", {
    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
        },
    },

});
// End