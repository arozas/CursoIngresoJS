/*Alejandro Alberto Martín Rozas
Div J
ejercicio While 08
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	//let contador;
	let respuesta;
	let sumaPositivos;
	let multiplicacionNegativos;
	let	numeroIngresado;
	//contador=0; // no use el contador.
	numeroIngresado=0
	sumaPositivos=0;
	multiplicacionNegativos=1;
	respuesta=true;

	while(respuesta==true)
	{
		numeroIngresado=prompt("Ingrese un numero");
		numeroIngresado=parseInt(numeroIngresado);
		if(numeroIngresado>0)
		{
			sumaPositivos=sumaPositivos+numeroIngresado;
		}
		else
		{
			multiplicacionNegativos=multiplicacionNegativos*numeroIngresado;
		}
		respuesta=confirm("¿desea continuar?");
	}


	document.getElementById('txtIdSuma').value=sumaPositivos;
	document.getElementById('txtIdProducto').value=multiplicacionNegativos;

}//FIN DE LA FUNCIÓN