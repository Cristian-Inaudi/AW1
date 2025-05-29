document.addEventListener("DOMContentLoaded", () => {
  fetch("data/productos.json")
    .then(response => response.json())
    .then(data => {
      const productosRegionales = data.filter(p => p.categoria === "productos_regionales");
      renderCards(productosRegionales, "productos-container");
    })
    .catch(error => {
      console.error("Error al cargar los productos regionales:", error);
    });
});