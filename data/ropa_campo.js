document.addEventListener("DOMContentLoaded", () => {
  fetch("data/productos.json")
    .then(response => response.json())
    .then(data => {
      const ropaCampo = data.filter(p => p.categoria === "ropa_campo");
      renderCards(ropaCampo, "productos-container");
    })
    .catch(error => {
      console.error("Error al cargar los productos regionales:", error);
    });
});