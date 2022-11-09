$(document).ready(function(){
    $('.js-banner-carousel').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 300,
        autoplay: true,
        fade: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        adaptiveHeight: true,
        cssEase: 'linear',
    });
    $('.js-products-carousel').slick({
        speed: 9000,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        infinite: true,
        dots: false,
        arrows: false,
    });
    $('.back-to-top').click(function(){
        console.log("omg");
        window.scrollTo({ top: 0, behavior: 'smooth'});
    });
});