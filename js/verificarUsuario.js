document.addEventListener("DOMContentLoaded", () => {
  const usuarioJSON = sessionStorage.getItem("usuarioLogueado");

  if (!usuarioJSON) {
    mostrarMensajeGlobal("Debes iniciar sesión para acceder al sitio.");
    setTimeout(() => {
      window.location.href = "login.html";
    }, 1500);
    return;
  }

  const usuario = JSON.parse(usuarioJSON);

  const mostrarUsuario = () => {
    const contenedor = document.getElementById("usuario-logueado");
    if (contenedor) {
      contenedor.innerHTML = `
        <span class="text-white me-2">Hola, <strong>${usuario.nombre}</strong></span>
      `;
    }

    const logoutBtn = document.getElementById("logoutBtn");
    logoutBtn?.addEventListener("click", (e) => {
      e.preventDefault();
      sessionStorage.removeItem("usuarioLogueado");
      window.location.href = "login.html";
    });
  };

  const intervalo = setInterval(() => {
    if (document.getElementById("usuario-logueado")) {
      clearInterval(intervalo);
      mostrarUsuario();
    }
  }, 100);
});

function mostrarMensajeGlobal(texto, duracion = 3000) {
  const contenedor = document.getElementById("mensaje-global");
  if (!contenedor) return;

  contenedor.textContent = texto;
  contenedor.classList.add("show");

  setTimeout(() => {
    contenedor.classList.remove("show");
  }, duracion);
}
