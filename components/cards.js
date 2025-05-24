function crearCards(categorias) {
  const container = document.getElementById("cards-container");

  categorias.forEach(cat => {
    const card = document.createElement("article");
    card.className = "card";
    card.style.width = "20rem";

    card.innerHTML = `
      <a href="${cat.enlace}" class="text-decoration-none text-dark">
        <img src="${cat.imagen}" class="card-img-top" alt="${cat.titulo}">
        <div class="card-body text-center">
          <h4 class="card-title">${cat.titulo}</h4>
        </div>
      </a>
    `;

    container.appendChild(card);
  });
}


function renderCards(productos, idContenedor) {
  const container = document.getElementById(idContenedor);
  container.innerHTML = productos.map(prod => `
    <div class="col-md-6 col-lg-4 d-flex">
      <div class="card product-card d-flex flex-column w-100">
        <img src="${prod.imagen}" alt="${prod.nombre}" class="product-img card-img-top" />
        <div class="card-body d-flex flex-column text-center">
          <h4 class="product-title">${prod.nombre}</h4>
          <p class="fw-bold text-success fs-5">${"$" + prod.precio.toLocaleString('es-AR')}</p>
          <div class="d-flex justify-content-center align-items-center gap-2 mb-3">
            <button class="btn btn-outline-secondary btn-sm" onclick="decrement(this)">−</button>
            <input type="number" value="1" min="1" class="form-control text-center" style="width: 60px;" />
            <button class="btn btn-outline-secondary btn-sm" onclick="increment(this)">+</button>
          </div>
          <button class="btn btn-custom w-100 mt-auto">Agregar al carrito</button>
        </div>
      </div>
    </div>
  `).join("");
}
