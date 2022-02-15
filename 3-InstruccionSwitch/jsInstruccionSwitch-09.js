/*Alejandro Alberto Martín Rozas
Div J
ejercicio Switch 09
*/
function mostrar()
{
	let estacionIngresada;
	let destinoIngresado;
	let mensaje;
	let precioPasaje;
	let porcentaje;
	let precioFinal;

	estacionIngresada=document.getElementById('txtIdEstacion').value;
	destinoIngresado=document.getElementById('txtIdDestino').value;
	mensaje=" ";
	precioPasaje=15000
	porcentaje=0;

	switch(estacionIngresada)
	{
		case "Invierno":
			{
				switch(destinoIngresado)
				{
					case "Bariloche":
						porcentaje=(precioPasaje*20)/100;
					break;
					case "Mar del plata":
						porcentaje=(precioPasaje*-20)/100
					break;
					default:
						porcentaje=(precioPasaje*-10)/100;
					break;
				}
			}
		break;
		case "Verano":
			{
				switch(destinoIngresado)
				{
					case "Bariloche":
						porcentaje=(precioPasaje*-20)/100;
					break;
					case "Mar del plata":
						porcentaje=(precioPasaje*20)/100;
					break;
					default:
						porcentaje=(precioPasaje*10)/100;
					break;
				}
			}
		break;
		default:
			{
				switch(destinoIngresado)
				{
					case "Bariloche":
					case "Mar del plata":
					case "Cataratas":
						porcentaje=(precioPasaje*10)/100;
					break;
				}
			}
		break;
	}
	precioFinal=precioPasaje+porcentaje;

	mensaje="El valor del pasaje es $"+precioFinal;

	alert(mensaje);
}//FIN DE LA FUNCIÓN