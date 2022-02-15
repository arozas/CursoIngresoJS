/*Alejandro Alberto Martín Rozas
Div J
ejercicio Switch 08
*/
//Al seleccionar un destino informar si hace FRIO o CALOR en ese destino
function mostrar()
{
	var destinoIngresado =txtIdDestino.value;
	let mensaje;
	
	switch(destinoIngresado)
	{
		case "Bariloche":
		case "Ushuaia":
			mensaje="Hace Frio";
		break;
		default:
			mensaje="Hace Calor"
		break;
	}
	alert(mensaje);
}//FIN DE LA FUNCIÓN