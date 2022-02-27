/*Alejandro Alberto Martín Rozas
Div J
ejercicio While 10
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
	let contadorPares;
	let promedioPositivos;
	let promedioNegativos;
	let	diferenciaPositivosNegativos;

	respuesta=true;
	numeroIngresado=0;
	sumaNegativos=0;
	contadorNegativos=0;
	sumaPositivos=0;
	contadorPositivos=0;
	contadorCeros=0;
	contadorPares=0;
	//promedioNegativos=0; no se declaran, variables de trabajo,
	//promedioPositivos=0; //pero

	while(respuesta==true)
	{
		numeroIngresado=prompt("Ingrese un numero");
		numeroIngresado=parseInt(numeroIngresado);

		if(numeroIngresado<0)
		{
			contadorNegativos=contadorNegativos+1;
			sumaNegativos=sumaNegativos+numeroIngresado;
		}
		else 
		{
			if(numeroIngresado>0)
			{
				contadorPositivos=contadorPositivos+1;
				sumaPositivos=sumaPositivos+numeroIngresado;
			}
			else
			{
				if(numeroIngresado==0)
				{
					contadorCeros=contadorCeros+1;
				}
			}
		}

		if(numeroIngresado%2==0)
		{
			contadorPares=contadorPares+1;
		}

		respuesta=confirm("¿Desea continuar?");
		
	}//fin del while

	//alert("cantidad de numeros positivos: "+contadorPositivos+" suma de los positivos: "+sumaPositivos+" cantidad de numero negativos: "+contadorNegativos+" suma de los numeros negativos: "+sumaNegativos+" cantidad de ceros ingresados: "+contadorCeros+" cantidad de numeros pares: "+contadorPares+" promedio de numero positivos: "+promedioPositivos+" promedio de numeros negativos: "+promedioNegativos+" diferencia entre positivos y negativos: "+diferenciaPositivosNegativos);

	document.write("la suma de numeros negativos: "+sumaNegativos+"<br>");
	document.write("la suma de numeros positivos: "+sumaPositivos+"<br>");
	document.write("cantidad de numeros negativos: "+contadorNegativos+"<br>");
	document.write("cantidad de numeros positivos: "+contadorPositivos+"<br>");
	document.write("cantidad de numeros ceros: "+contadorCeros+"<br>");
	document.write("cantidad de numeros pares: "+contadorPares+"<br>");
	if(contadorPositivos>0)
	{
		promedioPositivos=sumaPositivos/contadorPositivos;
		document.write("promedio de numeros positivos: "+promedioPositivos+"<br>");
	}
	else
	{
		document.write("no se ingresaron numeros positivos para promediar <br>");
	}
	if(contadorNegativos>0)
	{
		promedioNegativos=sumaNegativos/contadorNegativos;
		document.write("promedio de numeros negativos: "+promedioNegativos+"<br>");
	}
	else
	{
		document.write("no se ingresaron numeros negativos para promediar <br>");
	}

	diferenciaPositivosNegativos= sumaPositivos+sumaNegativos;

	document.write("diferencia de numeros positivos y negativos: "+diferenciaPositivosNegativos+"<br>");

}//FIN DE LA FUNCIÓN