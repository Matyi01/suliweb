var box = $('#box');
$('#fel').click(function () {
    box.slideUp();
});
$('#le').click(function () {
    box.slideDown();
});
$('#bal').click(function () {
    box.animate({width:'0px'},350);
});
$('#jobb').click(function () {
    box.animate({width:'200px'},350);
});