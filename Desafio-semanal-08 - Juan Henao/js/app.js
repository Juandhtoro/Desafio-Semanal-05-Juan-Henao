const tituloDeArticulo1 = document.querySelector("button");
const elemento = document.querySelectorAll("link");

function cambia_enlace() {
    if (elemento[0].id === 'stl') {
        elemento[0].href = './css/estilos-retro.css';
        elemento[0].id = 'Estilo';
    } else if (elemento[0].id === 'Estilo' || elemento[0].id === 'stl1') {
        elemento[0].href = './css/estilos-futuro.css';
        elemento[0].id = 'Estilo2';
    } else if (elemento[0].id === 'Estilo2' || elemento[0].id === 'stl2') {
        elemento[0].href = './css/estilos.css';
        elemento[0].id = 'stl';
    }
}

tituloDeArticulo1.onclick = cambia_enlace;
