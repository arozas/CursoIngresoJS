/*Alejandro Alberto Martín Rozas
Div J
ejercicio Switch 02
*/
function mostrar()
{
	//tomo el mes
	var mesDelAño =txtIdMes.value;
	let mensaje;

	switch(mesDelAño)
	{
		case "Julio":
		case "Agosto":
			mensaje="Abrigate que hace frio"
		break;
		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
			mensaje="Ya pasamos el frio, ahora calor!!!.";
		break;
		default:
			mensaje="Falta para el invierno.";
		break;
	}

	alert(mensaje);
}//FIN DE LA FUNCIÓN