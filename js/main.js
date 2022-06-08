AOS.init({
    offset: 100,
    duration: 1000
});



const backToTopButtton = document.querySelector(".backToTop");
backToTopButtton.addEventListener("click", function() {

    scroll({
        top: 0,
    })
})
window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    if (scroll >= 1000) {
        // $(".backToTop").css({
        //     opacity: 1,
        //     cursor: "pointer"
        // })
        backToTopButtton.style.opacity = 1;
        backToTopButtton.style.cursor = "pointer";
        backToTopButtton.style.visibility = "visible";
    } else {
        // $(".backToTop").css({
        //     opacity: 0,


        // })
        backToTopButtton.style.opacity = 0;
        backToTopButtton.style.visibility = "hidden";
    }
});

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    effect: "fade-in",
    spaceBetween: 30,
    autoplay: true,
    loop: true,
    keyboard: {
      enabled: true,
    },
  
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


  jQuery(document).ready(function($) {
    $("#menu").mmenu({
        "extensions": ["effect-menu-zoom", "effect-panels-zoom", "pagedim-black", "theme-dark"],
        "offCanvas": {
            "position": "right"
        },
        "counters": true,
        "iconPanels": true,
        "navbars": [{
            "position": "top"
        }]
    });
});