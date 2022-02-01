/*
Alejandro Alberto Martín Rozas
e/s 09
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	let sueldo,aumento;

	sueldo=parseInt(document.getElementById('txtIdSueldo').value);

	aumento=sueldo*1.100;

	document.getElementById('txtIdResultado').value=aumento;	
}
