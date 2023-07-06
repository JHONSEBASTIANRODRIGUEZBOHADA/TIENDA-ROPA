const menu = document.querySelector('.hamburgesa');
const navegacion = document.querySelector('.navegacion');
const imagenes =  document.querySelectorAll('img');
const btnTodos =  document.querySelectorAll('.todos');
const btnBusos =  document.querySelectorAll('.buso');
const btnPantalones =  document.querySelectorAll('.pantalon');
const btChaquetas =  document.querySelectorAll('.chaqueta');
const btnMaletas =  document.querySelectorAll('.maleta');
const contenedorRopas =  document.querySelectorAll('.ropas');


document.addEventListener('DOMContentLoaded',()=>{
    eventos();
});

const eventos = () =>{
    menu.addEventListener('click', abrirMenu);
}

const abrirMenu = ()=>{ 
    navegacion.classList.remove('ocultar');
    botonCerrar();
}


const botonCerrar = () =>{
    const btnCerrar = document.createElement('p');
    const overlay = document.createElement('div');
    overlay.classList.add('pantalla-completa');
    const body = document.querySelector('body');
    if (document.querySelectorAll('.pantalla-completa').length > 0) return;
    body.appendChild(overlay);
    btnCerrar.textContent = 'X';
    btnCerrar.classList.add('btn-cerrar');
    navegacion.appendChild(btnCerrar);
    cerrarMenu(btnCerrar, overlay);
}

const observer = new IntersectionObserver((entries, observer)=>{
    entries.forEach(entry=>{
        if (entry.isIntersecting) {
            const imagen = entry.target;
            imagen.src = imagen.dataset.src;
            observer.unobserve(imagen);
        }
    });
});

imagenes.forEach(imagen=>{
    observer.observe(imagen);
});


const cerrarMenu = (boton, overlay) =>{
    boton.addEventListener('click', ()=>{
        navegacion.classList.add('ocultar');
        overlay.remove();
        boton.remove();
    });

    overlay.onclick = function(){
        overlay.remove();
        navegacion.classList.add('ocultar');
        boton.remove();
    }
}

const ropas = () =>{
    let ropasArreglo = [];
    const ropas = document.querySelectorAll('.ropa');

    ropas.forEach(ropa=>ropasArreglo = [...ropasArreglo, ropa]);

    const busos = ropasArreglo.filter(buso=> buso.getAttribute('data-ropa') === 'buso');
    const pantalones = ropasArreglo.filter(pantalon=> pantalon.getAttribute('data-ropa') === 'pantalon');
    const chaquetas = ropasArreglo.filter(chaqueta=> chaqueta.getAttribute('data-ropa') === 'chaqueta');
    const maletas = ropasArreglo.filter(maleta=> maleta.getAttribute('data-ropa') === 'maleta');

    mostrarRopas(busos, pantalones, chaquetas, maletas, ropasArreglo);
}

const mostrarRopas = (busos, pantalones, chaquetas, maletas) =>{
    btnBusos.addEventListener('click', ()=>{
        limpiarHtml(contenedorRopas);
        busos.forEach(busos=>contenedorRopas.appendChild(buso));
    });
    btnPantalones.addEventListener('click', ()=>{
        limpiarHtml(contenedorRopas);
        pantalones.forEach(pantalones=>contenedorRopas.appendChild(pantalon));
    });
    btnChaquetas.addEventListener('click', ()=>{
        limpiarHtml(contenedorRopas);
        chaquetas.forEach(chaquetas=>contenedorRopas.appendChild(chaqueta));
    });
    btnMaletas.addEventListener('click', ()=>{
        limpiarHtml(contenedorRopas);
        maletas.forEach(maletas=>contenedorRopas.appendChild(maleta));
    });

    btnTodos.addEventListener('click', ()=>{
        limpiarHtml(contenedorRopas);
        todos.forEach(todo=>contenedorRopas.appendChild(todo));
    });
}

const limpiarHtml = (contenedor) => {
    while (contenedor.firstChild) {
        contenedor.removeChild(contenedor.firstChild);
    }
}

