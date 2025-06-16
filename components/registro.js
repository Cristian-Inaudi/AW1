document.addEventListener("DOMContentLoaded", () => {
  const formulario = document.getElementById("registroForm");
  const mensajeContenedor = document.getElementById("mensaje-registro");

  function mostrarMensaje(texto, tipo = "error") {
    mensajeContenedor.textContent = texto;
    mensajeContenedor.className = "mensaje-registro show " + (tipo === "error" ? "mensaje-error" : "mensaje-exito");

    setTimeout(() => {
      mensajeContenedor.classList.remove("show");
    }, 3000);
  }

  formulario.addEventListener("submit", function (e) {
    e.preventDefault();

    const nuevoUsuario = {
      nombre: document.getElementById("nombre").value.trim(),
      apellido: document.getElementById("apellido").value.trim(),
      email: document.getElementById("email").value.trim().toLowerCase(),
      password: document.getElementById("password").value,
      fechaNacimiento: document.getElementById("fecha_nacimiento").value
    };

    // Obtiene lista de usuarios, vacía en caso de no tener usuarios registrados
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    // Verifica si existe el email
    const yaExiste = usuarios.some(usuario => usuario.email === nuevoUsuario.email);
    if (yaExiste) {
      mostrarMensaje("Ya existe un usuario con ese email.", "error");
      return;
    }

    // Guarda nuevo usuario y actualiza el storage.
    usuarios.push(nuevoUsuario);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    mostrarMensaje("¡Usuario registrado exitosamente!", "exito");
    setTimeout(() => {
      window.location.href = "login.html";
    }, 1000);
  });
});
