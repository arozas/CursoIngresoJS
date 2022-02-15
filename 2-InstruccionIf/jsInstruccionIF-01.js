/*Alejandro Alberto Martín Rozas
Div J
ejercicio IF01
*/
//operador de https://www.w3schools.com/js/js_operators.asp
//Hardcodear cargar valores directamente dentro del código
function mostrar()
{
	let edadIngresada;
	let mensajeAlertUno;
	let mensajeAlertDos;

	edadIngresada=document.getElementById('txtIdEdad').value;

	edadIngresada=parseInt(edadIngresada);

	mensajeAlertUno="Niña Bonita";

	mensajeAlertDos="La edad ingresada es "+edadIngresada;

	if (isNaN(edadIngresada))
	{
		alert("No ingreso un número");
	}
	else if (edadIngresada==15) // cuado se va indicar una condición igual usar dos iguales ==
	{
		alert(mensajeAlertUno);
	}
	else
	{
		alert(mensajeAlertDos);
	}
	}//FIN DE LA FUNCIÓN