/*
Alejandro Alberto Martín Rozas
DIV J
TP01
1. Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	let precioUno;
    let precioDos;
    let precioTres;
    let suma;
    let mensajeAlert;

    precioUno=document.getElementById('txtIdPrecioUno').value;
    precioDos=document.getElementById('txtIdPrecioDos').value;
    precioTres=document.getElementById('txtIdPrecioTres').value;

    precioUno=parseInt(precioUno);
    precioDos=parseInt(precioDos);
    precioTres=parseInt(precioTres);

    suma=precioUno+precioDos+precioTres;

    mensajeAlert="El total de los tres productos es $"+suma;

    alert(mensajeAlert);
}
function Promedio () 
{
    let precioUno;
    let precioDos;
    let precioTres;
    let promedio;
    let mensajeAlert;

    precioUno=document.getElementById('txtIdPrecioUno').value;
    precioDos=document.getElementById('txtIdPrecioDos').value;
    precioTres=document.getElementById('txtIdPrecioTres').value;

    precioUno=parseInt(precioUno);
    precioDos=parseInt(precioDos);
    precioTres=parseInt(precioTres);

    promedio=(precioUno+precioDos+precioTres)/3;

    mensajeAlert="El promedio de los tres productos es $"+promedio;

    alert(mensajeAlert);
}
function PrecioFinal () 
{
	let precioUno;
    let precioDos;
    let precioTres;
    let precioparcial;
    let calculoIVA;
    let precioFinal;
    let mensajeAlert;

    precioUno=document.getElementById('txtIdPrecioUno').value;
    precioDos=document.getElementById('txtIdPrecioDos').value;
    precioTres=document.getElementById('txtIdPrecioTres').value;

    precioUno=parseInt(precioUno);
    precioDos=parseInt(precioDos);
    precioTres=parseInt(precioTres);

    precioparcial=precioUno+precioDos+precioTres;

    calculoIVA=(precioparcial*21)/100;

    precioFinal=precioparcial+calculoIVA;

    mensajeAlert="El precio final con IVA es $"+precioFinal.toFixed(2);

    alert(mensajeAlert);
}