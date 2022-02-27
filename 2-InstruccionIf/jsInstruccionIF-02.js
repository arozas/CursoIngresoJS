/*Alejandro Alberto Martín Rozas
Div J
ejercicio IF01
*/
// intentar no usar el operador <= o >= es complicar la operación si no es necesario
// true o false, el if solo detecta es el cero, si uno el 1 es el unico verdadero, el false es 0 dentro de JS
function mostrar()
{
	let edadIngresada;
	let	mensajeAlertUno;
	let mensajeAlertDos;

	edadIngresada=document.getElementById('txtIdEdad').value;

	edadIngresada=parseInt(edadIngresada);
	
	mensajeAlertUno="Usted es mayor de edad";

	mensajeAlertDos="Usted es menor de edad";

	if(isNaN(edadIngresada))
	{
		alert("No ingreso un número")
	}
	else if(edadIngresada>17)
	{
		alert(mensajeAlertUno);
	}
	else
	{
		alert(mensajeAlertDos);
	}
}//FIN DE LA FUNCIÓN