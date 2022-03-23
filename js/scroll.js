$(document).ready(function() {
    $('div#scroll a').on('click', function() {
        $('html, body').animate({
            scrollTop: $("header").height()
        }, 900, 'linear');
        return false;
    });

    //scroll top button
    $('<div></div>')
        .attr('id', 'scrolltotop')
        .hide()
        .css({ 'z-index': '200', 'position': 'fixed', 'bottom': '25px', 'right': '35px', 'border-radius': '20px', 'cursor': 'pointer', 'width': '40px', 'height': '40px', 'background': '#FA9500' })
        .appendTo('body')
        .click(function() {
            $('html,body').animate({ scrollTop: 0 }, 'slow');
        });
    $('<div></div>')
        .css({ 'width': '6px', 'height': '6px', 'transform': 'rotate(-135deg)', 'border': 'solid #F9F4EA', 'border-width': '0 3px 3px 0', 'padding': '3px', 'margin-top': '16px', 'margin-left': '12px' })
        .appendTo('#scrolltotop');
    $(window).scroll(function() {
        if ($(window).scrollTop() < 500) {
            $('#scrolltotop').fadeOut();
        } else {
            $('#scrolltotop').fadeIn();
        }
    });
});