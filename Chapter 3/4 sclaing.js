$(document).ready(function () {
    $('.font-b').click(function (e) { 
        e.preventDefault();
        $('.content p').css('font-size','30px');
    });

    $('.font-m').click(function (e) { 
        e.preventDefault();
        $('.content p').css('font-size','16px');
    });
    $('.font-s').click(function (e) { 
    e.preventDefault();
        $('.content p').css('font-size','8px');
    });
});