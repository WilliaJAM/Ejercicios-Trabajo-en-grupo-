const productos = [];

function agregarProducto() {
    const producto = document.getElementById('producto').value;
    const precio = parseFloat(document.getElementById('precio').value);
    const descuento = parseFloat(document.getElementById('descuento').value);

    if (!producto || isNaN(precio) || isNaN(descuento) || precio <= 0 || descuento < 0) {
        alert('Por favor, complete todos los campos correctamente.');
        return;
    }

    const total = precio - (precio * (descuento / 100));
    productos.push({ producto, precio, descuento, total });
    mostrarProductos();
}

function mostrarProductos() {
    const tablaProductos = document.getElementById('tablaProductos');
    tablaProductos.innerHTML = '';

    productos.forEach(item => {
        const nuevaFila = document.createElement('tr');
        nuevaFila.innerHTML = `
            <td>${item.producto}</td>
            <td>${item.precio.toFixed(2)}</td>
            <td>${item.descuento.toFixed(2)}</td>
            <td>${item.total.toFixed(2)}</td>
        `;
        tablaProductos.appendChild(nuevaFila);
    });
}
