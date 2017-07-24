/**
 * Created by radoka on 7/12/17.
 */

$(document).ready(function () {
    var $sidebar = $('#side-bar'),
        $window = $(window),
        $page = $("html, body");

    $window.scroll(function () {
        if ($window.scrollLeft() !== 0) {
            $sidebar.removeClass('side-bar-noscroll');
            $sidebar.addClass('side-bar-scroll');
            $('#icons-content').hide();
        } else {
            $sidebar.removeClass('side-bar-scroll');
            $sidebar.addClass('side-bar-noscroll');
            $('#icons-content').show();
        }
    });

    //bottom nav
    //$clickScroll = false;
    //$("a").click(function (e) {
    //    e.preventDefault();
    //    $this = $(this);
//
    //    $page.animate({
    //        scrollLeft: $($this.attr('href')).offset().left
    //    }, 2000, 'easeInOutQuart');
//
    //    $clickScroll = true;
//
    //    $('a').removeClass('a-active');
    //    $('a .tm').removeClass('tm-active');
    //    $($this).addClass('a-active');
    //    $('.tm-' + $($this).attr("href").substr(1, 10)).addClass('tm-active');
//
    //    return false
    //});
//
    //function showScroll() {
    //    $('.tm-one, .tm-two, .tm-three, .tm-four, .tm-five').removeClass('tm-active');
    //    $('a').removeClass('a-active');
    //    if ($window.scrollLeft() >= $('#one').offset().left) {
    //        $('.tm-five, .tm-two, .tm-three, .tm-four').removeClass('tm-active');
    //        $('.tm-one').addClass('tm-active');
    //    }
    //    if ($window.scrollLeft() >= $('#two').offset().left) {
    //        $('.tm-one, .tm-five, .tm-three, .tm-five').removeClass('tm-active');
    //        $('.tm-two').addClass('tm-active');
    //    }
    //    if ($window.scrollLeft() >= $('#three').offset().left) {
    //        $('.tm-one, .tm-two, .tm-four, .tm-five').removeClass('tm-active');
    //        $('.tm-three').addClass('tm-active');
    //    }
    //    if ($window.scrollLeft() >= $('#four').offset().left) {
    //        $('.tm-one, .tm-three, .tm-two, .tm-five').removeClass('tm-active');
    //        $('.tm-four').addClass('tm-active');
    //    }
    //    if ($window.scrollLeft() >= $('#five').offset().left) {
    //        $('.tm-one, .tm-three, .tm-four, .tm-two').removeClass('tm-active');
    //        $('.tm-five').addClass('tm-active');
    //    }
    //}
//
    //$window.scroll(function () {
    //    if ($(".a-active + a").length == 0) {
    //        if ($('.a-active .tm-active').length == 1 &&
    //            $window.scrollLeft() >= $("#" + ($('.a-active .tm-active').attr("class").split(" ")[1].substr(3, 10))).position().left) {
    //            $clickScroll = false;
    //        }
    //    }
    //    else if ($('.a-active .tm-active').length == 1 &&
    //        $window.scrollLeft() >= $("#" + ($('.a-active .tm-active').attr("class").split(" ")[1].substr(3, 10))).position().left &&
    //        $window.scrollLeft() <= $("#" + $(".a-active + a").attr("href").substr(1, 10)).position().left) {
    //        $clickScroll = false;
    //    }
//
    //    if (!$clickScroll) showScroll();
//
//
    //});

});
