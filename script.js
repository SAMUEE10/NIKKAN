const backgroundImages = [
    'url(imagenes/imagen_inicio_1.jpg)',
    'url(imagenes/imagen_inicio_2.jpg)',
    'url(imagenes/imagen_inicio_3.jpg)',
];

let currentImageIndex = 0;

function cambiarImagenFondo() {
    const backgroundContainer = document.querySelector('.background-images');
    currentImageIndex = (currentImageIndex + 1) % backgroundImages.length;
    backgroundContainer.style.backgroundImage = backgroundImages[currentImageIndex];
}

setInterval(cambiarImagenFondo, 5000);

function validarFormulario() {
    const tipoDocumento = document.getElementById('tipo_documento').value;
    const usuario = document.getElementById('usuario').value;
    const contrasena = document.getElementById('contrasena').value;

    if (tipoDocumento === '' || usuario === '' || contrasena === '') {
        alert('Por favor, complete todos los campos.');
        return false;
    }

    const estudianteCheckbox = document.getElementById('estudiante');
    const docenteCheckbox = document.getElementById('docente');

    if (estudianteCheckbox.checked && docenteCheckbox.checked) {
        alert('Por favor, seleccione solo un rol (Estudiante o Docente).');
        return false;
    }

    if (estudianteCheckbox.checked) {
        mostrarMensaje('¡Bienvenido Estudiante!');
    } else if (docenteCheckbox.checked) {
        mostrarMensaje('¡Bienvenido Docente!');
    }

    return true;
}

function mostrarMensaje(mensaje) {
    alert(mensaje);
}