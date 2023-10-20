function tocaSom (idElementoAudio) {  
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAII('tecla');

//cara
for(let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = '#som_S{instrumento}'; //template string

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

}