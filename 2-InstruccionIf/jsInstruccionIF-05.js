/*Alejandro Alberto Martín Rozas
Div J
ejercicio IF04
*/
function mostrar()
{
	let edadIngresada;
	let mensajeEdad;

	edadIngresada=document.getElementById('txtIdEdad').value;
	edadIngresada=parseInt(edadIngresada);

	mensajeEdad="Usted tiene "+edadIngresada+" y no es adolecente";

	if (edadIngresada<13)
	{
		alert(mensajeEdad);
	}
	if (edadIngresada>17)
	{
		alert(mensajeEdad);
	}
	/*if (edadIngresada<=13 && edadIngresada>=17)
	{
		alert(mensajeEdad);
	}*/
}//FIN DE LA FUNCIÓN