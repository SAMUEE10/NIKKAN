// Función para mostrar la información del archivo
function mostrarInformacionArchivo() {
    var fileInput = document.getElementById('fileInput');
    var fileDetails = document.getElementById('fileDetails');

    if (fileInput.files.length > 0) {
        var file = fileInput.files[0];
        var fileSize = (file.size / 1024).toFixed(2) + " KB";
        var fileType = file.type;
        var fileName = file.name;

        // Mostrar la información del archivo en el elemento fileDetails
        fileDetails.innerHTML = `<p>Nombre: ${fileName}</p><p>Tipo: ${fileType}</p><p>Tamaño: ${fileSize}</p>`;
    }
}

// Función para mostrar el icono de eliminar al seleccionar un archivo
function mostrarEliminarIcon() {
    var eliminarIcon = document.getElementById("eliminarIcon");
    eliminarIcon.style.display = "block";

    // Mostrar la información del archivo al seleccionar
    mostrarInformacionArchivo();
}

// Función para eliminar el archivo
function eliminarArchivo() {
    // Aquí iría el código para eliminar el archivo
    // Por ejemplo, podrías restablecer el formulario o enviar una solicitud al servidor
    var uploadForm = document.getElementById("uploadForm");
    uploadForm.reset();

    // Ocultar el icono de eliminar y la información del archivo
    var eliminarIcon = document.getElementById("eliminarIcon");
    var fileDetails = document.getElementById('fileDetails');
    eliminarIcon.style.display = "none";
    fileDetails.innerHTML = '';
}

// Función para continuar con la acción después de confirmar
function continuar() {
    // Aquí iría el código para continuar con la acción
    alert("Archivo enviado exitosamente");
}
