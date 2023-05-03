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
        mobileScroll()
        }
        else{
          createTimeline()
        }
      }, 3000))();
  });

  // function scrollButton(value){
  //   if (value === true){
  //     document.getElementById('show-button').click();
  //   }
  //   else{
  //     document.getElementById('hide-button').click();
  //   }
  // }

  // const myDiv = document.getElementById("track");
  // const scrollBtn =  document.getElementById('show-button')

  // ScrollTrigger.create({
  //   trigger: myDiv,
  //   start: "top 90%",
  //   end: "bottom",
  //   onEnter: () => scrollBtn.style.display = "none",
  //   onLeaveBack: () => scrollBtn.style.display = "block",
  // });


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