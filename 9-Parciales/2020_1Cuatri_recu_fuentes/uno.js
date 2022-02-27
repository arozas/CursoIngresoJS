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
	let productoIngresado;
	let precioIngresado;
	let unidadesIngresadas;
	let marcaIngresada;
	let fabricanteIngresado;
	let contadorIngresos;
	let banderaJabon;
	let primerJabonCaro;
	let jabonCaroUnidades;
	let jabonCaroFabricante;
	let mensajeJabon;
	let contadorBarbijo;
	let contadorJabon;
	let contadorAlcohol;
	let acumuladorBarbijo;
	let acumuladorJabon;
	let acumuladorAlcohol;
	let precioJabon;
	let precioBarbijo;
	let precioAlcohol;
	let promedioCompra;
	let mensajeMasUnidades;

	contadorIngresos=0;
	banderaJabon=true;
	primerJabonCaro=0;
	jabonCaroUnidades=0;
	jabonCaroFabricante="";
	mensajeJabon="No se compro jabón";
	contadorBarbijo=0;
	contadorJabon=0;
	contadorAlcohol=0;
	acumuladorBarbijo=0;
	acumuladorJabon=0;
	acumuladorAlcohol=0;
	precioJabon=0;
	precioBarbijo=0;
	precioAlcohol=0;

	/*Debemos realizar la carga de una compra de 5(cinco) 
	productos de prevención de contagio,
	de cada una debo obtener los siguientes datos:
	el tipo de producto (validar "barbijo" , "jabón" o "alcohol") ,
	el precio (validar entre 100 y 300),
	la cantidad de unidades (no puede ser 0 o negativo y 
	no debe superar las 1000 unidades),
	la Marca y el fabricante. */
	while(contadorIngresos<3)
	{
		productoIngresado=prompt("Ingrese Producto");
		while(productoIngresado!="barbijo"&&productoIngresado!="jabón"&&productoIngresado!="alcohol")
		{
			productoIngresado=prompt("Error, ingrese barbijo, jabón o alcohol");
		}
		precioIngresado=prompt("Ingrese Precio");
		precioIngresado=parseFloat(precioIngresado);
		while(precioIngresado<100||precioIngresado>300)
		{
			precioIngresado=prompt("Error, ingrese precio entre $100 y $300");
			precioIngresado=parseFloat(precioIngresado);
		}
		unidadesIngresadas=prompt("Ingrese Unidades");
		unidadesIngresadas=parseInt(unidadesIngresadas);
		while(unidadesIngresadas<0||unidadesIngresadas>1000)
		{
			unidadesIngresadas=prompt("Error, ingrese unidades mayores a 0 y menor a 1000");
			unidadesIngresadas=parseInt(unidadesIngresadas);
		}
		marcaIngresada=prompt("Ingrese marca");
		fabricanteIngresado=prompt("Ingrese fabricante");
	
		//a) Del más caro de los jabones, la cantidad de unidades y el fabricante
		//b) Del tipo de producto con más unidades en total de la compra, el promedio por compra
		switch(productoIngresado)
		{
			case "barbijo":
				contadorBarbijo=contadorBarbijo+1
				acumuladorBarbijo=acumuladorBarbijo+unidadesIngresadas;
				precioBarbijo=precioBarbijo+(unidadesIngresadas*precioIngresado);
			break;
			case "jabón":
				if(banderaJabon==true)
				{
					primerJabonCaro=precioIngresado;
					jabonCaroUnidades=unidadesIngresadas;
					jabonCaroFabricante=fabricanteIngresado;
					mensajeJabon="El jabón mas caro es: "+jabonCaroFabricante+" y se compraron unidades: "+jabonCaroUnidades;
					banderaJabon=false;
		
				}
				else
				{
					if(precioIngresado>primerJabonCaro)
					{
						primerJabonCaro=precioIngresado;
						jabonCaroUnidades=unidadesIngresadas;
						jabonCaroFabricante=fabricanteIngresado;
						mensajeJabon="El jabón mas caro es: "+jabonCaroFabricante+" y se compraron unidades: "+jabonCaroUnidades;
					}
				}
				contadorJabon=contadorJabon+1
				acumuladorJabon=acumuladorJabon+unidadesIngresadas;
				precioJabon=precioJabon+(unidadesIngresadas*precioIngresado);
			break;
			default:
				contadorAlcohol=contadorAlcohol+1
				acumuladorAlcohol=acumuladorAlcohol+unidadesIngresadas;
				precioAlcohol=precioAlcohol+(unidadesIngresadas*precioIngresado);
			break;
		}
		contadorIngresos=contadorIngresos+1;
	}
	if((contadorBarbijo>contadorJabon)&&(contadorBarbijo>contadorAlcohol))
	{
		promedioCompra=precioBarbijo/acumuladorBarbijo;
		mensajeMasUnidades="El producto más comprado es Barbijo, se compraron unidades= "+acumuladorBarbijo+" y el valor promedio es: "+promedioCompra;
	}
	else
	{
		if(contadorJabon>contadorAlcohol)
		{
			promedioCompra=precioJabon/acumuladorJabon;
			mensajeMasUnidades="El producto más comprado es Jabon, se compraron unidades= "+acumuladorJabon+" y el valor promedio es: "+promedioCompra;
		}
		else
		{
			promedioCompra=precioAlcohol/acumuladorAlcohol;
			mensajeMasUnidades="El producto más comprado es Alcohol, se compraron unidades= "+acumuladorAlcohol+" y el valor promedio es: "+promedioCompra;
		}
	}
	document.write(mensajeJabon+"<br>");
	document.write(mensajeMasUnidades+"<br>");
	//c) Cuántas unidades de Barbijos se compraron en total
	document.write("Se compraron "+acumuladorBarbijo+" unidades de barbijos <br>");
}
