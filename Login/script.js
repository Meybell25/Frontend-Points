document.addEventListener("DOMContentLoaded", function() {
    // Seleccionar elementos del DOM
    const signInBtn = document.getElementById("sign-in");
    const signUpBtn = document.getElementById("sign-up");
    const registerForm = document.querySelector(".container-form.register");
    const loginForm = document.querySelector(".container-form.login");

    // Escuchar clic en el botón "Iniciar Sesión"
    signInBtn.addEventListener("click", function() {
        // Ocultar formulario de registro y mostrar formulario de inicio de sesión
        registerForm.classList.add("hide");
        loginForm.classList.remove("hide");
    });

    // Escuchar clic en el botón "Registrarse"
    signUpBtn.addEventListener("click", function() {
        // Ocultar formulario de inicio de sesión y mostrar formulario de registro
        registerForm.classList.remove("hide");
        loginForm.classList.add("hide");
    });
});
