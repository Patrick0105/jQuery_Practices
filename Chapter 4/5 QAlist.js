$(document).ready(function () {
    $('.question h3').click(function (e) { 
        e.preventDefault();
        $(this).toggleClass('active');
        $(this).parent().find('p').slideToggle();

        $(this).parent().siblings().find('p').slideUp();
        $(this).parent().siblings().find('h3').removeClass('active')
    });
});