document.addEventListener("DOMContentLoaded", () => {
  renderizarCarrito();
});

// Renderiza el carrito mostrando productos y el total general
function renderizarCarrito() {
  const contenedor = document.getElementById("carrito-container");
  if (!contenedor) return;

  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  if (carrito.length === 0) {
    contenedor.innerHTML = `
      <p class="text-center fs-3 fw-bold text-muted mt-5">
        Tu carrito está vacío.
      </p>
    `;
    return;
  }

  contenedor.innerHTML = "";

  let totalGeneral = 0;

  carrito.forEach((producto, index) => {
    const subtotal = producto.precio * producto.cantidad;
    totalGeneral += subtotal;

    const item = document.createElement("div");
    item.className = "col-md-6 col-lg-4 mb-4";
    item.innerHTML = `
      <div class="card h-100">
        <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
        <div class="card-body text-center">
          <h5 class="card-title">${producto.nombre}</h5>
          <p>Cantidad: ${producto.cantidad}</p>
          <p class="fw-bold">Subtotal: $${subtotal.toLocaleString('es-AR')}</p>
          <button class="btn btn-danger btn-sm" onclick="eliminarProducto(${index})">Eliminar</button>
        </div>
      </div>
    `;
    contenedor.appendChild(item);
  });

  // Total general al final del carrito
  const totalDiv = document.createElement("div");
  totalDiv.className = "col-12 mt-4 text-center";
  totalDiv.innerHTML = `
    <h4 class="fw-bold">Total de tu compra: $${totalGeneral.toLocaleString('es-AR')}</h4>
  `;
  contenedor.appendChild(totalDiv);
}

// Función para eliminar productos del carrito
function eliminarProducto(indice) {
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  carrito.splice(indice, 1);
  localStorage.setItem("carrito", JSON.stringify(carrito));

  renderizarCarrito();
  actualizarCantidadCarrito();
}
