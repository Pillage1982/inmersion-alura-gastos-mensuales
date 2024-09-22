let listaNombresGasto = [];
let listaValoresGasto = [];
let listaDetallesGasto = [];
let posicionEditando = -1;  // Variable para indicar si estamos editando un gasto

document.addEventListener('DOMContentLoaded', () => {
    // Añadir el evento al botón después de que el DOM se haya cargado
    document.getElementById('botonFormulario').addEventListener('click', clickBoton);
});

function clickBoton() {
    // Obtener los valores de los campos antes de limpiar
    const nombreGasto = document.getElementById('nombreGasto').value.trim();
    const valorGasto = parseFloat(document.getElementById('valorGasto').value);
    const detalleGasto = document.getElementById('detalleGasto').value.trim();

    // Validación: Asegúrate de que todos los campos están rellenados correctamente
    if (!nombreGasto || isNaN(valorGasto) || !detalleGasto) {
        alert("Por favor, completa todos los campos (nombre, valor, detalle) correctamente.");
        return;  // Detener si no son válidos
    }

    // Mostrar advertencia solo si el gasto excede los 150 USD
    if (valorGasto > 150) {
        alert("Advertencia: Este gasto excede los 150 USD");
    }

    // Agregar o editar el gasto según el modo
    if (posicionEditando === -1) {
        // Agregar un nuevo gasto
        listaNombresGasto.push(nombreGasto);
        listaValoresGasto.push(valorGasto);
        listaDetallesGasto.push(detalleGasto);
    } else {
        // Editar un gasto existente
        listaNombresGasto[posicionEditando] = nombreGasto;
        listaValoresGasto[posicionEditando] = valorGasto;
        listaDetallesGasto[posicionEditando] = detalleGasto;
        posicionEditando = -1;  // Restablecer a modo agregar
    }

    // Actualizar la lista de gastos
    actualizarListaGastos();

    // Limpiar los campos después de agregar o editar el gasto
    limpiar();
}

function actualizarListaGastos() {
    const listaElementos = document.getElementById('listaDeGastos');
    const totalElementos = document.getElementById('totalGastos');
    let htmlLista = '';
    let totalGastos = 0;

    listaNombresGasto.forEach((elemento, posicion) => {
        const valorGasto = Number(listaValoresGasto[posicion]);
        const detalleGasto = listaDetallesGasto[posicion];

        // Verificar si el gasto excede los 150 USD y agregar la clase "gasto-alto" si es necesario
        const claseGasto = valorGasto > 150 ? 'gasto-alto' : '';

        htmlLista += `<li class="${claseGasto}">
                        ${elemento} - USD ${valorGasto.toFixed(2)} 
                        (Detalle: ${detalleGasto}) 
                        <button onclick="editarGasto(${posicion});">Editar</button> 
                        <button onclick="eliminarGasto(${posicion});">Eliminar</button>
                      </li>`;
        totalGastos += valorGasto;
    });

    listaElementos.innerHTML = htmlLista;
    totalElementos.innerHTML = totalGastos.toFixed(2);
}

function limpiar() {
    // Limpiar los campos después de agregar o editar el gasto
    document.getElementById('nombreGasto').value = '';
    document.getElementById('valorGasto').value = '';
    document.getElementById('detalleGasto').value = '';
}

function eliminarGasto(posicion) {
    listaNombresGasto.splice(posicion, 1);
    listaValoresGasto.splice(posicion, 1);
    listaDetallesGasto.splice(posicion, 1);
    actualizarListaGastos();
}

function editarGasto(posicion) {
    // Cargar los valores en los campos para editar
    document.getElementById('nombreGasto').value = listaNombresGasto[posicion];
    document.getElementById('valorGasto').value = listaValoresGasto[posicion];
    document.getElementById('detalleGasto').value = listaDetallesGasto[posicion];

    // Establecer la posición del gasto que estamos editando
    posicionEditando = posicion;
}
