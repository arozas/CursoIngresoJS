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

    precioUno=document.getElementById('txtIdPrecioUno').value;
    precioDos=document.getElementById('txtIdPrecioDos').value;
    precioTres=document.getElementById('txtIdPrecioTres').value;

    precioUno=parseInt(precioUno);
    precioDos=parseInt(precioDos);
    precioTres=parseInt(precioTres);

    suma=precioUno+precioDos+precioTres;

    alert("El total de los tres productos es $"+suma);
}
function Promedio () 
{
    let precioUno;
    let precioDos;
    let precioTres;
    let promedio;

    precioUno=document.getElementById('txtIdPrecioUno').value;
    precioDos=document.getElementById('txtIdPrecioDos').value;
    precioTres=document.getElementById('txtIdPrecioTres').value;

    precioUno=parseInt(precioUno);
    precioDos=parseInt(precioDos);
    precioTres=parseInt(precioTres);

    promedio=(precioUno+precioDos+precioTres)/3

    alert("El promedio de los tres productos es $"+promedio);
}
function PrecioFinal () 
{
	let precioUno;
    let precioDos;
    let precioTres;
    let impuestoIVA;
    let precioparcial;
    let calculoIVA;
    let precioFinal;

    precioUno=document.getElementById('txtIdPrecioUno').value;
    precioDos=document.getElementById('txtIdPrecioDos').value;
    precioTres=document.getElementById('txtIdPrecioTres').value;
    impuestoIVA=21;

    precioUno=parseInt(precioUno);
    precioDos=parseInt(precioDos);
    precioTres=parseInt(precioTres);
    impuestoIVA=parseInt(impuestoIVA);

    precioparcial=precioUno+precioDos+precioTres;

    calculoIVA=(precioparcial*impuestoIVA)/100;

    precioFinal=precioparcial+calculoIVA;

    alert("El precio final con IVA es $"+precioFinal);
}