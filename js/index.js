
// INTRO
window.addEventListener('load', function() {
  var myVideo = document.getElementById('myVideo');
  var videoContainer = document.getElementById('videoContainer');

  myVideo.addEventListener('loadeddata', function() {
      // Esconder o vídeo assim que ele carregar completamente
      myVideo.style.display = 'none';

      // Evento que é chamado quando o vídeo parar de tocar
      myVideo.addEventListener('ended', function() {
          // Remover o vídeo e o container quando o vídeo terminar
          videoContainer.parentNode.removeChild(videoContainer);
      });

      // Exibir o vídeo novamente para iniciar a reprodução
      myVideo.style.display = 'block';
      myVideo.play();
  });
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
