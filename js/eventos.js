// Filtrar productos en el Array 'productos' según lo ingresado en el prompt.

function filtrarProductos() {
  let filtro = document.getElementById("inputBuscador").value.toLowerCase();
  const resultado = productos.filter((productos) =>
    productos.producto.includes(filtro)
  );
  // ! Agrego las librerías de Sweet Alert para mostrarle al usuario según su búsqueda.
  // ? Para entrega de Librerías
  resultado.length === 0
    ? Swal.fire({
        title: "¡Producto No Encontrado!",
        text: "Intente nuevamente",
        icon: "error",
        confirmButtonText: "OK",
      })
    : Swal.fire({
        title: "¡Producto Encontrado!",
        text: "Continúe a los resultados",
        icon: "success",
        confirmButtonText: "OK",
      }),
    console.table(resultado);
}

let buscarProd = document.getElementById("buscarProductos");
buscarProd.addEventListener("click", filtrarProductos);
