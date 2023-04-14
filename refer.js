function init() {
    gsap.registerPlugin(ScrollTrigger);
  
    // select static and aniamted elements
    const imagineAnimated = document.querySelector("#imagine-animated");
    const imagineStatic = document.querySelector("#imagine-static");
    const buildAnimated = document.querySelector("#build-animated");
    const buildStatic = document.querySelector("#build-static");
    const tellAnimated = document.querySelector("#tell-animated");
    const tellStatic = document.querySelector("#tell-static");
  
    // splite the text into words as spans
    const splitType = new SplitType("#words-to-split", { types: "chars" });
  
    // set positions
    matchLocation(imagineStatic, imagineAnimated);
    matchLocation(buildStatic, buildAnimated);
    matchLocation(tellStatic, tellAnimated);
    // hide static elments, make animated elements visible.
    // avoids flashing of content
    gsap.set(imagineAnimated, { visibility: "visible" });
    gsap.set(buildAnimated, { visibility: "visible" });
    gsap.set(tellAnimated, { visibility: "visible" });
    gsap.set(imagineStatic, { visibility: "hidden" });
    gsap.set(buildStatic, { visibility: "hidden" });
    gsap.set(tellStatic, { visibility: "hidden" });
  
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
          trigger: ".scroll-track",
          start: "top top", // when top of trigger div is at top of viewport
          end: "bottom bottom", // when bottom of trigger div is at bottom of viewport
          scrub: 1 // link to scroll
        }
      });
  
      // create the timeline
      tl.to(splitType.chars, {
        // whooshing words
        opacity: 0,
        //rotationZ: 30,
        //rotationX: 40,
       // yPercent: -300,
        //xPercent: 100,
        //stagger: 0.05
      })
        // start sending animated text to its original position in x direction
        .to([imagineAnimated, buildAnimated, tellAnimated], {
          x: 0,
          duration: 2
        })
        // start aniamting in the y direction
        // adding ease to this creates nice curved motion.
        // https://codepen.io/snorkltv/pen/dyoxXaQ
        .to(
          [imagineAnimated, buildAnimated, tellAnimated],
          { y: 0, ease: "sine.in", duration: 1 },
          ">-1" // 1 second from end of previous to
        )
        // finish off with punctuation
        .to(".is-punctuation", { autoAlpha: 1});
  
      // new tween created with updated location, set progress.
      tl.progress(progress);
    }
    // create timeline on initial load.
    createTimeline();
  
    function handleResize() {
      // set positions
      matchLocation(imagineStatic, imagineAnimated);
      matchLocation(buildStatic, buildAnimated);
      matchLocation(tellStatic, tellAnimated);
  
      // recreate the timeline so it "knows" where the new element positions are
      createTimeline();
    }
  
    // set the elements that will animate positions to same location as
    // their static partners
    function matchLocation(staticElement, animatedEl) {
      let boundsRel = staticElement.getBoundingClientRect();
      let boundsAbs = animatedEl.getBoundingClientRect();
  
      gsap.set(animatedEl, {
        x: "+=" + (boundsRel.left - boundsAbs.left),
        y: "+=" + (boundsRel.top - boundsAbs.top)
      });
    }
  
    window.addEventListener("resize", handleResize);
  }
  
  window.addEventListener("load", init);