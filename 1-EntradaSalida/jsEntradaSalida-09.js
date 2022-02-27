/*
Alejandro Alberto Martín Rozas
e/s 09
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 % por medio del prompt
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	let sueldo;
	let aumento;
	let resultado;
	let sueldoActualizado;

	sueldo=document.getElementById('txtIdSueldo').value;
	aumento=prompt("Ingrese el aumento", "10")

	sueldo=parseInt(sueldo);
	aumento=parseInt(aumento);
	
	resultado=sueldo*aumento/100;

	sueldoActualizado=sueldo+resultado;

	document.getElementById('txtIdResultado').value="su sueldo con el 10% de aumento es "+sueldoActualizado;	
}
