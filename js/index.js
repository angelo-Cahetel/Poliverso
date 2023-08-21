
// INTRO

window.addEventListener('load', function() {
  // Remove a tela de loading
  var loadingScreen = document.getElementById('loading-screen');
  var content = document.getElementById('content');

  loadingScreen.style.display = 'none';
  content.classList.remove('hidden');
});


//CURSOR
var cursor = document.querySelector(".cursor")

document.querySelector(".clip__inner").addEventListener("mousemove", (e) => {
  var x = e.clientX
  var y = e.clientY

  gsap.to(".cursor", .5, {duration: 0, x: x, y: y})
})

document.querySelector(".clip__inner").addEventListener("mouseenter", () => {
  gsap.to(".cursor", .5, {scale: 1, ease: "expo.inOut"})
})

document.querySelector(".clip__inner").addEventListener("mouseleave", () => {
  gsap.to(".cursor", .5, {scale: 0, ease: "expo.inOut"})
})
