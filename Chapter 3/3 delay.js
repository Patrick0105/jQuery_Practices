$(document).ready(function () {
    $('.open').click(function (e) { 
        e.preventDefault();
        $('.box1').delay(0).fadeToggle();
        $('.box2').delay(1000).slideToggle();
        $('.box3').delay(2000).show(0);

    });
});