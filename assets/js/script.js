let nombreGasto = '';
let valorGasto = '';
let listaNombresGasto = [];
let listaValoresGasto = [];

function clickBoton() {
    let nombreGasto = document.getElementById(nombreGasto).value;
    let valorGasto = document.getElementById(valorGasto).value;

    console.log(nombreGasto);
    console.log(valorGasto);

    listaNombresGasto.push(nombreGasto);
    listaValoresGasto.push(valorGasto);

    console.log(listaNombresGasto);
    console.log(listaValoresGasto);
    //alert('click del usuario');
    actualizarListaGastos[];
}

function actualizarListaGastos(){
    const listaElementos = document.getElementById('listaDeGastos');
    const totalElementos = document.getElementById('totalGastos');
    let htmlLista = '';
    let totalGastos = 0
    listaNombresGastos.forEach((elemento,posicion) => {

        const valorGasto = Number(listaValoresGasto[posicion]);

        htmlLista += ´<li>${elemento} - USD ${valorGasto.toFixed(2)} <button onclick="eliminarGasto(${posicion});">Eliminar</button></li>´;

        totalGastos += Number(valorGasto);
    });

    listaElementos.innerHTML = htmlLista;
    totalElementos.innerHTML = totalGastos.toFixed(2);
    limpiar();

}

function limpiar(){
    document.getElementById(nombreGasto).value = '';
    document.getElementById(valorGasto).value = '';
}

function eliminarGasto(posicion){
    listaNombresGasto.splice(posicion,1);
    listaValoresGasto.splice(posicion,1);
    actualizarListaGastos();
}
