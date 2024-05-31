$(document).ready(function () {
    $('#containerEntry').slick({
        dots: true,
        arrows: false,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 700,
    });
    
    // Defina o evento de clique para o botão de avançar fora da função afterChange
    $('#botaoProximo').on('click', function () {
        $('#containerEntry').slick('slickNext');
    });
    
    $('#containerEntry').on('afterChange', function(event, slick, currentSlide){
        if (currentSlide === 2) {
            $('#btnProximoText').html("Login");
            $('#pularParaPerfil').hide();
            
            // Atualize o link para redirecionar apenas quando o botão for clicado
            $('#botaoProximo').off('click').on('click', function(){
                window.location.href = "https://www.google.com.br";
            });
            
        } else {
            $('#btnProximoText').html("Avançar");
            $('#pularParaPerfil').show();
            
            // Atualize o link para avançar o slide quando o botão for clicado
            $('#botaoProximo').off('click').on('click', function () {
                $('#containerEntry').slick('slickNext');
            });
        }
    });
});
