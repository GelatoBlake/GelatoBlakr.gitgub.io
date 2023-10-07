document.addEventListener('DOMContentLoaded', () => {
    mostrarCarrito();
    window.addEventListener('beforeunload', vaciarCarritoEnSalida);
});

function mostrarCarrito() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const carritoDiv = document.getElementById('carrito');
    const totalPrecioSpan = document.getElementById('totalPrecio');

   
    let totalPrecio = 0;

    carrito.forEach(item => {
        const { nombre, precio, cantidad } = item;

        const productoDiv = document.createElement('div');
        productoDiv.textContent = `${nombre} - Cantidad: ${cantidad} - Precio: $${(precio * cantidad).toFixed(2)}`;
        carritoDiv.appendChild(productoDiv);

        totalPrecio += item.precio * item.cantidad;
    });
  // Actualizar el total de precio en la interfaz
  totalPrecioSpan.textContent = `$${totalPrecio.toFixed(2)}`;

}
