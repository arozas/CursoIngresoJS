/*Alejandro Alberto Martín Rozas
Div J
ejercicio Switch 04
*/
function mostrar()
{
	//tomo el mes
	var mesDelAño =txtIdMes.value;
	let mensaje;

	switch(mesDelAño)
	{
		case "Febrero":
			mensaje="Tiene 28 días";
		break;
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			mensaje="Tiene 30 días";
		break;
		default:
			mensaje="Tiene 31 días";
		break;
	}

	alert(mensaje);
}//FIN DE LA FUNCIÓN