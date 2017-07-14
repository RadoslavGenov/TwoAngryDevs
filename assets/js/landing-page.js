/**
 * Created by radoka on 7/12/17.
 */

$(document).ready(function () {
    //side nav
    $("#nav-side a").click(function (e) {
        e.preventDefault();
        $this = $(this);
        $($(this) + '  .nav-label').addClass('nav-hover');
        console.log($('.nav-label'));

        $("html, body").stop().animate({
            scrollLeft: $($this.attr('href')).offset().left
        }, 2000, 'linear');

        return false
    });


    //bottom nav
    $("a").click(function (e) {
        e.preventDefault();
        $this = $(this);

        $('html, body').animate({
            scrollLeft: $($this.attr('href')).offset().left
        }, 1000);

        $('a').removeClass('a-active');
        $('a .tm').removeClass('tm-active');
        $($this).addClass('a-active');

        return false
    });

    $(window).scroll(function () {
        if ($(window).scrollLeft() >= $('#one').offset().left - 500) {
            $('.tm-five, .tm-two, .tm-three, .tm-four').removeClass('tm-active');
            $('.tm-one').addClass('tm-active');
        }
        if ($(window).scrollLeft() >= $('#two').offset().left - 500) {
            $('.tm-one, .tm-five, .tm-three, .tm-five').removeClass('tm-active');
            $('.tm-two').addClass('tm-active');
        }
        if ($(window).scrollLeft() >= $('#three').offset().left - 500) {
            $('.tm-one, .tm-two, .tm-four, .tm-five').removeClass('tm-active');
            $('.tm-three').addClass('tm-active');
        }
        if ($(window).scrollLeft() >= $('#four').offset().left - 500) {
            $('.tm-one, .tm-three, .tm-two, .tm-five').removeClass('tm-active');
            $('.tm-four').addClass('tm-active');
        }
        if ($(window).scrollLeft() >= $('#five').offset().left - 500) {
            $('.tm-one, .tm-three, .tm-four, .tm-two').removeClass('tm-active');
            $('.tm-five').addClass('tm-active');
        }
    });
});
