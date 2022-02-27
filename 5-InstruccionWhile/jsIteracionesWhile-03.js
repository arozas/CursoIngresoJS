/*Alejandro Alberto Martín Rozas
Div J
ejercicio While 03
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	let claveIngresada;
	claveIngresada = prompt("ingrese el número clave.")

	while(claveIngresada!="utn750")
	{
		alert("ayuda: es utn750");
		claveIngresada = prompt("ingresó mal la clave, intente de nuevo");
	}
	alert("Ingresó correctamente la clave");
	
}//FIN DE LA FUNCIÓN
