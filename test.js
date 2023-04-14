function init2() {
    gsap.registerPlugin(ScrollTrigger);
  
    // select static and aniamted elements
    const m2Static = document.querySelector("#m1-static");
    const m2Animated = document.querySelector("#m-animated");
    const i2Static = document.querySelector("#i1-static");
    const i2Animated = document.querySelector("#i1-animated");
    const o2Static = document.querySelector("#o1-static");
    const o2Animated = document.querySelector("#o1-animated");
    const t2Static = document.querySelector("#t1-static");
    const t2Animated = document.querySelector("#t1-animated");
    const a2Static = document.querySelector("#a1-static");
    const a2Animated = document.querySelector("#a1-animated");
    const e2Static = document.querySelector("#e1-static");
    const e2Animated = document.querySelector("#e1-animated");
    const s2Static = document.querySelector("#s1-static");
    const s2Animated = document.querySelector("#s1-animated");
  
    // splite the static text into words as spans
    const splitType = new SplitType("#static-1", { types: "chars" });
  
    // set positions
    matchLetterPosition(m2Static, m2Animated);
    matchLetterPosition(i2Static, i2Animated);
    matchLetterPosition(o2Static, o2Animated);
    matchLetterPosition(t2Static,t2Animated);
    matchLetterPosition(a2Static,a2Animated);
    matchLetterPosition(e2Static,e2Animated);
    matchLetterPosition(s2Static,s2Animated);
  
    // hide static elments, make animated elements visible.
    // avoids flashing of content
    gsap.set(m2Animated, { visibility: "visible" });
    gsap.set(i2Animated, { visibility: "visible" });
    gsap.set(o2Animated, { visibility: "visible" });
    gsap.set(t2Animated, { visibility: "visible" });
    gsap.set(a2Animated, { visibility: "visible" });
    gsap.set(e2Animated, { visibility: "visible" });
    gsap.set(s2Animated, { visibility: "visible" });
    
    gsap.set(m2Static, { visibility: "hidden" });
    gsap.set(i2Static, { visibility: "hidden" });
    gsap.set(o2Static, { visibility: "hidden" });
    gsap.set(t2Static, { visibility: "hidden" });
    gsap.set(a2Static, { visibility: "hidden" });
    gsap.set(e2Static, { visibility: "hidden" });
    gsap.set(s2Static, { visibility: "hidden" });
   
  
    // declare a timeline outside createTimeline scope
    // so we can access it in our resize function
    let tl;
  
    function createTimeline() {
  
      // if a timeline exists, save its progress and kill it
      let progress = tl ? tl.progress() : 0;
      tl && tl.progress(0).kill();
  
      // create our timeline
      tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#scroll-track-2",
          start: "top top", // when top of trigger div is at top of viewport
          end: "bottom bottom", // when bottom of trigger div is at bottom of viewport
          scrub: 1, // link to scroll
        },
  
      });
  
      tl.to(splitType.chars, {
        opacity: 0,
        duration: 3
      })
  
        // start sending animated text to its original position in x direction
        .to([m2Animated,i2Animated,o2Animated,t2Animated,a2Animated,e2Animated,s2Animated], {
          x: 0,
          duration: 4,
        })
  
        // start aniamting in the y direction
        // adding ease to this creates nice curved motion.
        // https://codepen.io/snorkltv/pen/dyoxXaQ
        .to(
          [m2Animated,i2Animated,o2Animated,t2Animated,a2Animated,e2Static,s2Animated],
          { y: 0, ease: "sine.in", duration: 3 },
          ">-1" // 1 second from end of previous to
        )
  
        // finish off with reaveling other animated elements
        // .to(".animation-exception", { autoAlpha: 1 });
        .to(".animation-exception", { opacity: 1, duration: 4 });
  
      // new tween created with updated location, set progress.
      tl.progress(progress);
    }
    // create timeline on initial load.
    createTimeline();
    function handleResize() {
      // set positions
      matchLetterPosition(m2Static, m2Animated);
      matchLetterPosition(i2Static, i2Animated);
      matchLetterPosition(o2Static, o2Animated);
      matchLetterPosition(t2Static,t2Animated);
      matchLetterPosition(a2Static,a2Animated);
      matchLetterPosition(e2Static,e2Animated);
      matchLetterPosition(s2Static,s2Animated);
  
      // recreate the timeline so it "knows" where the new element positions are
      createTimeline();
    }
   // set the elements that will animate positions to same location as
    // their static partners
    function matchLetterPosition(staticLetter, animatedLetter) {
      let boundsRel = staticLetter.getBoundingClientRect();
      let boundsAbs = animatedLetter.getBoundingClientRect();
      console.log(boundsRel.left);
      gsap.set(animatedLetter, {
        x: "+=" + (boundsRel.left - boundsAbs.left),
        y: "+=" + (boundsRel.top - boundsAbs.top),
      });
    }
   
    window.addEventListener("resize", handleResize);
  }
  
  // window.addEventListener("load", init1);
  window.addEventListener("load", init2);