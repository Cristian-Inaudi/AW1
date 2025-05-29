document.addEventListener("DOMContentLoaded", () => {
  const formulario = document.getElementById("registroForm");

  formulario.addEventListener("submit", function (e) {
    e.preventDefault();

    const nuevoUsuario = {
      nombre: document.getElementById("nombre").value,
      apellido: document.getElementById("apellido").value,
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
      fechaNacimiento: document.getElementById("fecha_nacimiento").value
    };

    console.log("Usuario registrado (JSON simulado):", nuevoUsuario);

    window.location.href = "login.html";
  });
});