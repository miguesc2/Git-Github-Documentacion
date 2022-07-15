window.addEventListener('scroll', function() {
    let div = document.getElementById('5__')
    let boton = document.getElementById('buttonSubir')
    let posicionDiv = div.getBoundingClientRect().top
    
    if ( posicionDiv <= 0 ) {
        boton.classList.remove('classHide')
    } else {
        boton.classList.add('classHide')
    }
})

window.addEventListener("resize", function() {
    let divOculto = document.querySelectorAll('#iconCenterId')
    if ( innerWidth < 700 ) {
        for ( let i = 0; divOculto.length > i; i++ ) {
            divOculto[i].classList.remove('classDisplayNone')
        }
    } else {
        for ( let i = 0; divOculto.length > i; i++ ) {
            divOculto[i].classList.add('classDisplayNone')
        }
    }
})

window.onload = function() {
    let divOculto = document.querySelectorAll('#iconCenterId')    
    if ( innerWidth < 700 ) {
        for ( let i = 0; divOculto.length > i; i++ ) {
            divOculto[i].classList.remove('classDisplayNone')
        }
    } else {
        for ( let i = 0; divOculto.length > i; i++ ) {
            divOculto[i].classList.add('classDisplayNone')
        }
    }
}

function ocultarContenido(id) {
    let elemento = document.getElementById(id)
    let spanActual = elemento.parentElement.children[0].children[0]
    
    if ( elemento.classList.contains('parrafo_div') ) {
        elemento.classList.replace('parrafo_div', 'parrafo_div_Copy')   
        spanActual.classList.replace('itemCenter', 'itemCenterRotate')
    } else {
        elemento.classList.replace('parrafo_div_Copy', 'parrafo_div')
        spanActual.classList.replace('itemCenterRotate', 'itemCenter')
    }
}