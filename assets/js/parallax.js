/**
 * Created by radoka on 7/12/17.
 */

function parallax() {
    var controller = new ScrollMagic.Controller({vertical: false});
    var $bulb = $(".st0"),
        $word = $(".st1");

    var tweenBG = new TimelineMax()
        .add([
            TweenMax.fromTo($('#bg-dots-one'), 1, {backgroundPosition: '0% 0%'}, {
                backgroundPosition: '-20% 0%',
                ease: Linear.easeNone
            })
        ]);

    var tweenSectionTwo = new TimelineMax()
        .add([
            TweenMax.fromTo('#container-section-two', 1, {autoAlpha: 0, x: 500}, {
                autoAlpha: 1,
                x: 0,
                ease: Linear.easeNone
            })
        ]);

    var tweenSectionFour = new TimelineMax()
        .add([
            TweenMax.fromTo('#container-section-four', 1, {autoAlpha: 0, x: 500}, {
                autoAlpha: 1,
                x: 0,
                ease: Linear.easeNone
            })
        ]);


    function pathPrepare($el) {
        var lineLength = $el[0].getTotalLength();
        $el.css("stroke-dasharray", lineLength);
        $el.css("stroke-dashoffset", lineLength);
    }

    // prepare SVG
    $.each($bulb, function (i, val) {
        pathPrepare($(val));
    });
    // prepare SVG
    $.each($word, function (i, val) {
        pathPrepare($(val));
    });

    // build tween
    var tweenBulb = new TimelineMax()
        .add([

            TweenMax.fromTo($bulb[0], 1.4, {
                autoAlpha: 0,
                strokeDashoffset: $bulb[0].getTotalLength(),
                ease: Linear.easeNone
            }, {autoAlpha: 1, strokeDashoffset: 0, ease: Linear.easeNone}),
            TweenMax.fromTo($bulb[1], 1.4, {
                autoAlpha: 0,
                strokeDashoffset: $bulb[1].getTotalLength(),
                ease: Linear.easeNone
            }, {autoAlpha: 1, strokeDashoffset: 0, ease: Linear.easeNone}),
            TweenMax.fromTo($bulb[2], 1.4, {
                autoAlpha: 0,
                strokeDashoffset: $bulb[2].getTotalLength(),
                ease: Linear.easeNone
            }, {autoAlpha: 1, strokeDashoffset: 0, ease: Linear.easeNone}),
            TweenMax.fromTo($bulb[3], 1.4, {
                autoAlpha: 0,
                strokeDashoffset: $bulb[3].getTotalLength(),
                ease: Linear.easeNone
            }, {autoAlpha: 1, strokeDashoffset: 0, ease: Linear.easeNone}),
            TweenMax.fromTo($bulb[4], 1.4, {
                autoAlpha: 0,
                strokeDashoffset: $bulb[4].getTotalLength(),
                ease: Linear.easeNone
            }, {autoAlpha: 1, strokeDashoffset: 0, ease: Linear.easeNone}),
            TweenMax.fromTo($bulb[5], 1.4, {
                autoAlpha: 0,
                strokeDashoffset: $bulb[5].getTotalLength(),
                ease: Linear.easeNone
            }, {autoAlpha: 1, strokeDashoffset: 0, ease: Linear.easeNone}),
            TweenMax.fromTo($bulb[6], 1.4, {
                autoAlpha: 0,
                strokeDashoffset: $bulb[6].getTotalLength(),
                ease: Linear.easeNone
            }, {autoAlpha: 1, strokeDashoffset: 0, ease: Linear.easeNone}),
            TweenMax.fromTo($bulb[7], 1.4, {
                autoAlpha: 0,
                strokeDashoffset: $bulb[7].getTotalLength(),
                ease: Linear.easeNone
            }, {autoAlpha: 1, strokeDashoffset: 0, ease: Linear.easeNone}),
            TweenMax.fromTo($bulb[8], 1.4, {
                autoAlpha: 0,
                strokeDashoffset: $bulb[8].getTotalLength(),
                ease: Linear.easeNone
            }, {autoAlpha: 1, strokeDashoffset: 0, ease: Linear.easeNone}),
            TweenMax.fromTo($bulb[9], 1.4, {
                autoAlpha: 0,
                strokeDashoffset: $bulb[9].getTotalLength(),
                ease: Linear.easeNone
            }, {autoAlpha: 1, strokeDashoffset: 0, ease: Linear.easeNone}),
            TweenMax.fromTo($bulb[10], 1.4, {
                autoAlpha: 0,
                strokeDashoffset: $bulb[10].getTotalLength(),
                ease: Linear.easeNone
            }, {autoAlpha: 1, strokeDashoffset: 0, ease: Linear.easeNone}),
            TweenMax.fromTo($bulb[11], 1.4, {
                autoAlpha: 0,
                strokeDashoffset: $bulb[11].getTotalLength(),
                ease: Linear.easeNone
            }, {autoAlpha: 1, strokeDashoffset: 0, ease: Linear.easeNone})
        ]);// change color during the whole thing

    // build tween
    var tweenWord = new TimelineMax()
        .add(
            TweenMax.fromTo($word[0], 0.2, {
                autoAlpha: 0,
                strokeDashoffset: $word[0].getTotalLength(),
                ease: Linear.easeNone
            }, {autoAlpha: 1, strokeDashoffset: 0, ease: Linear.easeNone}))
        .add(
            TweenMax.fromTo($word[1], 0.2, {
                autoAlpha: 0,
                strokeDashoffset: $word[1].getTotalLength(),
                ease: Linear.easeNone
            }, {autoAlpha: 1, strokeDashoffset: 0, ease: Linear.easeNone}))
        .add(
            TweenMax.fromTo($word[2], 0.2, {
                autoAlpha: 0,
                strokeDashoffset: $word[2].getTotalLength(),
                ease: Linear.easeNone
            }, {autoAlpha: 1, strokeDashoffset: 0, ease: Linear.easeNone}))
        .add(
            TweenMax.fromTo($word[3], 0.2, {
                autoAlpha: 0,
                strokeDashoffset: $word[3].getTotalLength(),
                ease: Linear.easeNone
            }, {autoAlpha: 1, strokeDashoffset: 0, ease: Linear.easeNone}))
        .add(
            TweenMax.fromTo($word[4], 0.2, {
                autoAlpha: 0,
                strokeDashoffset: $word[4].getTotalLength(),
                ease: Linear.easeNone
            }, {autoAlpha: 1, strokeDashoffset: 0, ease: Linear.easeNone}))
        .add(
            TweenMax.fromTo($word[5], 0.2, {
                autoAlpha: 0,
                strokeDashoffset: $word[5].getTotalLength(),
                ease: Linear.easeNone
            }, {autoAlpha: 1, strokeDashoffset: 0, ease: Linear.easeNone}))
        .add(
            TweenMax.fromTo($word[6], 0.2, {
                autoAlpha: 0,
                strokeDashoffset: $word[6].getTotalLength(),
                ease: Linear.easeNone
            }, {autoAlpha: 1, strokeDashoffset: 0, ease: Linear.easeNone}))
        .add(
            TweenMax.fromTo($word[7], 0.3, {
                autoAlpha: 0,
                strokeDashoffset: $word[7].getTotalLength(),
                ease: Linear.easeNone
            }, {autoAlpha: 1, strokeDashoffset: 0, ease: Linear.easeNone}))
        .add(
            TweenMax.fromTo($word[8], 0.3, {
                autoAlpha: 0,
                strokeDashoffset: $word[8].getTotalLength(),
                ease: Linear.easeNone
            }, {autoAlpha: 1, strokeDashoffset: 0, ease: Linear.easeNone}))
        .add(
            TweenMax.fromTo($word[9], 0.3, {
                autoAlpha: 0,
                strokeDashoffset: $word[9].getTotalLength(),
                ease: Linear.easeNone
            }, {autoAlpha: 1, strokeDashoffset: 0, ease: Linear.easeNone}));// change color during the whole thing

    var sceneBG = new ScrollMagic.Scene({triggerElement: '#bg', duration: $('#bg').width()})
        .setTween(tweenBG)
        //.addIndicators() // add indicators (requires plugin) **** shows where trigger begins and end
        .addTo(controller);

    var sceneSectionTwo = new ScrollMagic.Scene({triggerElement: "#one", triggerHook: 0, duration: $(window).width()})
        .setTween(tweenSectionTwo)
        //.addIndicators() // add indicators (requires plugin) **** shows where trigger begins and end
        .addTo(controller);

    var sceneSectionFour = new ScrollMagic.Scene({
        triggerElement: "#three",
        triggerHook: 0,
        duration: $(window).width()
    })
        .setTween(tweenSectionFour)
        //.addIndicators() // add indicators (requires plugin) **** shows where trigger begins and end
        .addTo(controller);

    // build scene
    var sceneBulb = new ScrollMagic.Scene({
        triggerElement: "#three",
        triggerHook: 0.5,
        duration: 700,
        tweenChanges: true
    })
        .setTween(tweenBulb)
        //.addIndicators() // add indicators (requires plugin)
        .addTo(controller);

    // build scene
    var sceneWord = new ScrollMagic.Scene({
        triggerElement: "#three",
        triggerHook: 0.5,
        duration: 700,
        tweenChanges: true
    })
        .setTween(tweenWord)
        //.addIndicators() // add indicators (requires plugin)
        .addTo(controller);
}

parallax();
