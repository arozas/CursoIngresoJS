/*
Alejandro Alberto Martín Rozas
e/s 10
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 % o otro porcentaje por prompt
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let importe;
	let descuento;
	let	resultado;
	let precioDescuento;

	importe=document.getElementById('txtIdImporte').value;

	importe=parseInt(importe);

	descuento=prompt("Ingrese el descuento", "10");

	descuento=parseInt(descuento);

	resultado=importe*descuento/100;
	//resultado=importe*0,75; esta mal por que no tengo el control de la función.

	precioDescuento=importe-resultado;

	document.getElementById('txtIdResultado').value="El importe final es "+precioDescuento;	
}
/*se tiene que siempre hacer la operación aritmetica completa, 
no ahorrar con atajos como 100*1.10 para calcular el 10%, de esta forma tenemos control de la operación
y eso hace a la buena practica a la hora de programar
Tengo que estar mucho más atento a cerrar las instrucciones con;.
hay que hacer 3 tres trabajos practicos de e/s, resueltos.
*/