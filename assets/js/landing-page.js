/**
 * Created by radoka on 7/12/17.
 */

$(document).ready(function () {

    $(".navigator a").on('click', function (e) {
        e.preventDefault();
        $this = $(this);

        $('html, body').animate({
            scrollLeft: $($this.attr('href')).offset().left
        }, 1000);

    });

    $(window).scroll(function () {
        if ($(window).scrollLeft() >= $('#one').offset().left - 500) {
            $('.tm-five, .tm-two, .tm-three, .tm-four').removeClass('tm-active').removeClass('a-active');
            $('.tm-one').addClass('tm-active');
        }
        if ($(window).scrollLeft() >= $('#two').offset().left - 500) {
            $('.tm-one, .tm-five, .tm-three, .tm-five').removeClass('tm-active').removeClass('a-active');
            $('.tm-two').addClass('tm-active');
        }
        if ($(window).scrollLeft() >= $('#three').offset().left - 500) {
            $('.tm-one, .tm-two, .tm-four, .tm-five').removeClass('tm-active').removeClass('a-active');
            $('.tm-three').addClass('tm-active');
        }
        if ($(window).scrollLeft() >= $('#four').offset().left - 500) {
            $('.tm-one, .tm-three, .tm-two, .tm-five').removeClass('tm-active').removeClass('a-active');
            $('.tm-four').addClass('tm-active');
        }
        if ($(window).scrollLeft() >= $('#five').offset().left - 500) {
            $('.tm-one, .tm-three, .tm-four, .tm-two').removeClass('tm-active').removeClass('a-active');
            $('.tm-five').addClass('tm-active');
        }
    });

});