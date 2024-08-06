function calcularFactura() {
    const estrato = parseFloat(document.getElementById('estrato').value);
    const metrosCubicos = parseFloat(document.getElementById('metrosCubicos').value);
    const cargoFijo = 5800;
    const recargoPorExceso = 0.10;

    if (isNaN(metrosCubicos) || metrosCubicos <= 0) {
        alert('Por favor, ingrese un valor válido para el consumo en metros cúbicos.');
        return;
    }

    let subtotal = estrato * metrosCubicos;
    let recargo = 0;

    if (metrosCubicos > 20) {
        recargo = subtotal * recargoPorExceso;
    }

    const total = subtotal + recargo + cargoFijo;

    // Mostrar los resultados en la tabla
    const tablaFactura = document.getElementById('tablaFactura');
    tablaFactura.innerHTML = `
        <tr>
            <td>${obtenerEstrato(estrato)}</td>
            <td>${metrosCubicos}</td>
            <td>${subtotal.toFixed(2)}</td>
            <td>${recargo.toFixed(2)}</td>
            <td>${total.toFixed(2)}</td>
        </tr>
    `;
}

function obtenerEstrato(valor) {
    switch (valor) {
        case 1200:
            return 'Estrato 1';
        case 2300:
            return 'Estrato 2';
        case 3200:
            return 'Estrato 3';
        default:
            return 'Desconocido';
    }
}
