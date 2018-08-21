import React from 'react';
import {TweenMax, ease, Expo } from 'gsap-then';
import scrollmagic from 'scrollmagic';

class introtext extends React.component {
    constructor(props){
        super(props);
        this.firstText;
        this.Secondinverse;
        this.thirdText;
    }



    componentDidMount() {
        const ScrollMagic = require('scrollmagic');
        const TweenMax = require('gsap-then');
        const controller = new ScrollMagic.Controller({ globalSceneOptions: { triggerHook: 0 } });

let firstText = firstText;
let Secondinverse = Secondinverse;
let thirdText = thirdText ; 


console.log('scroll magic')
TweenMax.set(Secondinverse, {reverse:(2), x:'100%'});
TweenMax.to(firstText, 100, {x: '-100%'});
TweenMax.to(thirdText, 100, {x: '-100%'});
TweenMax.to(Secondinverse, 10, {reverse:(2), x:'100%'});

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
     triggerElement: '.container',
     triggerHook: 0
})
   .addIndicators()
   .addTo(controller)
   .on('progress', function(e){
       TweenMax.to(Secondinverse, 3, {x: (-e.progress) * 250, ease: Expo.easeOut});
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
}0


export default introtext;