


const lottieTimeout = 600;
const lottieSwiper = new Swiper(".lottie-swiper", {
  direction: "vertical",
  loop: false,
  spaceBetween: 0,
  centeredSlides: false,
  slidesPerView: 1,
  mousewheel: true,
  speed: 1100,
  effect: "slide",
  slideEffect: {
    easing: "easeOutQuart",
  },
});
const triggerSwiper = new Swiper(".trigger-swiper", {
  direction: "vertical",
  loop: false,
  spaceBetween: 0,
  centeredSlides: false,
  slidesPerView: 1.3,
  mousewheel: true,
  speed: 1000,
  effect: "slide",
  slideEffect: {
    easing: "easeOutQuart",
  },
});
//initialisation
const targetElements = document.querySelectorAll('.title-text');
if (window.innerWidth <= 768) {
  targetElements[1].style.transform = 'translateY(-3vh)';
  // Apply other mobile-specific styles as needed
} else {
  targetElements[1].style.transform = 'translateY(-25vh)';
  // Apply other styles for non-mobile devices
}

targetElements[1].style.opacity = 0.2;

triggerSwiper.on('slideChange', function () {
  const activeIndex = triggerSwiper.activeIndex;
  //console.log('Active Index:', activeIndex);
  const activeSlide = triggerSwiper.slides[triggerSwiper.activeIndex]; 
  // Get all elements with the target class
  // const targetElements = document.querySelectorAll('.title-text');
  // Iterate through each target element
  targetElements.forEach(function (targetElement) {
        // Check if the target element is not inside the active slide
        if (activeSlide.contains(targetElement)) {
            targetElement.style.transform = 'translateY(0vh)';
            targetElement.style.opacity = 1;
            // Add or modify other properties as needed
        }
        else{
          if (window.innerWidth <= 768) {
            targetElement.style.transform = 'translateY(-3vh)';
            // Apply other mobile-specific styles as needed
        } else {
            targetElement.style.transform = 'translateY(-25vh)';
            // Apply other styles for non-mobile devices
        }
         
          targetElement.style.opacity = 0.2;
        }
    });
  // Disable sliding to next slide if active index is 3
  if (activeIndex === 3) {
      triggerSwiper.allowSlideNext = false;
  } else {
      triggerSwiper.allowSlideNext = true;
  }
  //scroll to the corresponding lottie
  if(activeIndex ===0){
    console.log('no action');
    freezeSlide();
  }
  if(activeIndex==1){
    lottieSwiper.slideTo(0)
    freezeSlide(1200);
    setTimeout(function() {
      document.getElementById('lottie-1').click();
    }, lottieTimeout);
  }
  if(activeIndex==2){
    lottieSwiper.slideTo(1);
    document.getElementById('show-button').click()
    freezeSlide(1200);
    setTimeout(function() {
      document.getElementById('lottie-2').click();
    }, lottieTimeout);
  }
  if(activeIndex==3){
    lottieSwiper.slideTo(2)
    document.getElementById('hide-button').click()
    setTimeout(function() {
      document.getElementById('lottie-3').click();
    }, lottieTimeout);
    setTimeout(function() {
      document.getElementById('show-footer').click();
    }, 2500);
    freezeSlide(2000)
    // triggerSwiper.allowSlideNext = false;
    // triggerSwiper.allowSlidePrev = false;
    // setTimeout(() => {
    // triggerSwiper.allowSlideNext = false;
    // triggerSwiper.allowSlidePrev = true;
    //   }, 2000);
  }
});

function freezeSlide(duration){
  triggerSwiper.allowSlideNext = false;
  triggerSwiper.allowSlidePrev = false;
  setTimeout(() => {
    triggerSwiper.allowSlideNext = true;
    triggerSwiper.allowSlidePrev = true;
      }, duration);
}

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById('scroll-btn').addEventListener("click", function() {
    triggerSwiper.slideNext();
  });
  document.getElementById('show-button').click()
});





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
  gsap.set('#letters-1',{opacity:1})
  gsap.set('#letters-2',{opacity:0})
  }

let tl;
function createTimeline(){
  tl = gsap.timeline()
    
  tl.add("moveletter")
    tl.to([mAnimated],{duration: 1,...moveLetter(m2Static, mAnimated),ease: Circ.easeOut,delay:2},"moveletter");
    tl.to([iAnimated],{duration: 1,...moveLetter(i2Static, iAnimated),ease: Circ.easeOut,delay:2},"moveletter");
    tl.to([oAnimated],{duration: 1,...moveLetter(o2Static, oAnimated),ease: Circ.easeOut,delay:2},"moveletter");
    tl.to([tAnimated],{duration: 1,...moveLetter(t2Static, tAnimated),ease: Circ.easeOut,delay:2},"moveletter");
    tl.to([aAnimated],{duration: 1,...moveLetter(a2Static, aAnimated),ease: Circ.easeOut,delay:2},"moveletter");
    tl.to([eAnimated],{duration: 1,...moveLetter(e2Static, eAnimated),ease: Circ.easeOut,delay:2},"moveletter");
    tl.to([sAnimated],{duration: 1,...moveLetter(s2Static, sAnimated),ease: Circ.easeOut,delay:2},"moveletter");

  tl.add("opacityfade")
  tl.to('#letters-1',{opacity:0,duration:0},"opacityfade");
  tl.to('#letters-2',{opacity:1,duration:0},"opacityfade");

  tl.add("moveletter2")
    tl.to([m2Animated],{duration: 2,...moveLetter(mFinal, m2Animated),ease: Circ.easeOut,delay:0},"moveletter2");
    tl.to([i2Animated],{duration: 2,...moveLetter(iFinal, i2Animated),ease: Circ.easeOut,delay:0},"moveletter2");
    tl.to([o2Animated],{duration: 2,...moveLetter(oFinal, o2Animated),ease: Circ.easeOut,delay:0},"moveletter2");
    tl.to([t2Animated],{duration: 2,...moveLetter(tFinal, t2Animated),ease: Circ.easeOut,delay:0},"moveletter2");
    tl.to([a2Animated],{duration: 2,...moveLetter(aFinal, a2Animated),ease: Circ.easeOut,delay:0},"moveletter2");
    tl.to([e2Animated],{duration: 2,...moveLetter(eFinal, e2Animated),ease: Circ.easeOut,delay:0},"moveletter2");
    tl.to([s2Animated],{duration: 2,...moveLetter(sFinal, s2Animated),ease: Circ.easeOut,delay:0},"moveletter2");

    tl.to('#title-final',{opacity:1,duration:2})

   tl.play()
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
        createTimeline()
        freezeSlide(6000)
      }, 3000))();
  });
