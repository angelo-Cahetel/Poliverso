
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

function rotateCardOnMouseEnter($card) {
  let bounds;

  function rotateToMouse(e) {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const leftX = mouseX - bounds.x;
    const topY = mouseY - bounds.y;
    const center = {
      x: leftX - bounds.width / 5,
      y: topY - bounds.height / 5
    };
    const distance = Math.sqrt(center.x ** 2 + center.y ** 2);

    $card.style.transform = `
      scale3d(1.07, 1.07, 1.07)
      rotate3d(
        ${center.y / 100},
        ${-center.x / 100},
        0,
        ${Math.log(distance) * 2.5}deg
      )
    `;
  }

  function resetCard() {
    $card.style.transform = '';
    $card.style.background = '';
  }

  $card.addEventListener('mouseenter', () => {
    bounds = $card.getBoundingClientRect();
    document.addEventListener('mousemove', rotateToMouse);
  });

  $card.addEventListener('mouseleave', () => {
    document.removeEventListener('mousemove', rotateToMouse);
    resetCard();
  });
}

// Selecionando e aplicando a função aos elementos desejados
const $card1 = document.querySelector('.img');
const $card2 = document.querySelector('.img2');
const $card3 = document.querySelector('.img3');
const $card4 = document.querySelector('.img4');
const $card5 = document.querySelector('.img5');
const $card6 = document.querySelector('.img6');
const $card7 = document.querySelector('.img7');

rotateCardOnMouseEnter($card1);
rotateCardOnMouseEnter($card2);
rotateCardOnMouseEnter($card3);
rotateCardOnMouseEnter($card4);
rotateCardOnMouseEnter($card5);
rotateCardOnMouseEnter($card6);
rotateCardOnMouseEnter($card7);


