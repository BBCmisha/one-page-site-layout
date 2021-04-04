$(function () {

    // Blocks
    let header = $("#header");
    let intro = $("#intro");
    let nav = $("#nav");
    let navToggle = $("#navToggle");
    let slider = $("#reviewsSlider");

    // Additional variables
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();

/* 
** Fixed Header
*/

    checkScroll(scrollPos, introH)

    $(window).on("scroll resize", function () {
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();

        checkScroll(scrollPos, introH);
    });

    function checkScroll(scrollPos, introH) {
        if (scrollPos > introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }
  
/*
** Smooth scroll
*/

    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();

        let blockId = $(this).data('scroll');
        let blockOffset = $(blockId).offset().top;

        // Hide navigation bar
        nav.removeClass("show");

        // Scrolling to choosen block
        $("html, body").animate({
            scrollTop: blockOffset - 70
        }, 700);
    });

/*
** Nav Toggle
*/

    navToggle.on("click", function (event) {
        event.preventDefault();

        // Toggle class "show"
        nav.toggleClass("show");
    })

/*
** Slider reviews
*/

    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true
    });


});