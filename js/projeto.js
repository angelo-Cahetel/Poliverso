document.addEventListener("DOMContentLoaded", function () { 
  const filterButtons = document.querySelectorAll(".filter-button");
  const images = document.querySelectorAll(".image-container > div"); // Select image containers instead of individual images
  
  filterButtons.forEach(button => {
    button.addEventListener("click", function () {
      filterButtons.forEach(btn => btn.classList.remove("active"));
      this.classList.add("active");
  
      const filter = this.getAttribute("data-filter");
  
      images.forEach(image => {
        const imageCategory = image.querySelector("h1").getAttribute("data-category"); 
        if (filter === "all" || imageCategory === filter) {
          image.style.display = "block";
        } else {
          image.style.display = "none";
        }
      });
    });
  });
});

// Função para adicionar eventos de mouseenter e mouseleave a um elemento de vídeo
function adicionarEventosVideo(videoId, player) {
  var elementoVideo = document.getElementById(videoId);
  
  elementoVideo.addEventListener('mouseenter', function () {
    if (player) {
      player.play().catch(function(error) {
        console.error('Erro ao reproduzir o vídeo:', error);
      });
    }
  });

  elementoVideo.addEventListener('mouseleave', function () {
    if (player) {
      player.pause().catch(function(error) {
        console.error('Erro ao pausar o vídeo:', error);
      });
    }
  });
}

// Criação de reprodutores Vimeo para cada vídeo
var vimeoPlayerBoss = new Vimeo.Player('videoBoss');
var vimeoPlayerAurea = new Vimeo.Player('videoAurea');
var vimeoPlayerVintage = new Vimeo.Player('videoVintage');
var vimeoPlayer30 = new Vimeo.Player('video30');
var vimeoPlayerPride = new Vimeo.Player('videoPride');
var vimeoPlayerBpro = new Vimeo.Player('videoBpro');
var vimeoPlayerGatorade = new Vimeo.Player('videoGatorade');
var vimeoPlayerBarracadabra = new Vimeo.Player('videoBarracadabra');
var vimeoPlayerApp = new Vimeo.Player('videoApp');
var vimeoPlayerIguatemi = new Vimeo.Player('videoIguatemi');
var vimeoPlayerTermolar = new Vimeo.Player('videoTermolar');
var vimeoPlayerCaldeira = new Vimeo.Player('videoCaldeira');
var vimeoPlayerInos = new Vimeo.Player('videoInos');
var vimeoPlayerSports = new Vimeo.Player('videoSports');
var vimeoPlayerWine = new Vimeo.Player('videoWine');
var vimeoPlayerBraskem = new Vimeo.Player('videoBraskem');
// Adicione mais reprodutores Vimeo conforme necessário

// Adicione eventos de mouseenter e mouseleave para cada vídeo usando a função
adicionarEventosVideo('videoBoss', vimeoPlayerBoss);
adicionarEventosVideo('videoAurea', vimeoPlayerAurea);
adicionarEventosVideo('videoVintage', vimeoPlayerVintage);
adicionarEventosVideo('video30', vimeoPlayer30);
adicionarEventosVideo('videoPride', vimeoPlayerPride);
adicionarEventosVideo('videoBpro', vimeoPlayerBpro);
adicionarEventosVideo('videoGatorade', vimeoPlayerGatorade);
adicionarEventosVideo('videoBarracadabra', vimeoPlayerBarracadabra);
adicionarEventosVideo('videoApp', vimeoPlayerApp);
adicionarEventosVideo('videoIguatemi', vimeoPlayerIguatemi);
adicionarEventosVideo('videoTermolar', vimeoPlayerTermolar);
adicionarEventosVideo('videoCaldeira', vimeoPlayerCaldeira);
adicionarEventosVideo('videoInos', vimeoPlayerInos);
adicionarEventosVideo('videoSports', vimeoPlayerSports);
adicionarEventosVideo('videoWine', vimeoPlayerWine);
adicionarEventosVideo('videoBraskem', vimeoPlayerBraskem);


//fazendo a pagina do projeto abrir
document.getElementById('Boss').addEventListener('click', function () {
  //redirecionando a pagina
  window.location.href = 'boss.html';
});