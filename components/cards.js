async function crearCards(ruta) {
  try {
    const response = await fetch(ruta);
    const categorias = await response.json();

    const contenedor = document.getElementById("cards-container");

    categorias.forEach(cat => {
      const card = document.createElement("div");
      card.className = "card shadow-sm";
      card.style.width = "20rem";

      card.innerHTML = `
      <a href="${cat.enlace}" class="text-decoration-none text-dark">
        <img src="${cat.imagen}" class="card-img-top" alt="${cat.titulo}">
        <div class="card-body text-center">
          <h4 class="card-title">${cat.titulo}</h4>
        </div>
      </a>
      `;
      contenedor.appendChild(card);
    });

  } catch (error) {
    console.error("Error cargando categorías:", error);
  }
}


function renderCards(productos, contenedorId) {
  const contenedor = document.getElementById(contenedorId);
  contenedor.innerHTML = "";

  productos.forEach(producto => {
    const card = document.createElement("div");
    card.className = "col-md-6 col-lg-4 d-flex";
    card.innerHTML = `
      <div class="card product-card d-flex flex-column w-100">
        <img src="${producto.imagen}" class="product-img card-img-top" alt="${producto.nombre}">
        <div class="card-body d-flex flex-column text-center">
          <h5 class="card-title">${producto.nombre}</h5>
          <p class="card-text">${producto.descripcion}</p>
          <p class="card-text fw-bold text-success fs-5">${"$" + producto.precio.toLocaleString('es-AR')}</p>
          <div class="d-flex justify-content-center align-items-center gap-2 mb-3">
            <button class="btn btn-outline-secondary btn-sm" onclick="decrement(this)">−</button>
            <input type="number" value="1" min="1" class="form-control text-center" style="width: 60px;" />
            <button class="btn btn-outline-secondary btn-sm" onclick="increment(this)">+</button>
          </div>
          <button class="btn btn-custom w-100 mt-auto">Agregar al carrito</button>
        </div>
      </div>
    `;
    contenedor.appendChild(card);
  });
}