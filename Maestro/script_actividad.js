document.addEventListener("DOMContentLoaded", function () {
    console.log("Página de actividad cargada.");

    // Lógica para la página de actividad

    // Manejar el clic en el botón de abrir
    document.querySelector('.open-button').addEventListener('click', function () {
        document.querySelector('.comment-section').style.display = 'block';
    });

    // Manejar el clic en el botón de enviar
    document.querySelector('.send-button').addEventListener('click', function () {
        alert('Comentario enviado');
    });
});
