/*Alejandro Alberto Martín Rozas
Div J
ejercicio IF03
*/
function mostrar()
{
	let edadIngresada;
	let	mensajeMayorEdad;
	let	mensajeMenorEdad;

	edadIngresada=document.getElementById('txtIdEdad').value;

	edadIngresada=parseInt(edadIngresada);

	mensajeMayorEdad="Usted tiene "+edadIngresada+" años y es mayor de edad";

	mensajeMenorEdad="Usted tiene "+edadIngresada+" años y es menor de edad";

	if (edadIngresada > 17)
	{
		alert(mensajeMayorEdad);
	}
	else
	{
		alert(mensajeMenorEdad);
	}

	/*
	if (edadIngresada > 17)
	{
		alert(mensajeMayorEdad);
	}
	if (edadIngresada < 18)
	{
		alert(mensajeMenorEdad);
	}
	*/
}//FIN DE LA FUNCIÓN