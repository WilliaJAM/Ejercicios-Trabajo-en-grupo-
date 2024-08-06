const baseDeDatos = [
    { cedula: '12345678', nombre: 'Ana Pérez', telefono: '3001234567', edad: 25 },
    { cedula: '87654321', nombre: 'Juan Gómez', telefono: '3107654321', edad: 17 }
];

const usuariosAdmitidos = [];
const usuariosRechazados = [];

function validarUsuario() {
    const cedula = document.getElementById('cedula').value;
    const nombre = document.getElementById('nombre').value;
    const telefono = document.getElementById('telefono').value;
    const edad = parseInt(document.getElementById('edad').value);

    if (!cedula || !nombre || !telefono || isNaN(edad) || edad <= 0) {
        alert('Por favor, complete todos los campos correctamente.');
        return;
    }

    let usuarioExistente = baseDeDatos.find(user => user.cedula === cedula);

    if (usuarioExistente) {
        if (edad >= 18) {
            usuariosAdmitidos.push({ cedula, nombre, telefono, edad, estado: 'Admitido' });
        } else {
            usuariosRechazados.push({ cedula, nombre, telefono, edad, estado: 'Rechazado' });
        }
    } else {
        baseDeDatos.push({ cedula, nombre, telefono, edad });
        usuariosAdmitidos.push({ cedula, nombre, telefono, edad, estado: 'Admitido' });
    }

    mostrarUsuarios();
}

function mostrarUsuarios() {
    const tablaUsuarios = document.getElementById('tablaUsuarios');
    tablaUsuarios.innerHTML = '';

    [...usuariosAdmitidos, ...usuariosRechazados].forEach(item => {
        const nuevaFila = document.createElement('tr');
        nuevaFila.innerHTML = `
            <td>${item.cedula}</td>
            <td>${item.nombre}</td>
            <td>${item.telefono}</td>
            <td>${item.edad}</td>
            <td>${item.estado}</td>
        `;
        tablaUsuarios.appendChild(nuevaFila);
    });

    document.getElementById('totalAdmitidos').textContent = `Admitidos: ${usuariosAdmitidos.length}`;
    document.getElementById('totalRechazados').textContent = `Rechazados: ${usuariosRechazados.length}`;
}
