/**
 * Created by radoka on 7/12/17.
 */

function parallaxSectionOne() {
    // parallax script
    var controller = new ScrollMagic.Controller({vertical: false});

    $title = $("#title");
    $content = $("#intro-content");

    var tween = new TimelineMax()
        .add([
            TweenMax.fromTo($title, 1, {autoAlpha: 1}, {autoAlpha: 0}),
            TweenMax.fromTo($content, 1, {autoAlpha: 1}, {autoAlpha: 0})
        ]);

    var scene = new ScrollMagic.Scene({triggerElement: "#one", triggerHook: 0, duration: $('html').width() - 400})
        .setTween(tween)
        //.addIndicators() // add indicators (requires plugin) **** shows where trigger begins and end
        .addTo(controller);
}

parallaxSectionOne();
