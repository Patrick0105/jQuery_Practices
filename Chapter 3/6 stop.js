$(document).ready(function () {
    $('.start').click(function (e) { 
        e.preventDefault();
        $('.box').stop().slideToggle(3000);
    });
});