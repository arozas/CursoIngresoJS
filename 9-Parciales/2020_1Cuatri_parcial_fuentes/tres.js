/*En el ingreso a un viaje en avion nos solicitan:
 nombre , edad, sexo("f" o "m") y 
 estado civil("soltero", "casado" o "viudo")y 
 temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros. */
function mostrar()
{
	let nombreIngresado;
	let edadIngresada;
	let sexoIngresado;
	let estadoCivilIngresado;
	let temperaturaIngresada;
	let confirmarVuelta;
	let mensaje;
	let banderaTemperatura;
	let primerTemperatura;
	let primerNombreTemperatura;
	let contadorMayoresViudos;
	let contadorHombresSolteros;
	let	contadorHombresViudos;
	let contadorTerceraEdadConFiebre;
	let acumuladorEdadHombresSolteros;
	let promedioHombresEdadSolteros;



	confirmarVuelta=true;
	banderaTemperatura=true;
	contadorMayoresViudos=0;
	contadorHombresSolteros=0;
	contadorHombresViudos=0;
	contadorTerceraEdadConFiebre=0;
	acumuladorEdadHombresSolteros=0;

	while(confirmarVuelta==true)
	{	
		nombreIngresado=prompt("Ingrese su nombre completo:")
		edadIngresada=prompt("Ingrese su edad:");
        edadIngresada=parseInt(edadIngresada);
        while(isNaN(edadIngresada)||(edadIngresada<0 || edadIngresada>150))
        {
            edadIngresada=prompt("Error, ingrese una edad valida:");
            edadIngresada=parseInt(edadIngresada);
        }
		sexoIngresado=prompt("Ingrese su género");
        while(sexoIngresado!="f"&&sexoIngresado!="m")
        {
            sexoIngresado=prompt("Error, ingrese f o m");
        }
		estadoCivilIngresado=prompt("Ingrese su estado civil");
        while(estadoCivilIngresado!="soltero"&&estadoCivilIngresado!="casado"&&estadoCivilIngresado!="viudo")
        {
            estadoCivilIngresado=prompt("Error, ingrese soltero, casado o viudo");
        }		temperaturaIngresada=prompt("Ingrese su temeperatura:");
        temperaturaIngresada=parseInt(temperaturaIngresada);
        while(isNaN(temperaturaIngresada)||(temperaturaIngresada<33 || temperaturaIngresada>42))
        {
            temperaturaIngresada=prompt("Error, ingrese una temperatuda valida:");
            temperaturaIngresada=parseInt(temperaturaIngresada);
        }
		if (banderaTemperatura==true)
		{
			primerTemperatura=temperaturaIngresada;
			primerNombreTemperatura=nombreIngresado;
			banderaTemperatura=false;
		}
		else
		{
			if(temperaturaIngresada>primerTemperatura)
			{
				primerTemperatura=temperaturaIngresada;
				primerNombreTemperatura=nombreIngresado;
			}
		}
		switch(estadoCivilIngresado)
		{
			case "soltero":
				if(sexoIngresado=="m")
				{
					contadorHombresSolteros=contadorHombresSolteros+1;
					acumuladorEdadHombresSolteros=acumuladorEdadHombresSolteros+edadIngresada;
				}
			break;
			case "casado":
			break;
			case "viudo":
				if (edadIngresada>17)
				{
					contadorMayoresViudos=contadorMayoresViudos+1;
				}
				if(sexoIngresado=="m")
				{
					contadorHombresViudos=contadorHombresViudos+1;
				}
			break;
		}
		if(edadIngresada>60)
		{
			contadorTerceraEdadConFiebre=contadorTerceraEdadConFiebre+1;
		}
		confirmarVuelta=confirm("¿desea continuar?")
        
	}//fin while

	promedioHombresEdadSolteros=acumuladorEdadHombresSolteros/contadorHombresSolteros;

	mensaje="El pasajero con mayór temperatura es: "+primerNombreTemperatura+", tiene: "+primerTemperatura+"° de temperatura <br>";
	mensaje=mensaje+"La cantidad de personas mayores de edad viudas es: "+contadorMayoresViudos+"<br>";
	mensaje=mensaje+"La cantidad de hombres solteros es: "+contadorHombresSolteros+", y la cantidad de hombres viudos es: "+contadorHombresViudos+"<br>";
	mensaje=mensaje+"La cantidad de personas de la tercera edad con fiebre es :"+contadorTerceraEdadConFiebre+"<br>";
	mensaje=mensaje+"El promedio edad de los hombres solteros es: "+promedioHombresEdadSolteros;

	document.write(mensaje);


}//fin de función
