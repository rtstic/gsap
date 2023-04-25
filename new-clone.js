 //title block 0
 const title1Nospan = document.querySelector("#title-1-nospan");
 //title block 1
 const title1Static = document.querySelector("#title-1-static");//for text animation inital position
 const title2Animated = document.querySelector("#title-2-animated");//for text animation final position
 const title2Nospan = document.querySelector("#title-2-nospan");//for fade in animation
 //title block 2 
 const title2Static = document.querySelector("#title-2-static");//for text animation inital position
 const title3Animated = document.querySelector("#title-3-animated");//for text animation final position
 const title3Nospan = document.querySelector("#title-3-nospan");//for fade in animation
 //title block 3
 const title3Static = document.querySelector("#title-3-static");//for text animation inital position
 const title4Animated = document.querySelector("#title-4-animated");//for text animation final position
 const title4Nospan = document.querySelector("#title-4-nospan");//for fade in animation
 //cta
 const buttonCta = document.querySelector("#button")

function scroll(){
    //initial position 1
    const m1Static = document.querySelector("#m1-static");
    const i1Static = document.querySelector("#i1-static");
    const o1Static = document.querySelector("#o1-static");
    const t1Static = document.querySelector("#t1-static");
    const a1Static = document.querySelector("#a1-static");
    const e1Static = document.querySelector("#e1-static");
    const s1Static = document.querySelector("#s1-static");
    //initial position 2
    const m2Static = document.querySelector("#m2-static");
    const i2Static = document.querySelector("#i2-static");
    const o2Static = document.querySelector("#o2-static");
    const t2Static = document.querySelector("#t2-static");
    const a2Static = document.querySelector("#a2-static");
    const e2Static = document.querySelector("#e2-static");
    const s2Static = document.querySelector("#s2-static");
    //initial position 3
    const m3Static = document.querySelector("#m3-static");
    const i3Static = document.querySelector("#i3-static");
    const o3Static = document.querySelector("#o3-static");
    const t3Static = document.querySelector("#t3-static");
    const a3Static = document.querySelector("#a3-static");
    const e3Static = document.querySelector("#e3-static");
    const s3Static = document.querySelector("#s3-static");
    //final position 1
    const m2Animated = document.querySelector("#m2-animated");
    const i2Animated = document.querySelector("#i2-animated");
    const o2Animated = document.querySelector("#o2-animated");
    const t2Animated = document.querySelector("#t2-animated");
    const a2Animated = document.querySelector("#a2-animated");
    const e2Animated = document.querySelector("#e2-animated");
    const s2Animated = document.querySelector("#s2-animated");
    //final position 2
    const m3Animated = document.querySelector("#m3-animated");
    const i3Animated = document.querySelector("#i3-animated");
    const o3Animated = document.querySelector("#o3-animated");
    const t3Animated = document.querySelector("#t3-animated");
    const a3Animated = document.querySelector("#a3-animated");
    const e3Animated = document.querySelector("#e3-animated");
    const s3Animated = document.querySelector("#s3-animated");
    //final position 3
    const m4Animated = document.querySelector("#m4-animated");
    const i4Animated = document.querySelector("#i4-animated");
    const o4Animated = document.querySelector("#o4-animated");
    const t4Animated = document.querySelector("#t4-animated");
    const a4Animated = document.querySelector("#a4-animated");
    const e4Animated = document.querySelector("#e4-animated");
    const s4Animated = document.querySelector("#s4-animated");
    //animated letters 1
    const m1 = document.querySelector("#m1");
    const i1 = document.querySelector("#i1");
    const o1= document.querySelector("#o1");
    const t1 = document.querySelector("#t1");
    const a1 = document.querySelector("#a1");
    const e1= document.querySelector("#e1");
    const s1 = document.querySelector("#s1");
    //animated letters 2
    const m2 = document.querySelector("#m2");
    const i2 = document.querySelector("#i2");
    const o2= document.querySelector("#o2");
    const t2 = document.querySelector("#t2");
    const a2 = document.querySelector("#a2");
    const e2= document.querySelector("#e2");
    const s2 = document.querySelector("#s2");
    //animated letters 3
    const m3 = document.querySelector("#m3");
    const i3 = document.querySelector("#i3");
    const o3= document.querySelector("#o3");
    const t3 = document.querySelector("#t3");
    const a3 = document.querySelector("#a3");
    const e3= document.querySelector("#e3");
    const s3 = document.querySelector("#s3");
    //match initail letter position 1
    matchLetterPosition(m1Static, m1);
    matchLetterPosition(i1Static, i1);
    matchLetterPosition(o1Static, o1);
    matchLetterPosition(t1Static, t1);
    matchLetterPosition(a1Static, a1);
    matchLetterPosition(e1Static, e1);
    matchLetterPosition(s1Static, s1);
    //match initail letter position 2
    matchLetterPosition(m2Static, m2);
    matchLetterPosition(i2Static, i2);
    matchLetterPosition(o2Static, o2);
    matchLetterPosition(t2Static, t2);
    matchLetterPosition(a2Static, a2);
    matchLetterPosition(e2Static, e2);
    matchLetterPosition(s2Static, s2);
    //match initail letter position 3
    matchLetterPosition(m3Static, m3);
    matchLetterPosition(i3Static, i3);
    matchLetterPosition(o3Static, o3);
    matchLetterPosition(t3Static, t3);
    matchLetterPosition(a3Static, a3);
    matchLetterPosition(e3Static, e3);
    matchLetterPosition(s3Static, s3);
    //initialize on page load
    gsap.set(".title-block-0", { opacity: 1 });
    gsap.set(".title-block-1", { opacity: 0 });
    gsap.set(".title-block-2", { opacity: 0 });
    gsap.set(".title-block-3", { opacity: 0 });
    gsap.set([buttonCta], { opacity: 0 });
    gsap.set(".animated-letters-1", { opacity: 0 });
    gsap.set(".animated-letters-2", { opacity: 0 });
    gsap.set(".animated-letters-3", { opacity: 0 });
    //declare swiper
    let activeIndex;
    let visitedZero = true;
    let visitedOne = false;
    let visitedTwo = false;
    let visitedThree = false;
    //lottie swiper
    const lottieSwiper = new Swiper(".lottie-swiper", {
        direction: "vertical",
        loop: false,
        spaceBetween: 0,
        centeredSlides: false,
        slidesPerView: 1,
        mousewheel: true,
        speed: 1500,
        effect: "slide",
        slideEffect: {
          easing: "easeOutQuart",
        },
    });
    //text swiper
    const swiper = new Swiper(".myswiper", {
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
                gsap.to(".title-block-0", { opacity: 1 });
                gsap.to(".title-block-2", { opacity: 0 });
                gsap.to(".title-block-3", { opacity: 0 });
              title1FadeIn();
            }
            if (activeIndex === 1) {
              lottieSwiper.slideTo(0)
              gsap.to(".title-block-1", { opacity: 1 });
              gsap.to(".title-block-0", { opacity: 0 });
              gsap.to(".title-block-2", { opacity: 0 });
              gsap.to(".title-block-3", { opacity: 0 });
              if (visitedOne) {
                gsap.to([title3Nospan], { opacity: 0});
                console.log("perform fadin for title2");
                title2fadein();
              } else {
                this.allowSlideNext = false;
                this.allowSlidePrev = false;
              setTimeout(() => {
              this.allowSlideNext = true;
              this.allowSlidePrev = true;
                }, 6000);
                console.log("perform text animtion to reveal title two");
                titile2TextAnimation();
                visitedOne = true;
              }
            }
            if (activeIndex === 2) {
              lottieSwiper.slideTo(1)
              gsap.to(".title-block-0", { opacity: 0 });
              gsap.to(".title-block-1", { opacity: 0 });
              gsap.to(".title-block-2", { opacity: 1 });
              gsap.to(".title-block-3", { opacity: 0 });
              
              if (visitedTwo) {
                gsap.to([title4Animated], { opacity: 0});
                title3fadein();
                console.log("perfrom fade in for title three");
              } else {
                this.allowSlideNext = false;
                this.allowSlidePrev = false;
              setTimeout(() => {
              this.allowSlideNext = true;
              this.allowSlidePrev = true;
                }, 6000);
                console.log("perfrom text animation to reveal title three");
                titile3TextAnimation();
                visitedTwo = true;
              }
            }
            if (activeIndex === 3) {
              lottieSwiper.slideTo(2)
              gsap.to(".title-block-0", { opacity: 0 });
              gsap.to(".title-block-1", { opacity: 0 });
              gsap.to(".title-block-3", { opacity: 1 });
              gsap.to(".title-block-2", { opacity: 0 });
              if (visitedThree) {
                title4fadein()
                console.log("perform fade in for title four");
              } else {
                this.allowSlideNext = false;
                this.allowSlidePrev = false;
              setTimeout(() => {
              this.allowSlideNext = true;
              this.allowSlidePrev = true;
                }, 6000);
                titile4TextAnimation()
                console.log("perfrom text animation to reveal title four");
                visitedThree = true;
              }
            }
          },
        },
      });

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
      gsap.set(".animated-letters-2", { opacity: 0 });
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
    
    setTimeout(function() {
      document.getElementById('lottie-1').click();
    }, 3500);
      gsap.to([title2Nospan], { opacity: 1 ,duration:3 ,delay:5});
      gsap.to(".animated-letters-1", { opacity: 0 ,delay:8});
    }
    //title3 fadein
    function title3fadein() {
      allZero();
      gsap.to([title3Nospan], { opacity: 1, duration: 1 ,delay:0.5});
      gsap.set(".animated-letters-3", { opacity: 0 });
      gsap.to([title4Nospan], { opacity: 0,delay:0});
      gsap.to([title3Static], { opacity: 0,delay:0});
      
      gsap.to([buttonCta], { opacity: 0 ,delay:0,duration:0.5});
    }
    //title3 text animation
    function titile3TextAnimation() {
      //initialization
      gsap.to([title2Nospan], { opacity: 0});
        gsap.to([title2Static], { opacity: 1});
        gsap.set([title3Animated], { opacity: 0 });
        gsap.set([title3Nospan], { opacity: 0 });
        
        gsap.set(".animated-letters-2", { opacity: 1 });
        //animation starts
        gsap.to([title2Static], { opacity: 0 ,duration:1,delay:1});
      //animate x positions
        gsap.to([m2],{ duration: 2, ...moveX(m3Animated, m2),ease: Circ.easeOut,delay:2});
        gsap.to([i2],{ duration: 2, ...moveX(i3Animated, i2),ease: Circ.easeOut,delay:2});
        gsap.to([o2],{ duration: 2, ...moveX(o3Animated, o2),ease: Circ.easeOut,delay:2});
        gsap.to([t2],{ duration: 2, ...moveX(t3Animated, t2),ease: Circ.easeOut,delay:2});
        gsap.to([a2],{ duration: 2, ...moveX(a3Animated, a2),ease: Circ.easeOut,delay:2});
        gsap.to([e2],{ duration: 2, ...moveX(e3Animated, e2),ease: Circ.easeOut,delay:2});
        gsap.to([s2],{ duration: 2, ...moveX(s3Animated, s2),ease: Circ.easeOut,delay:2});
      //animate y positions
        gsap.to([m2],{ duration: 1, ...moveY(m3Animated, m2),ease: Circ.easeOut,delay:4});
        gsap.to([i2],{ duration: 1, ...moveY(i3Animated, i2),ease: Circ.easeOut,delay:4});
        gsap.to([o2],{ duration: 1, ...moveY(o3Animated, o2),ease: Circ.easeOut,delay:4});
        gsap.to([t2],{ duration: 1, ...moveY(t3Animated, t2),ease: Circ.easeOut,delay:4});
        gsap.to([a2],{ duration: 1, ...moveY(a3Animated, a2),ease: Circ.easeOut,delay:4});
        gsap.to([e2],{ duration: 1, ...moveY(e3Animated, e2),ease: Circ.easeOut,delay:4});
        gsap.to([s2],{ duration: 1, ...moveY(s3Animated, s2),ease: Circ.easeOut,delay:4});
      //play lottie along with y movement
      setTimeout(function() {
        document.getElementById('lottie-2').click();
      }, 3500);
        gsap.to([title3Nospan], { opacity: 1 ,duration:3 ,delay:5});
        gsap.to(".animated-letters-2", { opacity: 0 ,delay:6});
      }
      //title4 fadein
    function title4fadein() {
      allZero();
      gsap.to([title4Nospan], { opacity: 1, duration: 1 ,delay:0.5});
      gsap.set(".animated-letters-3", { opacity: 0 });
      gsap.to([buttonCta], { opacity: 1 ,delay:0.5});
    }
    //title4 text animation
    function titile4TextAnimation() {
      //initialization
      gsap.to([title3Nospan], { opacity: 0});
        gsap.to([title3Static], { opacity: 1});
        gsap.set([title4Animated], { opacity: 0 });
        gsap.set([title4Nospan], { opacity: 0 });
        gsap.set(".animated-letters-3", { opacity: 1 });
        //animation starts
        gsap.to([title3Static], { opacity: 0 ,duration:1,delay:1});
      //animate x positions
        gsap.to([m3],{ duration: 2, ...moveX(m4Animated, m3),ease: Circ.easeOut,delay:2});
        gsap.to([i3],{ duration: 2, ...moveX(i4Animated, i3),ease: Circ.easeOut,delay:2});
        gsap.to([o3],{ duration: 2, ...moveX(o4Animated, o3),ease: Circ.easeOut,delay:2});
        gsap.to([t3],{ duration: 2, ...moveX(t4Animated, t3),ease: Circ.easeOut,delay:2});
        gsap.to([a3],{ duration: 2, ...moveX(a4Animated, a3),ease: Circ.easeOut,delay:2});
        gsap.to([e3],{ duration: 2, ...moveX(e4Animated, e3),ease: Circ.easeOut,delay:2});
        gsap.to([s3],{ duration: 2, ...moveX(s4Animated, s3),ease: Circ.easeOut,delay:2});
      //animate y positions
        gsap.to([m3],{ duration: 1, ...moveY(m4Animated, m3),ease: Circ.easeOut,delay:4});
        gsap.to([i3],{ duration: 1, ...moveY(i4Animated, i3),ease: Circ.easeOut,delay:4});
        gsap.to([o3],{ duration: 1, ...moveY(o4Animated, o3),ease: Circ.easeOut,delay:4});
        gsap.to([t3],{ duration: 1, ...moveY(t4Animated, t3),ease: Circ.easeOut,delay:4});
        gsap.to([a3],{ duration: 1, ...moveY(a4Animated, a3),ease: Circ.easeOut,delay:4});
        gsap.to([e3],{ duration: 1, ...moveY(e4Animated, e3),ease: Circ.easeOut,delay:4});
        gsap.to([s3],{ duration: 1, ...moveY(s4Animated, s3),ease: Circ.easeOut,delay:4});
      //play lottie along with y movement
      setTimeout(function() {
        document.getElementById('lottie-3').click();
      }, 3500);
        gsap.to([title4Animated], { opacity: 1 ,duration:3 ,delay:5});
        gsap.to(".animated-letters-3", { opacity: 0 ,delay:8});
        gsap.to([buttonCta], { opacity: 1 ,delay:5});
      }
    
    function allZero(){
        gsap.set([title1Static], { opacity: 0 });
        gsap.set([title2Animated], { opacity: 0 });
        gsap.set([title1Nospan], { opacity: 0 });
        gsap.set([title2Nospan], { opacity: 0});
        gsap.set([title3Nospan], { opacity: 0});
        gsap.set([title2Static], { opacity: 0});
        gsap.set([title3Animated], { opacity: 0});
        gsap.set([title4Nospan], { opacity: 0});
        gsap.set([title3Static], { opacity: 0});
        gsap.set([title4Animated], { opacity: 0});
    }

    function handleResize(){
    //match initail letter position 1
    matchLetterPosition(m1Static, m1);
    matchLetterPosition(i1Static, i1);
    matchLetterPosition(o1Static, o1);
    matchLetterPosition(t1Static, t1);
    matchLetterPosition(a1Static, a1);
    matchLetterPosition(e1Static, e1);
    matchLetterPosition(s1Static, s1);
    //match initail letter position 2
    matchLetterPosition(m2Static, m2);
    matchLetterPosition(i2Static, i2);
    matchLetterPosition(o2Static, o2);
    matchLetterPosition(t2Static, t2);
    matchLetterPosition(a2Static, a2);
    matchLetterPosition(e2Static, e2);
    matchLetterPosition(s2Static, s2);
    //match initail letter position 3
    matchLetterPosition(m3Static, m3);
    matchLetterPosition(i3Static, i3);
    matchLetterPosition(o3Static, o3);
    matchLetterPosition(t3Static, t3);
    matchLetterPosition(a3Static, a3);
    matchLetterPosition(e3Static, e3);
    matchLetterPosition(s3Static, s3);
    }
    window.addEventListener("resize", handleResize);
}
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
//move letter in x position
function moveX(staticLetter, animatedLetter) {
    let boundsRel = staticLetter.getBoundingClientRect();
    let boundsAbs = animatedLetter.getBoundingClientRect();
    console.log(boundsRel.left - boundsAbs.left);
    return {
      x: "+=" + (boundsRel.left - boundsAbs.left),
    }; 
  }
//move letter in y position
function moveY(staticLetter, animatedLetter) {
    let boundsRel = staticLetter.getBoundingClientRect();
    let boundsAbs = animatedLetter.getBoundingClientRect();
    console.log(boundsRel.left - boundsAbs.left);
    return {
        y: "+=" + (boundsRel.top - boundsAbs.top),
    }; 
  }
  window.addEventListener("DOMContentLoaded", function () {
    (() =>
      setTimeout(() => {
        splitSpans(title1Static, "title1static");
        splitSpans(title2Animated, "title2animated");
        splitSpans(title2Static, "title2static");
        splitSpans(title3Animated, "title3animated");
        splitSpans(title3Static, "title3static");
        splitSpans(title4Animated, "title4animated");
        scroll()
      }, 3000))();
  });