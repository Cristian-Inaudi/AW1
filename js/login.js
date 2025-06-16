document.getElementById("formuLogin")?.addEventListener("submit", async function(e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim().toLowerCase();
  const password = document.getElementById("password").value;

  // Carga usuarios registrados en usuarios.json
  let usuariosJSON = [];
  try {
    const response = await fetch("data/usuarios.json");
    usuariosJSON = await response.json();
  } catch (error) {
    console.error("Error cargando usuarios.json:", error);
  }

  // Carga nuevos usuarios registrados
  const usuariosLocalStorage = JSON.parse(localStorage.getItem("usuarios")) || [];

  // Une ambas variables de usuarios
  const todosLosUsuarios = [...usuariosJSON, ...usuariosLocalStorage];

  // Busca usuarios por mail y pass
  const usuario = todosLosUsuarios.find(u => 
    u.email.toLowerCase() === email && u.password === password
  );

  if (usuario) {
    // Guarda usuario logueado en Session Storage
    sessionStorage.setItem("usuarioLogueado", JSON.stringify(usuario));
    window.location.href = "index.html";
  } else {
    mostrarMensajeLogin("Email o contraseña incorrectos.");
  }
});

function mostrarMensajeLogin(texto) {
  const contenedorMsg = document.getElementById('mensaje-login');
  if (!contenedorMsg) return;

  contenedorMsg.textContent = texto;
  contenedorMsg.classList.add('show');

  setTimeout(() => {
    contenedorMsg.classList.remove('show');
  }, 3000);
}
