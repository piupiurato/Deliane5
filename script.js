const paragrafos = document.querySelectorAll('.paragrafo');
const musica = document.getElementById('musica');
let indice = 0;
let musicaIniciada = false;

function mostrarParagrafo() {
  if (!musicaIniciada) {
    musica.play();
    musicaIniciada = true;
  }

  if (indice < paragrafos.length) {
    paragrafos[indice].classList.add('mostrar');
    indice++;
  } else {
    alert('Fim da carta. Eu te amo! ❤️');
  }
}
