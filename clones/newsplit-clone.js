function scroll() {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to("#main", { opacity: 1, duration: 3,delay: 1 });
  
    //initialize display only title 1
    gsap.set("#title-1", { opacity: 1, duration: 5 });
    gsap.set(".animated-letter-2", { opacity: 0 });
    gsap.set(".animated-letter-3", { opacity: 0 });
    gsap.set("#cta", { opacity:0})
  
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
    //animated letters 3
    const m3Animated = document.querySelector("#m3");
    const i3Animated = document.querySelector("#i3");
    const o3Animated = document.querySelector("#o3");
    const t3Animated = document.querySelector("#t3");
    const a3Animated = document.querySelector("#a3");
    const e3Animated = document.querySelector("#e3");
    const s3Animated = document.querySelector("#s3");
  
    //lettrs in title 1
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
    //lettrs in title 3
    const m3Static = document.querySelector("#m-title3");
    const i3Static = document.querySelector("#i-title3");
    const o3Static = document.querySelector("#o-title3");
    const t3Static = document.querySelector("#t-title3");
    const a3Static = document.querySelector("#a-title3");
    const e3Static = document.querySelector("#e-title3");
    const s3Static = document.querySelector("#s-title3");
    //lettrs in title 4
    const m4Static = document.querySelector("#m-title4");
    const i4Static = document.querySelector("#i-title4");
    const o4Static = document.querySelector("#o-title4");
    const t4Static = document.querySelector("#t-title4");
    const a4Static = document.querySelector("#a-title4");
    const e4Static = document.querySelector("#e-title4");
    const s4Static = document.querySelector("#s-title4");
  
    //put animated letters to the first title on load
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
  
    matchLetterPosition(m3Static, m3Animated);
    matchLetterPosition(i3Static, i3Animated);
    matchLetterPosition(o3Static, o3Animated);
    matchLetterPosition(t3Static, t3Animated);
    matchLetterPosition(a3Static, a3Animated);
    matchLetterPosition(e3Static, e3Animated);
    matchLetterPosition(s3Static, s3Animated);
  
    // hide static elments, make animated elements visible.
    //title1 static letters
    gsap.set(m1Static, { visibility: "hidden" });
    gsap.set(i1Static, { visibility: "hidden" });
    gsap.set(o1Static, { visibility: "hidden" });
    gsap.set(t1Static, { visibility: "hidden" });
    gsap.set(a1Static, { visibility: "hidden" });
    gsap.set(s1Static, { visibility: "hidden" });
    gsap.set(e1Static, { visibility: "hidden" });
    //title2 static letters
    gsap.set(m2Static, { visibility: "hidden" });
    gsap.set(i2Static, { visibility: "hidden" });
    gsap.set(o2Static, { visibility: "hidden" });
    gsap.set(t2Static, { visibility: "hidden" });
    gsap.set(a2Static, { visibility: "hidden" });
    gsap.set(s2Static, { visibility: "hidden" });
    gsap.set(e2Static, { visibility: "hidden" });
    //title3 static letters
    gsap.set(m3Static, { visibility: "hidden" });
    gsap.set(i3Static, { visibility: "hidden" });
    gsap.set(o3Static, { visibility: "hidden" });
    gsap.set(t3Static, { visibility: "hidden" });
    gsap.set(a3Static, { visibility: "hidden" });
    gsap.set(s3Static, { visibility: "hidden" });
    gsap.set(e3Static, { visibility: "hidden" });
    //title4 static letters
    gsap.set(m4Static, { visibility: "hidden" });
    gsap.set(i4Static, { visibility: "hidden" });
    gsap.set(o4Static, { visibility: "hidden" });
    gsap.set(t4Static, { visibility: "hidden" });
    gsap.set(a4Static, { visibility: "hidden" });
    gsap.set(s4Static, { visibility: "hidden" });
    gsap.set(e4Static, { visibility: "hidden" });
  
    // declare a timeline outside createTimeline scope
    // so we can access it in our resize function
    let tl;
  
    function createTimeline() {
      // if a timeline exists, save its progress and kill it
      let progress = tl ? tl.progress() : 0;
      tl && tl.progress(0).kill();
  
      let progress2 = tl ? tl.progress() : 0;
      tl && tl.progress(0).kill();
  
      // create our timeline
      tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#track",
          start: "top top", // when top of trigger div is at top of viewport
          end: "bottom bottom", // when bottom of trigger div is at bottom of viewport
          scrub: 1, // link to scroll
        },
      });
  
      //TIMELINE FOR SECTION ONE
      tl.to('.title-1-text', {opacity: 0,duration: 2,});
      //animate through x,y positions
      tl.add("moveletter")
        tl.to([mAnimated],{duration: 1,...moveLetter(m2Static, mAnimated),},"moveletter");
        tl.to([iAnimated],{duration: 1,...moveLetter(i2Static, iAnimated),},"moveletter");
        tl.to([oAnimated],{duration: 1,...moveLetter(o2Static, oAnimated),},"moveletter");
        tl.to([tAnimated],{duration: 1,...moveLetter(t2Static, tAnimated),},"moveletter");
        tl.to([aAnimated],{duration: 1,...moveLetter(a2Static, aAnimated),},"moveletter");
        tl.to([eAnimated],{duration: 1,...moveLetter(e2Static, eAnimated),},"moveletter");
        tl.to([sAnimated],{duration: 1,...moveLetter(s2Static, sAnimated),},"moveletter");
      
      tl.to('.title-2-text', {opacity: 1,duration: 2,});
      tl.add("showletters2");
        tl.to(".animated-letter",{opacity: 1,duration: 0,},"showletters2");
        tl.to(".animated-letter",{opacity: 0,duration: 0,},"showletters2");
        tl.to(".animated-letter-2",{opacity: 1,duration: 0,},"showletters2");
  
      //TIMELINE FOR SECTION TWO
      tl.to('.title-2-text', {opacity: 0,duration: 2,});
      //animate through x,y positions
      tl.add("moveletter2")
        tl.to([m2Animated],{duration: 1,...moveLetter(m3Static, m2Animated),},"moveletter2");
        tl.to([i2Animated],{duration: 1,...moveLetter(i3Static, i2Animated),},"moveletter2");
        tl.to([o2Animated],{duration: 1,...moveLetter(o3Static, o2Animated),},"moveletter2");
        tl.to([t2Animated],{duration: 1,...moveLetter(t3Static, t2Animated),},"moveletter2");
        tl.to([a2Animated],{duration: 1,...moveLetter(a3Static, a2Animated),},"moveletter2");
        tl.to([e2Animated],{duration: 1,...moveLetter(e3Static, e2Animated),},"moveletter2");
        tl.to([s2Animated],{duration: 1,...moveLetter(s3Static, s2Animated),},"moveletter2");
      //show title3
      tl.to('.title-3-text',{opacity: 1,duration: 2,});
      //show animated letters to the next set -  animated-letters-3
      tl.add("showletters3");
        tl.to(".animated-letter-2",{opacity: 1,duration: 0,},"showletters3");
        tl.to(".animated-letter-2",{opacity: 0,duration: 0,},"showletters3");
        tl.to(".animated-letter-3",{opacity: 1,duration: 0,},"showletters3");
  
      //TIMELINE FOR SECTION THREE
      tl.to('.title-3-text', {opacity: 0,duration: 2,});
      //animate through x,y positions 
      tl.add("moveletter3")
        tl.to([m3Animated],{duration: 1,...moveLetter(m4Static, m3Animated),},"moveletter3");
        tl.to([i3Animated],{duration: 1,...moveLetter(i4Static, i3Animated),},"moveletter3");
        tl.to([o3Animated],{duration: 1,...moveLetter(o4Static, o3Animated),},"moveletter3");
        tl.to([t3Animated],{duration: 1,...moveLetter(t4Static, t3Animated),},"moveletter3");
        tl.to([a3Animated],{duration: 1,...moveLetter(a4Static, a3Animated),},"moveletter3");
        tl.to([e3Animated],{duration: 1,...moveLetter(e4Static, e3Animated),},"moveletter3");
        tl.to([s3Animated],{duration: 1,...moveLetter(s4Static, s3Animated),},"moveletter3");
      //show cta
      tl.add("cta");
        tl.to('.title-4-text', {opacity: 1,duration: 2,},'cta');
        tl.to('#cta', {opacity: 1,duration: 2,},'cta');
      tl.progress(progress);
    }
  
    // create timeline on initial load.
    createTimeline();
  
    function matchLetterPosition(staticLetter, animatedLetter) {
      let boundsRel = staticLetter.getBoundingClientRect();
      let boundsAbs = animatedLetter.getBoundingClientRect();
      gsap.set(animatedLetter, {
        x: "+=" + (boundsRel.left - boundsAbs.left),
        y: "+=" + (boundsRel.top - boundsAbs.top),
      });
    }
  
    //for better performance on resize
    function handleResize() {
    //match letter position of animated lettrs 1
    matchLetterPosition(m1Static, mAnimated);
    matchLetterPosition(i1Static, iAnimated);
    matchLetterPosition(o1Static, oAnimated);
    matchLetterPosition(t1Static, tAnimated);
    matchLetterPosition(a1Static, aAnimated);
    matchLetterPosition(e1Static, eAnimated);
    matchLetterPosition(s1Static, sAnimated);
    //match letter position of animated lettrs 2
    matchLetterPosition(m2Static, m2Animated);
    matchLetterPosition(i2Static, i2Animated);
    matchLetterPosition(o2Static, o2Animated);
    matchLetterPosition(t2Static, t2Animated);
    matchLetterPosition(a2Static, a2Animated);
    matchLetterPosition(e2Static, e2Animated);
    matchLetterPosition(s2Static, s2Animated);
    //match letter position of animated lettrs 3
    matchLetterPosition(m3Static, m3Animated);
    matchLetterPosition(i3Static, i3Animated);
    matchLetterPosition(o3Static, o3Animated);
    matchLetterPosition(t3Static, t3Animated);
    matchLetterPosition(a3Static, a3Animated);
    matchLetterPosition(e3Static, e3Animated);
    matchLetterPosition(s3Static, s3Animated);
    // recreate the timeline so it "knows" where the new element positions are
    createTimeline();
    }
  
    window.addEventListener("resize", handleResize);
  
    function moveLetter(staticLetter, animatedLetter) {
      let boundsRel = staticLetter.getBoundingClientRect();
      let boundsAbs = animatedLetter.getBoundingClientRect();
      // let parentRect = animatedLetter.parentElement.getBoundingClientRect();
      return {
        x: "+=" + (boundsRel.left - boundsAbs.left),
        y: "+=" + (boundsRel.top - boundsAbs.top),
      };
    }
  }
  
  
  window.addEventListener("DOMContentLoaded", function() {
      splitSpans(title1, 'title-1-text');
      splitSpans(title2, 'title-2-text');
      splitSpans(title3, 'title-3-text');
      splitSpans(title4, 'title-4-text');
      scroll();
    });
  
  
  
  function splitSpans(title, className) {
      const spans = title.querySelectorAll('span');
      const text = title.textContent;
      const output = [];
      let lastIndex = 0;
    
      spans.forEach(span => {
        const startIndex = text.indexOf(span.textContent, lastIndex);
        const endIndex = startIndex + span.textContent.length;
        const beforeText = text.slice(lastIndex, startIndex);
        const spanElement = span.cloneNode(true);
        
        output.push(beforeText, spanElement);
        lastIndex = endIndex;
      });
    
      output.push(text.slice(lastIndex));
    
      for (let i = 0; i < output.length; i++) {
        if (output[i].nodeName !== 'SPAN') {
          const newSpan = document.createElement('span');
          newSpan.classList.add(className);
          newSpan.textContent = output[i];
          output[i] = newSpan;
        }
      }
    
      title.textContent = '';
      output.forEach(element => {
        title.appendChild(element);
      });
    }
  
  
  const title1 = document.getElementById("title-1");
  const title2 = document.getElementById("title-2");
  const title3 = document.getElementById("title-3");
  const title4 = document.getElementById("title-4");