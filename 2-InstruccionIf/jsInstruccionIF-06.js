/*Alejandro Alberto Martín Rozas
Div J
ejercicio IF06
*/
function mostrar()
{
	let edadIngresada;
	let mensajeEdad;

	edadIngresada=document.getElementById('txtIdEdad').value;
	edadIngresada=parseInt(edadIngresada);
	
	//Esto soluciona el problema, es funcional, pero no deberia ser la forma de trabajas:
	/*if (edadIngresada>17);
	{
		alert("mayor");
	}
	if	(edadIngresada>12 && edadIngresada<18);
	{
		alert("adolencente");
	}
	if (edadIngresada<13);
	{
		alert("menor");
	}*/
	// no esta optimizado, hace muchas consutas al microprocesador
	// hasta cuatro consultas al procesador.
	//bien optimizado el código:
	if(edadIngresada>18)
	{
		alert("mayor");
	}
	else
	{
		if(edadingresada<13)
		{
			alert("adolecente");
		}
		else //no procesa el else, ya procesó el if.
		{
			alert("adolecente")
		}
	}
	//error
	/*
	if (edadIngresada>17)
	{
		alert("mayor")
	}
	else
	{
		if(edadIngresada>12)
	}
	*/
}//FIN DE LA FUNCIÓN