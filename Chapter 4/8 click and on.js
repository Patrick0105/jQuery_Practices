// $(document).ready(function () {
//     $('h1').click(function (e) { 
//         e.preventDefault();
//         alert('有效！')
//     });
//     $('.box1').html('<h1>用jQuery動態產生</h1>');
// });

$(document).ready(function () {
    $('.wrap').on('click','h1', function () {
        alert('有效喔')
    });
    $('.box1').html('<h1>用jQuery動態產生</h1>');
});