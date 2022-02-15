/*Alejandro Alberto Martín Rozas
Div J
ejercicio Switch 10
*/
function mostrar()
{
	let estacionIngresada;
	let	destinoIngresado;
	let mensaje;
	
	estacionIngresada=document.getElementById('txtIdEstacion').value;
	destinoIngresado=document.getElementById('txtIdDestino').value;

	mensaje=" ";

	switch(estacionIngresada)
	{
		case "Invierno":
			switch(destinoIngresado)
			{
				case "Bariloche":
					mensaje="Se viaja";
				break;
				default:
					mensaje="No se viaja";
				break;
			}
		break;
		case "Verano":
			switch(destinoIngresado)
			{
				case "Mar del plata":
				case "Cataratas":
					mensaje="Se viaja";
				break;
				default:
					mensaje="No se viaja";
			}
		break; 
		case "Primavera":
			switch(destinoIngresado)
			{
				case "Bariloche":
					mensaje="No se viaja";
				break;
				default:
					mensaje="Se viaja";
				break;
			}
		break;
		default:
			mensaje="Se viaja";
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN