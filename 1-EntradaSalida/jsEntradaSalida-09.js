/*
Alejandro Alberto Martín Rozas
e/s 09
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var sueldo,aumento;

	sueldo=document.getElementById('txtIdSueldo').value;

	aumento=parseInt(sueldo)*1.1;

	document.getElementById('txtIdResultado').value=aumento;	
}
