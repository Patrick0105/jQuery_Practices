$(document).ready(function () {
    $('.menu li').click(function (e) { 
        e.preventDefault();
        $(this).find('h3').toggleClass('active').siblings().removeClass('active');;
    });
});