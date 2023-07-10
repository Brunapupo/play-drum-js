function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento != null && elemento.localName === 'audio') {
            elemento.play();
    } 
    else {
        console.log('Elemento não encontrado ou seletor inválido');
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');


for (let i = 0; i < listaDeTeclas.length; i++) {

    const tecla = listaDeTeclas[i]
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    // evento quando uma tecla é aperta/adiciona
    tecla.onkeydown = function (evento) {

        // console.log(evento.code)

        if (evento.code === 'Space' || evento.code === 'Enter' ) {
            tecla.classList.add('ativa');
        }
       
    }

     // evento quando uma tecla é solta/remove
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa')
    }
}
