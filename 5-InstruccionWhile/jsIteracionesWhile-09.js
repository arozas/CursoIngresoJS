/*Alejandro Alberto Martín Rozas
Div J
ejercicio While 09
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	let banderaDelPrimero;
	let numeroIngresado;
	let numeroMaximo;
	let numeroMinimo;
	let respuesta;

	//iniciar variables
	numeroIngresado=0;
	numeroMaximo=0;
	numeroMinimo=0;
	banderaDelPrimero="es el primero";
	respuesta=true;
	while(respuesta==true)
	{
		numeroIngresado=prompt("Ingrese un numero");
		numeroIngresado=parseInt(numeroIngresado);

		if(banderaDelPrimero=="es el primero")
		{
			numeroMaximo=numeroIngresado;
			numeroMinimo=numeroIngresado;
			banderaDelPrimero="es el segundo";
		}
		else
		{
			if(numeroIngresado>numeroMaximo)
			{
				numeroMaximo=numeroIngresado;
			}
			if(numeroIngresado<numeroMinimo) //Si uso la instrucción Else, no entra el minimo.
			{
			numeroMinimo=numeroIngresado;
			}
		}

		respuesta=confirm("desea continuar?");
	}
	document.getElementById('txtIdMaximo').value=numeroMaximo;
	document.getElementById('txtIdMinimo').value=numeroMinimo;
}//FIN DE LA FUNCIÓN