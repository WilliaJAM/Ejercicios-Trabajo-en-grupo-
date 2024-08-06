function calcularCuotas() {
    const montoPrestamo = parseFloat(document.getElementById('montoPrestamo').value);
    const numeroCuotas = parseInt(document.getElementById('numeroCuotas').value);
    const tipoCredito = parseFloat(document.getElementById('tipoCredito').value);
    
    if (isNaN(montoPrestamo) || montoPrestamo <= 0 || isNaN(numeroCuotas) || numeroCuotas <= 0) {
        alert('Por favor, ingrese valores válidos para el monto del préstamo y el número de cuotas.');
        return;
    }

    let interes = tipoCredito;
    let descuento = 0;

    if (numeroCuotas < 6) {
        descuento = 0.2;
    } else if (numeroCuotas >= 12 && numeroCuotas < 24) {
        descuento = 0.4;
    } else if (numeroCuotas >= 24) {
        descuento = 0.7;
    }

    interes -= descuento;

    const tasaInteres = interes / 100;
    const cuotaMensual = (montoPrestamo * tasaInteres) / (1 - Math.pow(1 + tasaInteres, -numeroCuotas));

    // Mostrar los resultados en la tabla
    const tablaCreditos = document.getElementById('tablaCreditos');
    tablaCreditos.innerHTML = `
        <tr>
            <td>${obtenerTipoCredito(tipoCredito)}</td>
            <td>${numeroCuotas}</td>
            <td>${interes.toFixed(2)}</td>
            <td>${cuotaMensual.toFixed(2)}</td>
        </tr>
    `;
}

function obtenerTipoCredito(valor) {
    switch (valor) {
        case 2.5:
            return 'Libre Inversión';
        case 2.9:
            return 'Libranza';
        default:
            return 'Desconocido';
    }
}
