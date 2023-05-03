

////////////////

const mFinal = document.querySelector("#m-final");
const iFinal = document.querySelector("#i-final");
const oFinal = document.querySelector("#o-final");
const tFinal = document.querySelector("#t-final");
const aFinal = document.querySelector("#a-final");
const eFinal = document.querySelector("#e-final");
const sFinal = document.querySelector("#s-final");

const m1Static = document.querySelector("#m-1");
const i1Static = document.querySelector("#i-1");
const o1Static = document.querySelector("#o-1");
const t1Static = document.querySelector("#t-1");
const a1Static = document.querySelector("#a-1");
const e1Static = document.querySelector("#e-1");
const s1Static = document.querySelector("#s-1");

const m2Static = document.querySelector("#m-2");
const i2Static = document.querySelector("#i-2");
const o2Static = document.querySelector("#o-2");
const t2Static = document.querySelector("#t-2");
const a2Static = document.querySelector("#a-2");
const e2Static = document.querySelector("#e-2");
const s2Static = document.querySelector("#s-2");

const mAnimated = document.querySelector("#m");
const iAnimated = document.querySelector("#i");
const oAnimated = document.querySelector("#o");
const tAnimated = document.querySelector("#t");
const aAnimated = document.querySelector("#a");
const eAnimated = document.querySelector("#e");
const sAnimated = document.querySelector("#s");

const m2Animated = document.querySelector("#m2");
const i2Animated = document.querySelector("#i2");
const o2Animated = document.querySelector("#o2");
const t2Animated = document.querySelector("#t2");
const a2Animated = document.querySelector("#a2");
const e2Animated = document.querySelector("#e2");
const s2Animated = document.querySelector("#s2");

function init(){
    matchLetterPosition(m1Static, mAnimated);
    matchLetterPosition(i1Static, iAnimated);
    matchLetterPosition(o1Static, oAnimated);
    matchLetterPosition(t1Static, tAnimated);
    matchLetterPosition(a1Static, aAnimated);
    matchLetterPosition(e1Static, eAnimated);
    matchLetterPosition(s1Static, sAnimated); 

    matchLetterPosition(m2Static, m2Animated);
  matchLetterPosition(i2Static, i2Animated);
  matchLetterPosition(o2Static, o2Animated);
  matchLetterPosition(t2Static, t2Animated);
  matchLetterPosition(a2Static, a2Animated);
  matchLetterPosition(e2Static, e2Animated);
  matchLetterPosition(s2Static, s2Animated);

  gsap.set(mFinal, { visibility: "hidden" });
  gsap.set(iFinal, { visibility: "hidden" });
  gsap.set(oFinal, { visibility: "hidden" });
  gsap.set(tFinal, { visibility: "hidden" });
  gsap.set(aFinal, { visibility: "hidden" });
  gsap.set(sFinal, { visibility: "hidden" });
  gsap.set(eFinal, { visibility: "hidden" });

  gsap.set('#title-final',{opacity:0})
  gsap.set('#letters-1',{opacity:0})
  gsap.set('#letters-2',{opacity:0})
  }

let tl2;
function createTimeline2(){
  tl2 = gsap.timeline()
    tl2.to('#letters-1',{opacity:1,duration:1})
  tl2.add("moveletter")
    tl2.to([mAnimated],{duration: 1,...moveLetter(m2Static, mAnimated),ease: Circ.easeOut,delay:1},"moveletter");
    tl2.to([iAnimated],{duration: 1,...moveLetter(i2Static, iAnimated),ease: Circ.easeOut,delay:1},"moveletter");
    tl2.to([oAnimated],{duration: 1,...moveLetter(o2Static, oAnimated),ease: Circ.easeOut,delay:1},"moveletter");
    tl2.to([tAnimated],{duration: 1,...moveLetter(t2Static, tAnimated),ease: Circ.easeOut,delay:1},"moveletter");
    tl2.to([aAnimated],{duration: 1,...moveLetter(a2Static, aAnimated),ease: Circ.easeOut,delay:1},"moveletter");
    tl2.to([eAnimated],{duration: 1,...moveLetter(e2Static, eAnimated),ease: Circ.easeOut,delay:1},"moveletter");
    tl2.to([sAnimated],{duration: 1,...moveLetter(s2Static, sAnimated),ease: Circ.easeOut,delay:1},"moveletter");

  tl2.add("opacityfade")
  tl2.to('#letters-1',{opacity:0,duration:0},"opacityfade");
  tl2.to('#letters-2',{opacity:1,duration:0},"opacityfade");

  tl2.add("moveletter2")
    tl2.to([m2Animated],{duration: 2,...moveLetter(mFinal, m2Animated),ease: Circ.easeOut,delay:0},"moveletter2");
    tl2.to([i2Animated],{duration: 2,...moveLetter(iFinal, i2Animated),ease: Circ.easeOut,delay:0},"moveletter2");
    tl2.to([o2Animated],{duration: 2,...moveLetter(oFinal, o2Animated),ease: Circ.easeOut,delay:0},"moveletter2");
    tl2.to([t2Animated],{duration: 2,...moveLetter(tFinal, t2Animated),ease: Circ.easeOut,delay:0},"moveletter2");
    tl2.to([a2Animated],{duration: 2,...moveLetter(aFinal, a2Animated),ease: Circ.easeOut,delay:0},"moveletter2");
    tl2.to([e2Animated],{duration: 2,...moveLetter(eFinal, e2Animated),ease: Circ.easeOut,delay:0},"moveletter2");
    tl2.to([s2Animated],{duration: 2,...moveLetter(sFinal, s2Animated),ease: Circ.easeOut,delay:0},"moveletter2");

    tl2.to('#title-final',{opacity:1,duration:2})

   tl2.play()
}

function matchLetterPosition(staticLetter, animatedLetter) {
    let boundsRel = staticLetter.getBoundingClientRect();
    let boundsAbs = animatedLetter.getBoundingClientRect();
    gsap.set(animatedLetter, {
      x: "+=" + (boundsRel.left - boundsAbs.left),
      y: "+=" + (boundsRel.top - boundsAbs.top),
    });
  }

  function moveLetter(staticLetter, animatedLetter) {
    let boundsRel = staticLetter.getBoundingClientRect();
    let boundsAbs = animatedLetter.getBoundingClientRect();
    // let parentRect = animatedLetter.parentElement.getBoundingClientRect();
    return {
      x: "+=" + (boundsRel.left - boundsAbs.left),
      y: "+=" + (boundsRel.top - boundsAbs.top),
    };
  }

  function moveX(staticLetter, animatedLetter) {
    let boundsRel = staticLetter.getBoundingClientRect();
    let boundsAbs = animatedLetter.getBoundingClientRect();
    console.log(boundsRel.left - boundsAbs.left);
    // let parentRect = animatedLetter.parentElement.getBoundingClientRect();
    return {
      x: "+=" + (boundsRel.left - boundsAbs.left),
    }; 
  }
  
  window.addEventListener("DOMContentLoaded", function () {
    (() =>
      setTimeout(() => {
        init()
        createTimeline2()
      }, 4000))();
  });
