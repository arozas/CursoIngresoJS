/*Alejandro Alberto Martín Rozas
Div J
ejercicio Switch 05
*/
function mostrar()
{
	//tomo la hora
	var horaDelDia =txtIdHora.value;
	let mensaje;
	
	horaDelDia=parseInt(horaDelDia);

	switch(horaDelDia)
	{
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
			mensaje="Es de mañana.";
		break;
		default:
			mensaje="Son las "+horaDelDia;
		break;
	}
	alert(mensaje);
}//FIN DE LA FUNCIÓN