// Crear variables constantes
const nombreINP = document.getElementById("inp-nombre");
const emailINP = document.getElementById("inp-email");
const contraINP = document.getElementById("inp-contra");
const Formu = document.getElementById("form-register");
const btnRegistrar = document.getElementById("btn-registrar");

btnRegistrar.addEventListener("click", function(event){
    event.preventDefault();

    // Validar que ningún campo esté vacío
    if(nombreINP.value === '' || emailINP.value === '' || contraINP.value === '') {
        alert('No se pueden agregar campos vacíos. Por favor, complete todos los campos.');
        return; 
    }

    // Validar el formato del correo electrónico
    const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailFormat.test(emailINP.value)) {
        alert('El formato del correo electrónico no es válido. Por favor, ingrese un correo electrónico válido.');
        return; // Detener la ejecución si el formato del correo electrónico no es válido
    }

    // Validar la longitud mínima de la contraseña
    if (contraINP.value.length < 6) {
        alert('La contraseña debe tener al menos 6 caracteres.');
        return; // Detener la ejecución si la contraseña es demasiado corta
    }

    // Si todas las validaciones pasan, enviar el formulario
    Formu.submit();
});
