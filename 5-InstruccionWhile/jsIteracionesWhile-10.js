/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	let respuesta;
	let numeroIngresado;
	let sumaNegativos;
	let	contadorNegativos;
	let sumaPositivos;
	let contadorPositivos;
	let	contadorCeros;

	respuesta=true;
	numeroIngresado=0;
	sumaNegativos=0;
	contadorNegativos=0;
	sumaPositivos=0;
	contadorPositivos=0;
	contadorCeros=0;

	while(respuesta==true)
	{
		numeroIngresado=prompt("Ingrese un numero");
		numeroIngresado=parseInt(numeroIngresado);
		if(numeroIngresado>0)
		{
			contadorPositivos=contadorPositivos+1;
			sumaPositivos=sumaPositivos+numeroIngresado;
		}
		if(numeroIngresado<0)
		{
			contadorNegativos=contadorNegativos+1;
			sumaNegativos=sumaNegativos+numeroIngresado;
		}
		if(numeroIngresado==0)
		{
			contadorCeros=contadorCeros+1
		}

		
		respuesta=confirm("¿Desea continuar?");
	}//fin del while

	alert("cantidad de numeros positivos: "+contadorPositivos+" "+sumaPositivos);

	document.write("la suma de negativos es :"+sumaNegativos);
}//FIN DE LA FUNCIÓN