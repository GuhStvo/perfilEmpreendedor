$(document).ready(function () {
    $('#containerEntry').slick({
        dots: true,
        arrows: false,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
    });

    $('#botaoProximo').click(function () {
        $('#containerEntry').slick('slickNext');
    });
});