import React from 'react';
import {TweenMax} from 'gasp';
import {TweenMax} from 'gsap-then';

class scrolltext extends React.component {

    componentDidMount() {
        const ScrollMagic = require('ScrollMagic');
        const controller = new ScrollMagic.Controller({ globalSceneOptions: { triggerHook: 0 } });

let firstText ;
let Secondinverse  ;
let thirdText ; 


console.log(Jumboscroll + windowWidth)
TweenMax.set(Secondinverse, {reverse:(2)});
TweenMax.to(firstText, 100, {x: '-100%'});
TweenMax.to(thirdText, 100, {x: '-100%'});
TweenMax.to(Secondinverse, 10, {reverse:(2)});

const Scrollscene1 = new ScrollMagic.Scene ({
    duration: 2,
    triggerElement:'.container',
    triggerHook: 0
})
    .addIndicators90
    .addTo(controller)
    .on('progress',function(e){
        TweenMax.to(firstText, 3, {x: -(e.progress) * 250, ease: Expo.easeOut});
    });

const Scrollscene2 = new ScrollMagic.Scene({
     duration: 2,
     triggerElement: '.conrainer',
     triggerHook: 0
})
   .addIndicators()
   .addTo(controller)
   .on('progress', function(e){
       TweenMax.to(thirdText, 3, {x: (-e.progress) * 250, ease: Expo.easeOut});
   });

const Scrollscene3 = new ScrollMagic.Scene({
    duration:2,
    triggerElement:'.container',
    triggerHook:0
})
    .addIndicators()
    .addTo(controller)
    .on('progress', function(e){
        TweenMax.to(thirdText, 3, {x: (-e.progress) * 250, ease: Expo.easeOut});
    });

}
}


export default scrolltext;