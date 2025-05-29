document.addEventListener("DOMContentLoaded", () => {
  fetch("data/productos.json")
    .then(response => response.json())
    .then(data => {
      const bijouAccesorios = data.filter(p => p.categoria === "bijou_accesorios");
      renderCards(bijouAccesorios, "productos-container");
    })
    .catch(error => {
      console.error("Error al cargar los productos regionales:", error);
    });
});