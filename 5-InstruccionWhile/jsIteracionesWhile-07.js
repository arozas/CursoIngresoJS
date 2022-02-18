/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let contador;
	let acumulador;
	let respuesta;
	let numeroIngresado;

	contador=0;
	acumulador=0;
	respuesta=true;

	while(respuesta==true)
	{
		numeroIngresado=prompt("Ingrese un numero");
		numeroIngresado=parseInt(numeroIngresado);
		contador=contador+1;
		acumulador=acumulador+numeroIngresado;
		respuesta=confirm("¿desea continuar?");
	}

	document.getElementById('txtIdSuma').value=acumulador;
	document.getElementById('txtIdPromedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN