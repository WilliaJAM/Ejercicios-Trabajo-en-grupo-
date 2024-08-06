let inventarios = [
    {nombre: 'Bodega Numero 1', arroz: 100000, ventas: 0},
    {nombre: 'Bodega Numero 2', arroz: 230000, ventas: 0}
];

const selector = document.getElementById('bodega');
inventarios.forEach((element, index) => {
    const option = document.createElement('option');
    option.value = index;
    option.textContent = element.nombre;
    selector.appendChild(option);
});

function vender() {

    const selectorValue = document.getElementById('bodega').value;
    const valor = inventarios[selectorValue]; 


    if(selectorValue == 0){
            notificarBodega1(selectorValue, valor);
            descontarBodega(valor);
        console.log(inventarios[0].arroz);
    }else if(selectorValue == 1){
        notificarBodega2(selectorValue, valor);
        descontarBodega(valor);

    }


    document.getElementById('header').innerHTML = `Cantidad disponible en ${inventarios[0].nombre}: ${inventarios[0].arroz}`;
    document.getElementById('header2').innerHTML = `Cantidad disponible en ${inventarios[1].nombre}: ${inventarios[1].arroz}`;

    console.log(inventarios);
}

document.getElementById('header').innerHTML = `Cantidad disponible en ${inventarios[0].nombre}: ${inventarios[0].arroz}`;
document.getElementById('header2').innerHTML = `Cantidad disponible en ${inventarios[1].nombre}: ${inventarios[1].arroz}`;

const ventasTXT = document.createElement('h3')
ventasTXT.innerHTML=`Ventas de la ${inventarios[0].nombre} : ${inventarios[0].ventas}`;
document.body.appendChild(ventasTXT);



const ventasTXT2 = document.createElement('h3')
ventasTXT2.innerHTML=`Ventas de la ${inventarios[1].nombre} : ${inventarios[1].ventas}`;
document.body.appendChild(ventasTXT2)


function ventas1() {
    inventarios[0].ventas++;
    ventasTXT.innerHTML=`Ventas de la ${inventarios[0].nombre} : ${inventarios[0].ventas}`;

}
function ventas2() {
    inventarios[1].ventas++;
ventasTXT2.innerHTML=`Ventas de la ${inventarios[1].nombre} : ${inventarios[1].ventas}`;

}

//alert si esta por la mitad
function notificarBodega1(index, valor) {

    if (index == 0) {
        if (valor.arroz == 60000) {
            alert(`Ha alcanzado la mitad`);
        } else if (valor.arroz <= 10000) {
            alert(`Capacidad baja se esta agotando`);
        }
    }
}

function descontarBodega(valor) {
const input = document.getElementById('cantidad').value;
const cantidad = document.getElementById('cantidadPor').value;
const multiplicacion = input * cantidad;

if(multiplicacion > valor.arroz){
    alert(`Supera`);
}else{
    const procedimeinto = valor.arroz - multiplicacion;
    valor.arroz = procedimeinto;
    ventas1();
}
}

function notificarBodega2(index ,valor) {

    if (index == 1) {
        ventas2();
        if (valor.arroz == 110000 || valor.arroz == 115000) {
            alert(`Ha alcanzado la mitad`);
            
        } else if (valor.arroz <= 23000) {
            alert(`Capacidad baja se esta agotando`);
            
        }
    }
}

