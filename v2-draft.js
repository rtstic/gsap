//decalre titles
const title1 = document.querySelector("#title-1");
const title2 = document.querySelector("#title-2");

//declare animted letters
//animated letters 1
const mAnimated = document.querySelector("#m");
const iAnimated = document.querySelector("#i");
const oAnimated = document.querySelector("#o");
const tAnimated = document.querySelector("#t");
const aAnimated = document.querySelector("#a");
const eAnimated = document.querySelector("#e");
const sAnimated = document.querySelector("#s");
 //animated letters 2
 const m2Animated = document.querySelector("#m2");
 const i2Animated = document.querySelector("#i2");
 const o2Animated = document.querySelector("#o2");
 const t2Animated = document.querySelector("#t2");
 const a2Animated = document.querySelector("#a2");
 const e2Animated = document.querySelector("#e2");
 const s2Animated = document.querySelector("#s2");

//declare static letters
//letters in title 1
 const m1Static = document.querySelector("#m-title1");
 const i1Static = document.querySelector("#i-title1");
 const o1Static = document.querySelector("#o-title1");
 const t1Static = document.querySelector("#t-title1");
 const a1Static = document.querySelector("#a-title1");
 const e1Static = document.querySelector("#e-title1");
 const s1Static = document.querySelector("#s-title1");
 //lettrs in title 2
 const m2Static = document.querySelector("#m-title2");
 const i2Static = document.querySelector("#i-title2");
 const o2Static = document.querySelector("#o-title2");
 const t2Static = document.querySelector("#t-title2");
 const a2Static = document.querySelector("#a-title2");
 const e2Static = document.querySelector("#e-title2");
 const s2Static = document.querySelector("#s-title2");

//delacre timeline
const tl = gsap.timeline();

//initillay show only first title
gsap.set([title1], { opacity: 1});
gsap.set([title2], { opacity: 0});

// window.addEventListener("DOMContentLoaded", function () {
//     (() =>
//       setTimeout(() => {
//         splitSpans(title1, "title-1-text");
//       }, 3000))();
//   });
init();

//set the animated letters to the static letters


//declare swiper
let activeIndex;
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
        tl.clear();
        if (activeIndex === 0) {
            tl.to([title2], { duration: 1, opacity: 0 });
          tl.to([title1], { duration: 1, opacity: 1 });
          tl.add("moveletter0");
            tl.to([mAnimated],{ duration: 1, ...moveLetter(m1Static, mAnimated) },"moveletter0");
            tl.to([title2], { duration: 1, opacity: 0 });
        }
        if (activeIndex === 1) {
          tl.to([title1], { duration: 2, opacity: 0 });
          tl.add("moveletter1");
            tl.to([mAnimated],{ duration: 1, ...moveLetter(m2Static, mAnimated) },"moveletter1");
          tl.to([title2], { duration: 2, opacity: 1 });
        }
        if (activeIndex === 2) {
          console.log("perform gsap animation for section 2");
        }
        if (activeIndex === 3) {
          console.log("perform gsap animation for section 3");
        }
      },
    },
  });
});

//for initializing the letter positions
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
}

//for matching animated letters to the static letters
function matchLetterPosition(staticLetter, animatedLetter) {
    let boundsRel = staticLetter.getBoundingClientRect();
    let boundsAbs = animatedLetter.getBoundingClientRect();
    gsap.set(animatedLetter, {
      x: "+=" + (boundsRel.left - boundsAbs.left),
      y: "+=" + (boundsRel.top - boundsAbs.top),   
    });
    console.log(boundsRel.left - boundsAbs.left);
  }

//split letters other than spans to divs
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

//move letter through the x position
function moveLetter(staticLetter, animatedLetter) {
    let boundsRel = staticLetter.getBoundingClientRect();
    let boundsAbs = animatedLetter.getBoundingClientRect();
    // let parentRect = animatedLetter.parentElement.getBoundingClientRect();
    return {
      x: "+=" + (boundsRel.left - boundsAbs.left)
    };
  }

