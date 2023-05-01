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

gsap.set([block2,block3,block4],{opacity:0.2})

matchPosition(finalPosition,block1)
matchPosition(initialPosition,block2)
matchPosition(preinitialPosition,block3)
matchPosition(preinitialPosition,block4)

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
      
      tl.to([block1],{ duration: 8, ...moveTo(visitedPosition, block1) },'scroll1');

      tl.to([block1],{opacity:0.2,duration:2},'scroll1')
      tl.to([block2],{opacity:1,duration:2},'scroll1')

      tl.to([block2],{ duration: 20, ...moveTo(visitedPosition, block2),delay:0 },'scroll1');

      tl.to([block2],{opacity:0.2,duration:2,delay:6},'scroll1')
      tl.to([block3],{opacity:1,duration:2,delay:6},'scroll1')

      tl.to([block3],{ duration:36, ...moveTo(visitedPosition,block3),delay:4},'scroll1');

      tl.to([block3],{opacity:0.2,duration:2,delay:20},'scroll1')
      tl.to([block4],{opacity:1,duration:2,delay:20},'scroll1')

      tl.to([block4],{ duration: 24, ...moveTo(finalPosition,block4),delay:14},'scroll1')


      

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

function handleResize(){
    matchPosition(finalPosition,block1)
    matchPosition(initialPosition,block2)
    createTimeline()
}
window.addEventListener("resize", handleResize);

window.addEventListener("DOMContentLoaded", function () {
    (() =>
      setTimeout(() => {
        createTimeline()
      }, 3000))();
  });