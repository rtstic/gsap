/* title block ZERO */
const title1Nospan = document.querySelector("#title-1-nospan");

/* title block ONE */
const title1Static = document.querySelector("#title-1-static");//for text animation inital position
const title2Animated = document.querySelector("#title-2-animated");//for text animation final position
const title2Nospan = document.querySelector("#title-2-nospan");//for fade in animation
//split spans
splitSpans(title1Static, "title1static");
splitSpans(title2Animated, "title2animated");
//initial position
const m1Static = document.querySelector("#m1-static");
const i1Static = document.querySelector("#i1-static");
const o1Static = document.querySelector("#o1-static");
const t1Static = document.querySelector("#t1-static");
const a1Static = document.querySelector("#a1-static");
const e1Static = document.querySelector("#e1-static");
const s1Static = document.querySelector("#s1-static");
//final position 
const m2Animated = document.querySelector("#m2-animated");
const i2Animated = document.querySelector("#i2-animated");
const o2Animated = document.querySelector("#o2-animated");
const t2Animated = document.querySelector("#t2-animated");
const a2Animated = document.querySelector("#a2-animated");
const e2Animated = document.querySelector("#e2-animated");
const s2Animated = document.querySelector("#s2-animated");
//animated letters
const m1 = document.querySelector("#m1");
const i1 = document.querySelector("#i1");
const o1= document.querySelector("#o1");
const t1 = document.querySelector("#t1");
const a1 = document.querySelector("#a1");
const e1= document.querySelector("#e1");
const s1 = document.querySelector("#s1");
//match initail letter position
matchLetterPosition(m1Static, m1);
matchLetterPosition(i1Static, i1);
matchLetterPosition(o1Static, o1);
matchLetterPosition(t1Static, t1);
matchLetterPosition(a1Static, a1);
matchLetterPosition(e1Static, e1);
matchLetterPosition(s1Static, s1);

/* title block TWO */


//initialize on page load
gsap.set(".title-block-0", { opacity: 1 });
gsap.set(".title-block-1", { opacity: 0 });
gsap.set(".title-block-1", { opacity: 0 });
gsap.set(".animated-letters-1", { opacity: 0 });
gsap.set(".animated-letters-2", { opacity: 0 });
gsap.set(".animated-letters-3", { opacity: 0 });

//declare swiper
let activeIndex;
let visitedZero = true;
let visitedOne = false;
let visitedTwo = false;
let visitedThree = false;

document.addEventListener("DOMContentLoaded", () => {
  //SET SWIPER
  const swiper = new Swiper(".myswiper", {
    // Optional parameters
    direction: "vertical",
    loop: false,
    spaceBetween: 0,
    centeredSlides: false,
    slidesPerView: 1,
    mousewheel: true,
    speed: 1000,
    effect: "slide",
    slideEffect: {
      easing: "easeOutQuart",
    },
    on: {
      slideChange: function () {
        activeIndex = this.activeIndex;
        console.log("Active Index:", activeIndex);
        if (activeIndex === 0) {
            gsap.to(".title-block-1", { opacity: 0 });
            gsap.to(".title-block-0", { opacity: 1 });//changes
          title1FadeIn();
        }
        if (activeIndex === 1) {
          gsap.to(".title-block-1", { opacity: 1 });
          gsap.to(".title-block-0", { opacity: 0 });
          if (visitedOne) {
            console.log("perform fadin for title2");
            title2fadein();
          } else {
            console.log("perform text animtion to reveal title two");
            titile2TextAnimation();
            visitedOne = true;
          }
        }
        if (activeIndex === 2) {
          if (visitedTwo) {
            console.log("perfrom fade in for title three");
          } else {
            console.log("perfrom text animation to reveal title three");
            visitedTwo = true;
          }
        }
        if (activeIndex === 3) {
          if (visitedThree) {
            console.log("perform fade in for title four");
          } else {
            console.log("perfrom text animation to reveal title four");
            visitedThree = true;
          }
        }
      },
    },
  });
});

//matching the animated lettrs to the static letter position
function matchLetterPosition(staticLetter, animatedLetter) {
  let boundsRel = staticLetter.getBoundingClientRect();
  let boundsAbs = animatedLetter.getBoundingClientRect();
  gsap.set(animatedLetter, {
    x: "+=" + (boundsRel.left - boundsAbs.left),
    y: "+=" + (boundsRel.top - boundsAbs.top),
  });
}

//split spans and divs inbetween spans
function splitSpans(title, className) {
    const spans = title.querySelectorAll("span");
    const text = title.textContent;
    const output = [];
    let lastIndex = 0;
  
    spans.forEach((span) => {
      const startIndex = text.indexOf(span.textContent, lastIndex);
      const endIndex = startIndex + span.textContent.length;
      const beforeText = text.slice(lastIndex, startIndex);
      const spanElement = span.cloneNode(true);
  
      output.push(beforeText, spanElement);
      lastIndex = endIndex;
    });
  
    output.push(text.slice(lastIndex));
  
    for (let i = 0; i < output.length; i++) {
      if (output[i].nodeName !== "SPAN") {
        const newDiv = document.createElement("div");
        newDiv.classList.add(className);
        newDiv.textContent = output[i];
        output[i] = newDiv;
      }
    }
  
    title.textContent = "";
    output.forEach((element) => {
      title.appendChild(element);
    });
  }

  //move letter
  function moveX(staticLetter, animatedLetter) {
    let boundsRel = staticLetter.getBoundingClientRect();
    let boundsAbs = animatedLetter.getBoundingClientRect();
    console.log(boundsRel.left - boundsAbs.left);
    // let parentRect = animatedLetter.parentElement.getBoundingClientRect();
    return {
      x: "+=" + (boundsRel.left - boundsAbs.left),
    }; 
  }
  function moveY(staticLetter, animatedLetter) {
    let boundsRel = staticLetter.getBoundingClientRect();
    let boundsAbs = animatedLetter.getBoundingClientRect();
    console.log(boundsRel.left - boundsAbs.left);
    // let parentRect = animatedLetter.parentElement.getBoundingClientRect();
    return {
        y: "+=" + (boundsRel.top - boundsAbs.top),
    }; 
  }

//title1 fade in
function title1FadeIn() {
allZero();
  gsap.to([title1Nospan], { opacity: 1, duration: 1 ,delay:0.5});
  gsap.set(".animated-letters-1", { opacity: 0 });
}
//title 2 fade in
function title2fadein() {
  allZero();
  gsap.to([title2Nospan], { opacity: 1, duration: 1 ,delay:0.5});
}
//title2 text animation
function titile2TextAnimation() {
//initialization
gsap.to([title1Nospan], { opacity: 0});
  gsap.to([title1Static], { opacity: 1 });
  gsap.set([title2Animated], { opacity: 0 });
  gsap.set([title2Nospan], { opacity: 0 });
  gsap.set(".animated-letters-1", { opacity: 1 });
  //animation starts
  gsap.to([title1Static], { opacity: 0 ,duration:1,delay:1});
//animate x positions
  gsap.to([m1],{ duration: 2, ...moveX(m2Animated, m1),ease: Circ.easeOut,delay:2});
  gsap.to([i1],{ duration: 2, ...moveX(i2Animated, i1),ease: Circ.easeOut,delay:2});
  gsap.to([o1],{ duration: 2, ...moveX(o2Animated, o1),ease: Circ.easeOut,delay:2});
  gsap.to([t1],{ duration: 2, ...moveX(t2Animated, t1),ease: Circ.easeOut,delay:2});
  gsap.to([a1],{ duration: 2, ...moveX(a2Animated, a1),ease: Circ.easeOut,delay:2});
  gsap.to([e1],{ duration: 2, ...moveX(e2Animated, e1),ease: Circ.easeOut,delay:2});
  gsap.to([s1],{ duration: 2, ...moveX(s2Animated, s1),ease: Circ.easeOut,delay:2});
//animate y positions
  gsap.to([m1],{ duration: 1, ...moveY(m2Animated, m1),ease: Circ.easeOut,delay:4});
  gsap.to([i1],{ duration: 1, ...moveY(i2Animated, i1),ease: Circ.easeOut,delay:4});
  gsap.to([o1],{ duration: 1, ...moveY(o2Animated, o1),ease: Circ.easeOut,delay:4});
  gsap.to([t1],{ duration: 1, ...moveY(t2Animated, t1),ease: Circ.easeOut,delay:4});
  gsap.to([a1],{ duration: 1, ...moveY(a2Animated, a1),ease: Circ.easeOut,delay:4});
  gsap.to([e1],{ duration: 1, ...moveY(e2Animated, e1),ease: Circ.easeOut,delay:4});
  gsap.to([s1],{ duration: 1, ...moveY(s2Animated, s1),ease: Circ.easeOut,delay:4});
//play lottie along with y movement
  gsap.to([title2Nospan], { opacity: 1 ,duration:3 ,delay:5});
  gsap.to(".animated-letters-1", { opacity: 0 ,delay:8});
}

function allZero(){
    gsap.to([title1Static], { opacity: 0 });
    gsap.to([title2Animated], { opacity: 0 });
    gsap.to([title1Nospan], { opacity: 0 });
    gsap.to([title2Nospan], { opacity: 0});
}

window.addEventListener("DOMContentLoaded", function () {
    (() =>
      setTimeout(() => {
        

      }, 5000))();
  });
  