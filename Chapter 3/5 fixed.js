$(document).ready(function () {
    $('.ad-close').click(function (e) { 
        e.preventDefault();
        $('.ad').fadeOut();
    });
});