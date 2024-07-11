
function cambiarEstilosParrafos() {
    document.querySelectorAll('#content p').forEach(p => {
        p.style.fontSize = '20px';
        p.style.color = 'purple';
        p.style.backgroundColor = 'lightyellow';
    });
}

function estilizarParrafosPares() {
    document.querySelectorAll('#content p:nth-child(even)').forEach(p => {
        p.classList.add('par');
    });
}

function estilizarParrafosImpares() {
    document.querySelectorAll('#content p:nth-child(odd)').forEach(p => {
        p.classList.add('impar');
    });
}

function mostrarImagenes() {
    const imagenesDiv = document.getElementById('imagenes');
    imagenesDiv.classList.add('imagenes-visible');
    imagenesDiv.classList.remove('imagenes-oculto');
    if (!imagenesDiv.innerHTML) {
        for (let i = 1; i <= 3; i++) {
            const img = document.createElement('img');
            img.src = `imagen/xd1.jpg`;
            imagenesDiv.appendChild(img);
        }
    }
}

function ocultarImagenes() {
    const imagenesDiv = document.getElementById('imagenes');
    imagenesDiv.classList.add('imagenes-oculto');
    imagenesDiv.classList.remove('imagenes-visible');
}

function cambiarFondoPagina() {
    document.body.classList.toggle('cambiar-fondo');
}

function cambiarColoresTitulos() {
    document.querySelectorAll('h1, h2, h3').forEach(titulo => {
        titulo.style.color = 'red';
    });
}

function validarFormulario() {
    let valido = true;
    document.querySelectorAll('#formulario input').forEach(input => {
        if (!input.value) {
            input.classList.add('vacio');
            valido = false;
        } else {
            input.classList.remove('vacio');
        }
    });

    const edad = document.getElementById('edad').value;
    if (valido && edad < 18) {
        alert('La edad debe ser mayor o igual a 18 años.');
        valido = false;
    }

    if (valido) {
        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        document.getElementById('resultado').innerText = `Nombre: ${nombre} Apellido: ${apellido}`;
    }
}
