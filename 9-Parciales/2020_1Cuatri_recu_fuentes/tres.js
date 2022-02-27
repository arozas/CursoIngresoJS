/*En el ingreso a un viaje en avión nos solicitan 
nombre, 
nacionalidad , 
edad, 
sexo("f" o "m") y 
estado civil("soltero", "casado" o "viudo")y 
temperatura corporal.
a) la Nacionalidad de la persona con mas temperatura.
b) Cuantos mayores de edad( más de 17) estan solteros
c) La cantidad de Mujeres que hay solteras o viudas.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre las mujeres casadas.*/
function mostrar()
{
	let nombreIngresado;
	let nacionalidadIngresada;
	let edadIngresada;
	let sexoIngresado;
	let estadoCivilIngresado;
	let temperaturaIngresada;
	let confirmarVuelta;
	let mensaje;
	let banderaNacionalidadMasTemperatura;
	let primerNacionalidad;
	let primerTemperatura;
	let contadorMayorSoltero;
	let contadorMujeresSolterasViudas;
	let contadorMayoresTemperatura;
	let contadorMujeresCasadas;
	let acumuladorEdadMujeresCasadas;
	let promedioEdadCasadas;

	confirmarVuelta=true;
	banderaNacionalidadMasTemperatura=true;
	contadorMayorSoltero=0;
	contadorMujeresSolterasViudas=0;
	contadorMayoresTemperatura=0;
	contadorMujeresCasadas=0;
	acumuladorEdadMujeresCasadas=0;

	while(confirmarVuelta==true)
	{
		nombreIngresado=prompt("Ingrese su nombre:");
		nacionalidadIngresada=prompt("Ingrese su nacionalidad:")
		edadIngresada=prompt("Ingrese su edad:");
		edadIngresada=parseInt(edadIngresada);
		while(isNaN(edadIngresada)||edadIngresada<0)
		{
			edadIngresada=prompt("Error, reingrese su edad:");
			edadIngresada=parseInt(edadIngresada);
		}
		sexoIngresado=prompt("Ingrese su genero:")
		while(sexoIngresado!="f"&&sexoIngresado!="m")
		{
			sexoIngresado=prompt("Error, reingrese su genero:")
		}
		estadoCivilIngresado=prompt("Ingrese su estado civil:")
		while(estadoCivilIngresado!="soltero"&&estadoCivilIngresado!="casado"&&estadoCivilIngresado!="viudo")
		{
			estadoCivilIngresado=prompt("Error, reingrese su estado civil:")
		}
		temperaturaIngresada=prompt("Ingrese su temperatura:");
		temperaturaIngresada=parseFloat(temperaturaIngresada);
		while(isNaN(temperaturaIngresada)||(temperaturaIngresada<33||temperaturaIngresada>43))
		{
			temperaturaIngresada=prompt("Error, reingrese su temperatura:");
			temperaturaIngresada=parseFloat(temperaturaIngresada);
		}
		if(banderaNacionalidadMasTemperatura==true)
		{
			primerNacionalidad=nacionalidadIngresada;
			primerTemperatura=temperaturaIngresada;
			banderaNacionalidadMasTemperatura=false;
		}
		else
		{
			if(temperaturaIngresada>primerTemperatura)
			{
				primerNacionalidad=nacionalidadIngresada;
				primerTemperatura=temperaturaIngresada;	
			}
		}
		switch(estadoCivilIngresado)
		{
			case "soltero":
				if(edadIngresada>17)
				{
					contadorMayorSoltero=contadorMayorSoltero+1;
				}
				if(sexoIngresado=="f")
				{
					contadorMujeresSolterasViudas=contadorMujeresSolterasViudas+1;
				}
			break;
			case "casado":
				if(sexoIngresado=="f")
				{
					contadorMujeresCasadas=contadorMujeresCasadas+1;
					acumuladorEdadMujeresCasadas=acumuladorEdadMujeresCasadas+edadIngresada;
				}
			break;
			case "viudo":
				if(sexoIngresado=="f")
				{
					contadorMujeresSolterasViudas=contadorMujeresSolterasViudas+1;
				}
			break;
		}
		if(edadIngresada>60)
		{
			if(temperaturaIngresada>38)
			{
				contadorMayoresTemperatura=contadorMayoresTemperatura+1;
			}
		}

		confirmarVuelta=confirm("¿Desea continuar?");
	}//fin delwhile

	promedioEdadCasadas=acumuladorEdadMujeresCasadas/contadorMujeresCasadas;

	mensaje="<br> La nacionalidad de la persona con más temperatura es: "+primerNacionalidad+", su temperatura es: "+primerTemperatura+"°";
	mensaje=mensaje+"<br> La cantidad de mayores solteros es: "+contadorMayorSoltero;
	mensaje=mensaje+"<br> La cantidad de mujeres viudas o solteras son: "+contadorMujeresSolterasViudas;
	mensaje=mensaje+"<br> La cantidad de mayores de 60 años con temperatura mayor de 38° son: "+contadorMayoresTemperatura;
	mensaje=mensaje+"<br> El promedio de edad de las mujeres casadas es: "+promedioEdadCasadas;

	document.write(mensaje);
	
}//fin de la función
