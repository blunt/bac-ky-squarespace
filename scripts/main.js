// init controller
var controller = new ScrollMagic.Controller();

// create a scene
var scene1 = new ScrollMagic.Scene({
    triggerElement: '.menu',
    duration: '200%',   // the scene should last for a scroll distance of 100px
    tweenChanges: true,
    offset: -200      // start this scene after scrolling for 50px
})
.addTo(controller); // assign the scene to the controller

var timeline = new TimelineMax();
var image1 = $('.image-1');
var image2 = $('.image-2');
if ($(window).width() > 960) {
    var tween1 = TweenMax.fromTo(image1, 1, {y: 100}, {y: 50});
    var tween2 = TweenMax.fromTo(image2, 1, {y: 100}, {y: 0});
} else {
    var tween1 = TweenMax.fromTo(image1, 1, {y: 50}, {y: -50});
    var tween2 = TweenMax.fromTo(image2, 1, {y:-20}, {y: -80});
}
timeline
    .add(tween1)
    .add(tween2, '-=1');
scene1.setTween(timeline);


// create a scene
var scene2 = new ScrollMagic.Scene({
    triggerElement: '.mains',
    duration: '200%',   // the scene should last for a scroll distance of 100px
    tweenChanges: true,
    offset: -200      // start this scene after scrolling for 50px
})
.addTo(controller); // assign the scene to the controller

var timeline2 = new TimelineMax();
var image3 = $('.image-3');
var image4 = $('.image-4');
if ($(window).width() > 960) {
    var tween3 = TweenMax.fromTo(image3, 1, {y: -100}, {y: -150});
    var tween4 = TweenMax.fromTo(image4, 1, {y: -100}, {y: -200});
} else {
    var tween3 = TweenMax.fromTo(image3, 1, {y: 50}, {y: -50});
    var tween4 = TweenMax.fromTo(image4, 1, {y: -20}, {y: -80});
}
timeline2
    .add(tween3)
    .add(tween4, '-=1');
scene2.setTween(timeline2);



// create a scene
var scene3 = new ScrollMagic.Scene({
    triggerElement: '.drinks',
    duration: '200%',   // the scene should last for a scroll distance of 100px
    tweenChanges: true,
    offset: -400      // start this scene after scrolling for 50px
})
.addTo(controller); // assign the scene to the controller

var timeline3 = new TimelineMax();
var image5 = $('.image-5');
var tween5 = TweenMax.fromTo(image5, 1, {y: -300}, {y: -400});
timeline3
    .add(tween5);
scene3.setTween(timeline3);


$(".js_menu").click(function() {
    $('html, body').animate({
        scrollTop: $(".menu").offset().top
    }, 1000);
});

$(".js_location").click(function() {
    $('html, body').animate({
        scrollTop: $(".location").offset().top
    }, 1000);
});

AOS.init({
    disable: 'mobile'
});
