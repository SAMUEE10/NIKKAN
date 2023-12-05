document.addEventListener('DOMContentLoaded', function () {
    // Esperar a que se cargue el contenido antes de asignar eventos

    // Obtener referencia al botón "Ingresar"
    const ingresarButton = document.querySelector('.submit-btn');

    // Agregar un evento de clic al botón "Ingresar"
    ingresarButton.addEventListener('click', function (event) {
        event.preventDefault(); // Evitar que el formulario se envíe (por defecto)

        // Obtener referencias a los checkboxes de roles
        const estudianteCheckbox = document.getElementById('estudiante');
        const docenteCheckbox = document.getElementById('docente');

        // Verificar si al menos uno de los checkboxes está marcado
        if (!estudianteCheckbox.checked && !docenteCheckbox.checked) {
            mostrarMensaje('Por favor, seleccione al menos un rol (Estudiante o Docente).');
            return;
        }

        // Redireccionar según el rol seleccionado
        if (estudianteCheckbox.checked) {
            window.location.href = 'C:/PAGINA WEB/Maestro/bienvenido.html';
        } else {
            mostrarMensaje('¡Bienvenido Docente!');
        }
    });
});

function mostrarMensaje(mensaje) {
    alert(mensaje);
}
