$(document).ready(function () {
    $('.addcar').click(function (e) { 
        e.preventDefault();
        $(this).parent().toggleClass('active');
    });
});

