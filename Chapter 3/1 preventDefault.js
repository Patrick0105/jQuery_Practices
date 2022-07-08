$(document).ready(function () {
    $('a').click(function (e) { 
        e.preventDefault();
        $('.box').slideToggle();
    });
});