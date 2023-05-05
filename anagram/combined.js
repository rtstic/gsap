console.log('script is running');


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

//mobile declaration
const mFinalmobile = document.querySelector("#m-final-mobile");
const iFinalmobile = document.querySelector("#i-final-mobile");
const oFinalmobile = document.querySelector("#o-final-mobile");
const tFinalmobile = document.querySelector("#t-final-mobile");
const aFinalmobile = document.querySelector("#a-final-mobile");
const eFinalmobile = document.querySelector("#e-final-mobile");
const sFinalmobile = document.querySelector("#s-final-mobile");
const m11Static = document.querySelector("#m-1-1");
const i11Static = document.querySelector("#i-1-1");
const o11Static = document.querySelector("#o-1-1");
const t11Static = document.querySelector("#t-1-1");
const a11Static = document.querySelector("#a-1-1");
const e11Static = document.querySelector("#e-1-1");
const s11Static = document.querySelector("#s-1-1");
const m22Static = document.querySelector("#m-2-2");
const i22Static = document.querySelector("#i-2-2");
const o22Static = document.querySelector("#o-2-2");
const t22Static = document.querySelector("#t-2-2");
const a22Static = document.querySelector("#a-2-2");
const e22Static = document.querySelector("#e-2-2");
const s22Static = document.querySelector("#s-2-2");
const mAnimated2 = document.querySelector("#m-mob");
const iAnimated2 = document.querySelector("#i-mob");
const oAnimated2 = document.querySelector("#o-mob");
const tAnimated2 = document.querySelector("#t-mob");
const aAnimated2 = document.querySelector("#a-mob");
const eAnimated2 = document.querySelector("#e-mob");
const sAnimated2 = document.querySelector("#s-mob");

const m2Animated2 = document.querySelector("#m2-mob");
const i2Animated2 = document.querySelector("#i2-mob");
const o2Animated2 = document.querySelector("#o2-mob");
const t2Animated2 = document.querySelector("#t2-mob");
const a2Animated2 = document.querySelector("#a2-mob");
const e2Animated2 = document.querySelector("#e2-mob");
const s2Animated2 = document.querySelector("#s2-mob");

 gsap.set('#title-final',{opacity:0})
  gsap.set('#letters-1',{opacity:0})
  gsap.set('#letters-2',{opacity:0})

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

function init2(){
  matchLetterPosition(m11Static, mAnimated2);
  matchLetterPosition(i11Static, iAnimated2);
  matchLetterPosition(o11Static, oAnimated2);
  matchLetterPosition(t11Static, tAnimated2);
  matchLetterPosition(a11Static, aAnimated2);
  matchLetterPosition(e11Static, eAnimated2);
  matchLetterPosition(s11Static, sAnimated2); 

  matchLetterPosition(m22Static, m2Animated2);
  matchLetterPosition(i22Static, i2Animated2);
  matchLetterPosition(o22Static, o2Animated2);
  matchLetterPosition(t22Static, t2Animated2);
  matchLetterPosition(a22Static, a2Animated2);
  matchLetterPosition(e22Static, e2Animated2);
  matchLetterPosition(s22Static, s2Animated2);

  gsap.set(mFinalmobile, { visibility: "hidden" });
  gsap.set(iFinalmobile, { visibility: "hidden" });
  gsap.set(oFinalmobile, { visibility: "hidden" });
  gsap.set(tFinalmobile, { visibility: "hidden" });
  gsap.set(aFinalmobile, { visibility: "hidden" });
  gsap.set(sFinalmobile, { visibility: "hidden" });
  gsap.set(eFinalmobile, { visibility: "hidden" });
  gsap.set('#title-final-mobile',{opacity:0})
  gsap.set('#letters-1-mobile',{opacity:0})
  gsap.set('#letters-2-mobile',{opacity:0})
}

let tl2 , tl3;
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
  const moveDiv = document.getElementById('titleblock-1')
  const parentElement = document.getElementById('text-space')

 
  window.addEventListener("DOMContentLoaded", function () {
    (() =>
      setTimeout(() => {     
        init()  
        createTimeline2();
        if(this.window.innerWidth<990){
          init2();
        createTimeline3();
        }
       
      }, 2500))();
  });

 
  function createTimeline3(){
    tl3 = gsap.timeline()
      tl3.to('#letters-1-mobile',{opacity:1,duration:1})
    tl3.add("moveletter")
      tl3.to([mAnimated2],{duration: 1,...moveLetter(m22Static, mAnimated2),ease: Circ.easeOut,delay:1},"moveletter");
      tl3.to([iAnimated2],{duration: 1,...moveLetter(i22Static, iAnimated2),ease: Circ.easeOut,delay:1},"moveletter");
      tl3.to([oAnimated2],{duration: 1,...moveLetter(o22Static, oAnimated2),ease: Circ.easeOut,delay:1},"moveletter");
      tl3.to([tAnimated2],{duration: 1,...moveLetter(t22Static, tAnimated2),ease: Circ.easeOut,delay:1},"moveletter");
      tl3.to([aAnimated2],{duration: 1,...moveLetter(a22Static, aAnimated2),ease: Circ.easeOut,delay:1},"moveletter");
      tl3.to([eAnimated2],{duration: 1,...moveLetter(e22Static, eAnimated2),ease: Circ.easeOut,delay:1},"moveletter");
      tl3.to([sAnimated2],{duration: 1,...moveLetter(s22Static, sAnimated2),ease: Circ.easeOut,delay:1},"moveletter");
  
    tl3.add("opacityfade")
    tl3.to('#letters-1-mobile',{opacity:0,duration:0},"opacityfade");
    tl3.to('#letters-2-mobile',{opacity:1,duration:0},"opacityfade");
  
    tl3.add("moveletter2")
      tl3.to([m2Animated2],{duration: 2,...moveLetter(mFinalmobile, m2Animated2),ease: Circ.easeOut,delay:0},"moveletter2");
      tl3.to([i2Animated2],{duration: 2,...moveLetter(iFinalmobile, i2Animated2),ease: Circ.easeOut,delay:0},"moveletter2");
      tl3.to([o2Animated2],{duration: 2,...moveLetter(oFinalmobile, o2Animated2),ease: Circ.easeOut,delay:0},"moveletter2");
      tl3.to([t2Animated2],{duration: 2,...moveLetter(tFinalmobile, t2Animated2),ease: Circ.easeOut,delay:0},"moveletter2");
      tl3.to([a2Animated2],{duration: 2,...moveLetter(aFinalmobile, a2Animated2),ease: Circ.easeOut,delay:0},"moveletter2");
      tl3.to([e2Animated2],{duration: 2,...moveLetter(eFinalmobile, e2Animated2),ease: Circ.easeOut,delay:0},"moveletter2");
      tl2.to([s2Animated2],{duration: 2,...moveLetter(sFinalmobile, s2Animated2),ease: Circ.easeOut,delay:0},"moveletter2");
  
      tl3.to('#title-final-mobile',{opacity:1,duration:2})
  
     tl3.play()
  }


  //scroll animation on v5

  const block1 = document.getElementById('titleblock-1')
const block2 = document.getElementById('titleblock-2')
const block3 = document.getElementById('titleblock-3')
const block4 = document.getElementById('titleblock-4')

const visitedPosition = document.getElementById('visited-position');
const finalPosition = document.getElementById('final-position');
const initialPosition = document.getElementById('initial-position');
const preinitialPosition = document.getElementById('pre-initial-position');

gsap.set(visitedPosition, { visibility: "hidden" });
gsap.set(finalPosition,{visibility:'hidden'});
gsap.set(initialPosition,{visibility:"hidden"});
gsap.set(preinitialPosition,{visibility:"hidden"});



matchPosition(finalPosition,block1)
matchPosition(initialPosition,block2)
matchPosition(preinitialPosition,block3)
matchPosition(preinitialPosition,block4)

const lottieOne = document.getElementById('lottie-1');
const lottieTwo = document.getElementById('lottie-2');
const lottieThree = document.getElementById('lottie-3');

const activeLottie = document.getElementById('lottie-current');
const nextLottie = document.getElementById('lottie-next');
const prevLottie = document.getElementById('lottie-prev');

matchPosition(activeLottie,lottieOne)
matchPosition(nextLottie,lottieTwo)
matchPosition(nextLottie,lottieThree)



gsap.registerPlugin(ScrollTrigger);

let tl;
  
function createTimeline() {
      // if a timeline exists, save its progress and kill it
      let progress = tl ? tl.progress() : 0;
      tl && tl.progress(0).kill();
  
      tl && tl.progress(0).kill();
  
      // create our timeline
      tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#track",
          start: "top top", // when top of trigger div is at top of viewport
          end: "bottom bottom", // when bottom of trigger div is at bottom of viewport
          scrub: 2, // link to scroll
        },
      });

      
      tl.add('scroll1')
      tl.call(playLottie, [1]);
      tl.to([block1],{ duration: 8, ...moveTo(visitedPosition, block1) },'scroll1');
     

      tl.to([block1],{opacity:0.2,duration:2},'scroll1')
      tl.to([block2],{opacity:1,duration:2},'scroll1')

      tl.call(playLottie, [2]);
      tl.to([block2],{ duration: 20, ...moveTo(visitedPosition, block2),delay:0 },'scroll1');
      tl.to([lottieOne],{duration:20,...moveTo(prevLottie, lottieOne),delay:6},'scroll1');

      
      tl.to([block2],{opacity:0.2,duration:2,delay:6},'scroll1')
      tl.to([block3],{opacity:1,duration:2,delay:6},'scroll1')

      tl.call(playLottie, [3]);

      tl.to([block3],{ duration:36, ...moveTo(visitedPosition,block3),delay:4},'scroll1');
      tl.to([lottieTwo],{duration:30,...moveTo(prevLottie, lottieTwo),delay:8},'scroll1');

   
      tl.to([block3],{opacity:0.2,duration:2,delay:20},'scroll1')
      tl.to([block4],{opacity:1,duration:2,delay:20},'scroll1')

      tl.to([block4],{ duration: 24, ...moveTo(finalPosition,block4),delay:14},'scroll1')
      tl.to([lottieThree],{duration:20,...moveTo(activeLottie, lottieThree),delay:18},'scroll1');

      tl.progress(progress);
    }
function matchPosition(targetPosition, sourcePosition) {
    let boundsRel = targetPosition.getBoundingClientRect();
    let boundsAbs = sourcePosition.getBoundingClientRect();
    console.log('object');
    gsap.set(sourcePosition, {
    x: "+=" + (boundsRel.left - boundsAbs.left),
      y: "+=" + (boundsRel.top - boundsAbs.top),
    });
  }
  function moveTo(target, source) {
    let boundsRel = target.getBoundingClientRect();
    let boundsAbs = source.getBoundingClientRect();
    // let parentRect = animatedLetter.parentElement.getBoundingClientRect();
    return {
      x: "+=" + (boundsRel.left - boundsAbs.left),
      y: "+=" + (boundsRel.top - boundsAbs.top),
    };
  }

  function playLottie(number){
        document.getElementById(`lottieplay-${number}`).click();
  }

function handleResize(){
    matchPosition(finalPosition,block1)
    matchPosition(initialPosition,block2)
    createTimeline()
}
window.addEventListener("resize", handleResize);



window.addEventListener("DOMContentLoaded", function () {
    (() =>
      setTimeout(() => {
        if(this.window.innerWidth<990){
        console.log('mobile');
        //mobileScroll()
        }
        else{
          gsap.set([block2,block3,block4],{opacity:0.2})
          createTimeline()
          allowScroll()
        }
      }, 3000))();
  });



  let mtl;
  
  function mobileScroll() {
        // if a timeline exists, save its progress and kill it
        let progress = mtl ? mtl.progress() : 0;
        mtl && mtl.progress(0).kill();
    
        mtl && mtl.progress(0).kill();
    
        // create our timeline
        mtl = gsap.timeline({
          scrollTrigger: {
            trigger: "#track",
            start: "top top", // when top of trigger div is at top of viewport
            end: "bottom bottom", // when bottom of trigger div is at bottom of viewport
            scrub: 2, // link to scroll
          },
        });
  
        
        mtl.add('scroll1')
        mtl.call(playLottie, [1]);
        mtl.to([block1],{ duration: 8, ...moveTo(visitedPosition, block1) },'scroll1');
       
        
        mtl.to([block1],{opacity:0.2,duration:2},'scroll1')
        mtl.to([block2],{opacity:1,duration:2},'scroll1')
  
        
        mtl.to([block2],{ duration: 18, ...moveTo(visitedPosition, block2),delay:0 },'scroll1');
        mtl.call(playLottie, [2] );
        mtl.to([lottieOne],{duration:20,...moveTo(prevLottie, lottieOne),delay:8},'scroll1');
  
        
        mtl.to([block2],{opacity:0.2,duration:2,delay:6},'scroll1')
        mtl.to([block3],{opacity:1,duration:2,delay:10},'scroll1')
  
        mtl.call(playLottie, [3]);
  
        mtl.to([block3],{ duration:24, ...moveTo(visitedPosition,block3),delay:6},'scroll1');
        mtl.to([lottieTwo],{duration:30,...moveTo(prevLottie, lottieTwo),delay:10},'scroll1');
  
     
        mtl.to([block3],{opacity:0.2,duration:2,delay:18},'scroll1')
        mtl.to([block4],{opacity:1,duration:2,delay:22},'scroll1')
  
        mtl.to([block4],{ duration: 24, ...moveTo(finalPosition,block4),delay:15},'scroll1')
        mtl.to([lottieThree],{duration:20,...moveTo(activeLottie, lottieThree),delay:18},'scroll1');
  
        mtl.progress(progress);
      }

function mobileScroll2(){

}

function allowScroll() {
  setTimeout(function() {
    document.getElementById('when-visible').style.display='none'
  }, 5000);
}
