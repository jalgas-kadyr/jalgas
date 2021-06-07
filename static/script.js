$(document).ready(function(){
    $('#about').click(function (){
       $('html, body').animate({
            scrollTop: $(".about").offset().top + 400 // Means Less header height
        },800);
        $('#absolute').css('transition', '1s');
        $('#absolute').css('height', '70px');
        $('.menu').css('transition', '1s');
        $('.menu').css('visibility', 'hidden');
        $('#absolute').children('menu').css('transition', '0.1s');
        $('#absolute').children('menu').css('display', 'none');
        menu = false;
    });
    $('#main').click(function (){
       $([document.documentElement, document.body]).animate({
            scrollTop: $(".steps").offset()
        }, 800);
       $('#absolute').css('transition', '1s');
        $('#absolute').css('height', '70px');
        $('.menu').css('transition', '1s');
        $('.menu').css('visibility', 'hidden');
        $('#absolute').children('menu').css('transition', '0.1s');
        $('#absolute').children('menu').css('display', 'none');
        menu = false;
    });
    $('#prices').click(function (){
       $('html, body').animate({
            scrollTop: $(".about").offset().top + 1300 // Means Less header height
        },800);
       $('#absolute').css('transition', '1s');
        $('#absolute').css('height', '70px');
        $('.menu').css('transition', '1s');
        $('.menu').css('visibility', 'hidden');
        $('#absolute').children('menu').css('transition', '0.1s');
        $('#absolute').children('menu').css('display', 'none');
        menu = false;
    });
    $('#steps').click(function (){
       $('html, body').animate({
            scrollTop: $(".about").offset().top + 1850 // Means Less header height
        },800);
       //  $('.steps').scrollTop(300);
       $('#absolute').css('transition', '1s');
        $('#absolute').css('height', '70px');
        $('.menu').css('transition', '1s');
        $('.menu').css('visibility', 'hidden');
        $('#absolute').children('menu').css('transition', '0.1s');
        $('#absolute').children('menu').css('display', 'none');
        menu = false;
    });
    $('#apply').click(function (){
       $('html, body').animate({
            scrollTop: $(".about").offset().top + 2500 // Means Less header height
        },800);
       $('#absolute').css('transition', '1s');
        $('#absolute').css('height', '70px');
        $('.menu').css('transition', '1s');
        $('.menu').css('visibility', 'hidden');
        $('#absolute').children('menu').css('transition', '0.1s');
        $('#absolute').children('menu').css('display', 'none');
        menu = false;
    });
    $('.abutton').click(function (){
       $('html, body').animate({
            scrollTop: $(".about").offset().top + 700 // Means Less header height
        },800);

    });
    let menu = false;

    $('.buttonMenu').click(function (){
        if(menu == false){
            $('#absolute').css('transition', '1s');
            $('#absolute').css('height', '330px');
            $('.menu').css('transition', '1s');
            $('.menu').css('visibility', 'visible');
            menu = true;
        }else {
            $('#absolute').css('transition', '1s');
            $('#absolute').css('height', '70px');
            $('.menu').css('transition', '1s');
            $('.menu').css('visibility', 'hidden');
            $('#absolute').children('menu').css('transition', '0.1s');
            $('#absolute').children('menu').css('display', 'none');
            menu = false;
        }

    });
});