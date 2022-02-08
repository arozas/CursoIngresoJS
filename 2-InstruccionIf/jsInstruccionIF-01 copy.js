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
		alert("No ingreso un nmero");
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