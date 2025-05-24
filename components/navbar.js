function crearNavbar(paginas) {
  const navbarContainer = document.getElementById("navbar");

  // Obtener nombre de archivo actual (por ejemplo: "bijou_accesorios.html")
  const paginaActual = window.location.pathname.split("/").pop();

  navbarContainer.innerHTML = `
    <nav class="navbar navbar-expand-lg navbar-dark">
      <div class="container-fluid">
        <a class="navbar-brand d-flex align-items-center" href="index.html" style="margin-right: 20px;">
          <img src="assets/logo.png" alt="LG Store Logo" style="width: 50px; height: auto; margin-right: 15px; border-radius: 10px;">
          LG Store
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav mx-auto fs-5">
            ${paginas.map(p => `
              <li class="nav-item px-3">
                <a class="nav-link ${paginaActual === p.url ? "active" : ""}" href="${p.url}">${p.nombre}</a>
              </li>
            `).join("")}
          </ul>
          <ul class="navbar-nav ms-auto fs-5">
            <li class="nav-item px-3">
              <a id="logoutBtn" class="nav-link" href="login.html" title="Cerrar sesión">
                <i class="bi bi-box-arrow-right"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `;
}
