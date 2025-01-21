$(function () {
    for (let i = 0; i < 100; i++) {
        for (let j = 0; j < 100; j++) {
            jQuery('<div>', {
                id: 'i,j',

            }).click(function () {
                $(this).css('background-color', $('#szin').val())
            }).appendTo('body');
        }
        $('body').append('<br>');
    }
});