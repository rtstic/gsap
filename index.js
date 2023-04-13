function init() {
    gsap.registerPlugin(ScrollTrigger);

    const m1Static = document.querySelector("#m1-static");
    const m1Animated = document.querySelector("#m1-animated");
    const i1Static = document.querySelector("#i1-static");
    const i1Animated = document.querySelector("#i1-animated");
    const o1Static = document.querySelector("#o1-static");
    const o1Animated = document.querySelector("#o1-animated");


    const splitType = new SplitType("#static-1", { types: "chars" });
    
    matchLetterPosition(m1Static, m1Animated)
    matchLetterPosition(i1Static, i1Animated)
    matchLetterPosition(o1Static, o1Animated)

    gsap.set(m1Animated, { visibility: "visible" });
    gsap.set(i1Animated, { visibility: "visible" });
    gsap.set(o1Animated, { visibility: "visible" });


    gsap.set(m1Static, { visibility: "hidden" });
    gsap.set(i1Static, { visibility: "hidden" });
    gsap.set(o1Static, { visibility: "hidden" });


    function matchLetterPosition(staticLetter, animatedLetter) {
        let boundsRel = staticLetter.getBoundingClientRect();
        let boundsAbs = animatedLetter.getBoundingClientRect();
      console.log(boundsRel.left);
        gsap.set(animatedLetter, {
          x: "+=" + (boundsRel.left - boundsAbs.left),
          y: "+=" + ((boundsRel.top - boundsAbs.top))
        });
      }
      let tl;
  
      function createTimeline() {
        let progress = tl ? tl.progress() : 0;
        tl && tl.progress(0).kill();
        tl = gsap.timeline({
          scrollTrigger: {
            trigger: "#scroll-section-1",
            start: "top top", // when top of trigger div is at top of viewport
            end: "bottom bottom", // when bottom of trigger div is at bottom of viewport
            scrub: 1 // link to scroll
          }
        });
    
        tl.to(splitType.chars, {
          opacity: 0,
        })
          .to([m1Animated,i1Animated,o1Animated], {
            x: 0,
            duration: 2
          })
          // start aniamting in the y direction
          // adding ease to this creates nice curved motion.
          // https://codepen.io/snorkltv/pen/dyoxXaQ
          .to(
            [m1Animated,i1Animated,o1Animated],
            { y: 0, ease: "sine.in", duration: 1 },
            ">-1" // 1 second from end of previous to
          )
          // finish off with punctuation
        .to(".animation-exception", { autoAlpha: 1});
        // new tween created with updated location, set progress.
        tl.progress(progress);
      }
      // create timeline on initial load.
      createTimeline();
      function handleResize() {
        // set positions
        matchLetterPosition(m1Static, m1Animated)
        matchLetterPosition(i1Static, i1Animated)
        matchLetterPosition(o1Static, o1Animated)
    
        // recreate the timeline so it "knows" where the new element positions are
        createTimeline();
      }
      window.addEventListener("resize", handleResize);
  }
  
  window.addEventListener("load", init);
