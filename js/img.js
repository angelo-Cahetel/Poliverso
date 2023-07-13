import { gsap } from "gsap";

let body = document.querySelector('body');

gsap.set(body, { autoAlpha: 0});

gsap.registerPlugin(SplitText);

window.addEventListener('load', (event) => {
  var tl = gsap.timeline();
  
  gsap.set(body, { autoAlpha: 1});

  var pageHeading = document.querySelector(".header h1");
  var pageBody = document.querySelector(".header p");
  var seperator = document.querySelector(".header hr");
  var imageCards = gsap.utils.toArray(".image-card");
  
  gsap.set(imageCards, { autoAlpha: 0 });

  var childLines = new SplitText(pageHeading, { type: "lines", linesClass: "heading-line" });

  var parentLines = new SplitText(pageHeading, { type: "lines", linesClass: "heading-line-wrapper" });

  tl.from(childLines.lines, {
    duration: 1,
    y: 200,
    stagger: 0.25,
    delay: 1,
    ease: 'power4.out'
  });

  tl.from(pageBody, {
    duration: 0.5,
    opacity: 0,
    x: -20,
  }, '-=0.5');

  tl.from(seperator, {
    duration: 2,
    scale: 0,
    ease: 'expo.inOut'
  }, '-=1.1');

  tl.to(imageCards, {
    duration: 0.75,
    autoAlpha: 1,
    y: -50,
    stagger: 0.5,
    ease: 'power4.out'
  }, '-=0.75');
  
  const scroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true
  });

  setTimeout(() => { scroll.update(); }, 1000);
});


// img

// img

window.addEventListener("DOMContentLoaded", (event)=>{
  // Split text into spans
  let typeSplit = new SplitType("[text-split]",{
      types: "words, chars",
      tagName: "span"
  });

  // Link timelines to scroll position
  function createScrollTrigger(triggerElement, timeline) {
      // Reset tl when scroll out of view past bottom of screen
      ScrollTrigger.create({
          trigger: triggerElement,
          start: "top bottom",
          onLeaveBack: ()=>{
              timeline.progress(0);
              timeline.pause();
          }
      });
      // Play tl when scrolled into view (60% from top of screen)
      ScrollTrigger.create({
          trigger: triggerElement,
          start: "top 85%",
          onEnter: ()=>timeline.play()
      });
  }

  $("[words-rotate-in]").each(function(index) {
      let tl = gsap.timeline({
          paused: true
      });
      tl.set($(this).find(".word"), {
          transformPerspective: 1000
      });
      tl.from($(this).find(".word"), {
          rotationX: -90,
          duration: 0.8,
          ease: "power2.out",
          stagger: {
              amount: 0.8
          }
      });
      createScrollTrigger($(this), tl);
  });

  // Avoid flash of unstyled content
  gsap.set("[text-split]", {
      opacity: 1
  });
}
);

