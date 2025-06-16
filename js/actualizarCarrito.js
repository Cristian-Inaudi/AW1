// Actualiza elemento del carrito para el contador
function actualizarCantidadCarrito() {
  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  const total = carrito.reduce((acc, p) => acc + p.cantidad, 0);
  const span = document.getElementById("cant-carrito");
  if (span) span.textContent = `(${total})`;
}