// Importaciones

// Elementos

const span = document.querySelector('span');

// Apis

// Variables y constantes globales

let incrementador = 0;


// Cargador

document.addEventListener('click', e => {
    //Aumentar y Disminuir el valor

    if (e.target.matches('.incrementar')) {
        incrementador++;
        span.innerHTML = incrementador;
    } else if (e.target.matches('.disminuir')) {
        incrementador--;
        span.innerHTML = incrementador;
    } else if (e.target.matches('.reiniciar')) {
        incrementador = 0;
        span.innerHTML = incrementador;
    }

    if (incrementador < 0) {
        span.style.color = 'red';
    } else {
        span.style.color = 'green';
    }
    if (incrementador == 0)
        span.style.color = 'black'

})


// Funciones

// Eventos

