/*
Debemos realizar la carga de una compra de 5(cinco) 
productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo de producto (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y 
no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más caro de los jabones, la cantidad de unidades y el fabricante
b) Del tipo de producto con más unidades en total de la compra, el promedio por compra
c) Cuántas unidades de Barbijos se compraron en total*/
function mostrar()
{
	let tipoProductoIngresado;
	let precioIngresado;
	let cantidadUnidadesIngresada;
	let marcaIngresada;
	let fabricanteIngresado;
	let contadorVueltas;
	let mensaje;
	let banderaJabonCaro;
	let primerPrecioJabon;
	let primerFabricanteJabon;
	let primerUnidadesJabon;
	let acumuladorUnidadesBarbijo;
	let acumuladorUnidadesJabon;
	let acumuladorUnidadesAlcohol;
	let totalUnidadesCompra;
	let promedioCompra;

	contadorVueltas=0;
	banderaJabonCaro=true;
	acumuladorUnidadesBarbijo=0;
	acumuladorUnidadesJabon=0;
	acumuladorUnidadesAlcohol=0;

	while(contadorVueltas<5)
	{
		tipoProductoIngresado=prompt("Ingrese el tipo de producto:")
		while(tipoProductoIngresado!="barbijo"&&tipoProductoIngresado!="jabón"&&tipoProductoIngresado!="alcohol")
		{
			tipoProductoIngresado=prompt("Error, reingrese el tipo de producto:")
		}
		precioIngresado=prompt("Ingrese el precio:");
		precioIngresado=parseFloat(precioIngresado);
		while(isNaN(precioIngresado)||(precioIngresado<100||precioIngresado>300))
		{
			precioIngresado=prompt("Error, reingrese el precio:");
			precioIngresado=parseFloat(precioIngresado);
		}
		cantidadUnidadesIngresada=prompt("Ingrese la cantidad:");
		cantidadUnidadesIngresada=parseInt(cantidadUnidadesIngresada);
		while(isNaN(cantidadUnidadesIngresada)||cantidadUnidadesIngresada<1)
		{
			cantidadUnidadesIngresada=prompt("Error, reingrese la cantidad:");
			cantidadUnidadesIngresada=parseInt(cantidadUnidadesIngresada);
		}
		//a) Del más caro de los jabones, la cantidad de unidades y el fabricante
		//b) Del tipo de producto con más unidades en total de la compra, el promedio por compra
		switch(tipoProductoIngresado)
		{
			case "barbijo":
				acumuladorUnidadesBarbijo=acumuladorUnidadesBarbijo+cantidadUnidadesIngresada;
			break;
			case "jabón":
				if(banderaJabonCaro==true)
				{
					primerPrecioJabon=precioIngresado;
					primerFabricanteJabon=fabricanteIngresado;
					primerUnidadesJabon=cantidadUnidadesIngresada;
					banderaJabonCaro=false;
				}
				else
				{
					if(precioIngresado>primerPrecioJabon)
					{
						primerPrecioJabon=precioIngresado;
						primerFabricanteJabon=fabricanteIngresado;
						primerUnidadesJabon=cantidadUnidadesIngresada;
					}
				}
				acumuladorUnidadesJabon=acumuladorUnidadesJabon+cantidadUnidadesIngresada;
			break;
			case "alcohol":
				acumuladorUnidadesAlcohol=acumuladorUnidadesAlcohol+cantidadUnidadesIngresada;
			break;
		}
		marcaIngresada=prompt("Ingrese la marca:");
		fabricanteIngresado=prompt("Ingrese el fabricante:");
		contadorVueltas=contadorVueltas+1;
	}//fin del while
	
	totalUnidadesCompra=acumuladorUnidadesBarbijo+acumuladorUnidadesJabon+acumuladorUnidadesAlcohol;
	mensaje="Del jabón más caro se compraron unidades: "+primerUnidadesJabon+", y su fabricante es: "+primerFabricanteJabon+"<br>";

	if(acumuladorUnidadesBarbijo>acumuladorUnidadesJabon&&acumuladorUnidadesBarbijo>acumuladorUnidadesAlcohol)
	{
		promedioCompra=(acumuladorUnidadesBarbijo*100)/totalUnidadesCompra;
		mensaje=mensaje+"El promedio sobre el total de la compra de barbijos es:"+promedioCompra+"% <br>";
	}
	else
	{
		if(acumuladorUnidadesJabon>acumuladorUnidadesAlcohol)
		{
			promedioCompra=(acumuladorUnidadesJabon*100)/totalUnidadesCompra;
			mensaje=mensaje+"El promedio sobre el total de la compra de jabones es:"+promedioCompra+"% <br>";	
		}
		else
		{
			promedioCompra=(acumuladorUnidadesAlcohol*100)/totalUnidadesCompra;
			mensaje=mensaje+"El promedio sobre el total de la compra de alcohol es:"+promedioCompra+"% <br>";
		}
	}
	mensaje=mensaje+"La cantidad de unidades de barbijos comprada es: "+acumuladorUnidadesBarbijo;

	document.write(mensaje);

}//fin de función
