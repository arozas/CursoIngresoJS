/*
Alejandro Alberto Martín Rozas
e/s 10
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe,aumento;

	importe=document.getElementById('txtIdImporte').value;

	descuento=parseInt(importe)*0.75;

	document.getElementById('txtIdResultado').value=descuento;	
}
