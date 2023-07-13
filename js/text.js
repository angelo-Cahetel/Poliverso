document.addEventListener("DOMContentLoaded", () => {

    const textPath = document.getElementById("text-path");
    const scrollSpeed = 2.5; // You can change this value to control the speed
    const animationDirection = "right"; // You can change this value to "left" or "right"
    const startPosition = 100; // You can change this value to set the starting position (in percentage)

    const updateTextPosition = () => {
        const container = document.querySelector(".container");
        const containerRect = container.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (containerRect.top <= windowHeight && containerRect.bottom >= 0) {
            const directionMultiplier = animationDirection === "right" ? 1 : -1;
            const startOffset = startPosition + ((containerRect.top - windowHeight) / (containerRect.height + windowHeight)) * 100 * scrollSpeed * directionMultiplier;
            textPath.setAttribute("startOffset", startOffset + "%");
        }

    }

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    updateTextPosition();
                }
            });
        },
        { threshold: 0.1 }
    );

    observer.observe(textPath);

    window.addEventListener("scroll", updateTextPosition);
})

// texto da pagina principal

// Register plugins.
gsap.registerPlugin(ScrollSmoother, ScrollTrigger, SplitText);

// Split text by words.
const textElement = document.querySelector('#text');
const splittedText = new SplitText(textElement, {
  tag: 'span',
  type: 'words',
  wordsClass: 'text__word',
});

// Animate each words on scroll with in-between delays.
gsap.to(splittedText.words, {
  duration: 2,
  ease: 'none',
  opacity: 1,
  stagger: 0.5,
  scrollTrigger: {
    trigger: textElement,
    start: 'top 70%',
    end: 'bottom 30%',
    scrub: true,
  },
});

// Scroll uniformization (e.g. mouse wheel vs magic mouse).
ScrollSmoother.create({
  smooth: 0.25,
  effects: true,
});
