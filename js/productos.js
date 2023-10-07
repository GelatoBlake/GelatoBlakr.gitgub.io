// Esta función se llamará al cargar la página de productos
function cargarCarrito() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    // Puedes usar los datos del carrito para actualizar la interfaz aquí si es necesario

    console.log('Carrito cargado:', carrito);
}

// Llama a la función para cargar el carrito al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    cargarCarrito();
});

function agregarAlCarrito(nombre, precio) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    let productoEnCarrito = carrito.find(item => item.nombre === nombre);

    if (productoEnCarrito) {
        // Si el producto ya está en el carrito, aumenta la cantidad
        productoEnCarrito.cantidad++;
    } else {
        // Si es un nuevo producto, agrégalo al carrito
        carrito.push({ nombre, precio, cantidad: 1 });
    }

    // Guarda el carrito en el almacenamiento local
    localStorage.setItem('carrito', JSON.stringify(carrito));
    
    console.log('Producto agregado al carrito:', { nombre, precio });
}