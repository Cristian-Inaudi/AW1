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

// Armado de las cards
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
          <h5 class="card-title fw-bold">${producto.nombre}</h5>
          <p class="card-text">${producto.descripcion}</p>
          <p class="card-text fw-bold text-success fs-5">${"$" + producto.precio.toLocaleString('es-AR')}</p>
          <div class="d-flex justify-content-center align-items-center gap-2 mb-3">
            <button class="btn btn-outline-secondary btn-sm" onclick="decrement(this)">−</button>
            <input id="cantidad-${producto.id}" type="number" value="1" min="1" class="form-control text-center cantidad-input" style="width: 60px;" aria-label="Cantidad de ${producto.nombre}" title="Cantidad de ${producto.nombre}" placeholder="Cantidad" />
            <label for="cantidad-${producto.id}" class="visually-hidden">Cantidad de ${producto.nombre}</label>
            <button class="btn btn-outline-secondary btn-sm" onclick="increment(this)">+</button>
          </div>
          <button class="btn btn-custom w-100 mt-auto agregar-carrito">Agregar al carrito</button>
        </div>
      </div>
    `;
    contenedor.appendChild(card);
  });

  // Agregado al carrito
  document.querySelectorAll(".agregar-carrito").forEach((btn, index) => {
    btn.addEventListener("click", () => {
      const cantidad = parseInt(btn.parentElement.querySelector(".cantidad-input").value);
      const producto = productos[index];

      agregarAlCarrito({
        id: producto.id,
        nombre: producto.nombre,
        precio: producto.precio,
        imagen: producto.imagen,
        cantidad: cantidad
      });
    });
  });
}

function agregarAlCarrito(producto) {
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  const existente = carrito.find(p => p.id === producto.id);
  if (existente) {
    existente.cantidad += producto.cantidad;
  } else {
    carrito.push(producto);
  }

  localStorage.setItem("carrito", JSON.stringify(carrito));

  actualizarCantidadCarrito();
  mostrarMensaje(`${producto.nombre} agregado al carrito.`);
}

// Mostrar mensaje
function mostrarMensaje(texto) {
  const contenedorMsg = document.getElementById('mensaje-carrito');
  if (!contenedorMsg) return;

  contenedorMsg.textContent = texto;
  contenedorMsg.classList.add('show');

  setTimeout(() => {
    contenedorMsg.classList.remove('show');
  }, 2000);
}

