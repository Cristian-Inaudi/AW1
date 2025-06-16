document.addEventListener("DOMContentLoaded", () => {
  const usuarioJSON = sessionStorage.getItem("usuarioLogueado");

  if (!usuarioJSON) {
    alert("Debes iniciar sesión para acceder al sitio.");
    window.location.href = "login.html";
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
