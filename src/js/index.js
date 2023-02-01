import $, { css } from 'jquery';

$(function () {
    // do stuff

    //NAV MENU
    $('.mobile-nav-btn').click(() => {
        const display = $('.header-navigation').css('display');

        display == 'block'
            ? $('.header-navigation').css({ display: 'none' })
            : $('.header-navigation').css({ display: 'block' });
    });
    $(window).resize(() => {
        const display = $('.header-navigation').css('display');

        if ($(window).width() > 768 && display == 'none') {
            $('.header-navigation').css({ display: 'block' });
        } else if ($(window).width() <= 768 && display == 'block') {
            $('.header-navigation').css({ display: 'none' });
        }
    });
});
