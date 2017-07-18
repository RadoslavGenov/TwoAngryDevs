/**
 * Created by radoka on 7/12/17.
 */

function parallax() {
    var controller = new ScrollMagic.Controller({vertical: false}),
        tweenBG = new TimelineMax(),
        tweenSectionTwo = new TimelineMax(),
        tweenSectionFour = new TimelineMax(),
        tweenBulb = new TimelineMax(),
        tweenWord = new TimelineMax(),
        sceneBG = new ScrollMagic.Scene({
            triggerElement: '#bg',
            duration: $('#bg').width()
        }),
        sceneSectionTwo = new ScrollMagic.Scene({
            triggerElement: "#one",
            triggerHook: 0,
            duration: $(window).width()
        }),
        sceneSectionFour = new ScrollMagic.Scene({
            triggerElement: "#three",
            triggerHook: 0,
            duration: $(window).width()
        }),
        sceneBulb = new ScrollMagic.Scene({
            triggerElement: "#three",
            triggerHook: 0.5,
            duration: 700,
            tweenChanges: true
        }),
        sceneWord = new ScrollMagic.Scene({
            triggerElement: "#three",
            triggerHook: 0.5,
            duration: 700,
            tweenChanges: true
        }),
        $bulb = $(".st0"),
        $word = $(".st1"),
        bulbCollection = [],
        wordCollection = [];

    //parallax
    tweenBG.add([
        TweenMax.fromTo($('#bg-dots-one'), 1, {backgroundPosition: '0% 0%'}, {
            backgroundPosition: '-20% 0%',
            ease: Linear.easeNone
        })
    ]);

    //section tween
    tweenSectionTwo.add([
        TweenMax.fromTo('#container-section-two', 1, {autoAlpha: 0, x: 500}, {
            autoAlpha: 1,
            x: 0,
            ease: Linear.easeNone
        })
    ]);

    tweenSectionFour.add([
        TweenMax.fromTo('#container-section-four', 1, {autoAlpha: 0, x: 500}, {
            autoAlpha: 1,
            x: 0,
            ease: Linear.easeNone
        })
    ]);

    //svg drawing
    function pathPrepare($el) {
        var lineLength = $el[0].getTotalLength();
        $el.css("stroke-dasharray", lineLength);
        $el.css("stroke-dashoffset", lineLength);
    }

    // prepare SVG
    $.each($bulb, function (i, val) {
        pathPrepare($(val));
    });

    $.each($word, function (i, val) {
        pathPrepare($(val));
    });

    for (let i = 0; i < $bulb.length; i++) {
        bulbCollection[i] = TweenMax.fromTo($bulb[i], 1.4, {
            autoAlpha: 0,
            strokeDashoffset: $bulb[i].getTotalLength(),
            ease: Linear.easeNone
        }, {autoAlpha: 1, strokeDashoffset: 0, ease: Linear.easeNone})
    }


    for (let i = 0; i < $word.length; i++) {
        wordCollection[i] = TweenMax.fromTo($word[i], 0.2, {
            autoAlpha: 0,
            strokeDashoffset: $word[i].getTotalLength(),
            ease: Linear.easeNone
        }, {autoAlpha: 1, strokeDashoffset: 0, ease: Linear.easeNone})
    }

    tweenBulb.add(bulbCollection);
    tweenWord.add(wordCollection);

    sceneBG.setTween(tweenBG).addTo(controller);

    sceneSectionTwo.setTween(tweenSectionTwo).addTo(controller);

    sceneSectionFour.setTween(tweenSectionFour).addTo(controller);

    sceneBulb.setTween(tweenBulb).addTo(controller);

    sceneWord.setTween(tweenWord).addTo(controller);
}

parallax();
