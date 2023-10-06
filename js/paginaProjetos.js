var videos = document.querySelectorAll('.autoplay-video');

// Configurações para o Intersection Observer
var options = {
  root: null, // Use o viewport como elemento raiz
  rootMargin: '0px', // Não aplique margem à área de intersecção
  threshold: 0.5 // 50% do elemento deve estar visível
};

// Função para lidar com as mudanças na intersecção
function handleIntersection(entries, observer) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      // O vídeo está visível na tela, então inicie a reprodução
      entry.target.play();
    } else {
      // O vídeo não está visível na tela, então pause a reprodução
      entry.target.pause();
    }
  });
}

// Crie um Intersection Observer para cada vídeo
videos.forEach(function(video) {
  var observer = new IntersectionObserver(handleIntersection, options);
  observer.observe(video);
});