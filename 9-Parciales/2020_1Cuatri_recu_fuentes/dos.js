/*Realizar el algoritmo que permita ingresar los datos 
de una compra de productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),
al terminar la compra el cliente accede a un descuento segun las bolsas en total
Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo ("arena";"cal";"cemento") con mas cantidad de bolsas en el total de la compra.
f) El tipo mas caro*/

function mostrar()
{
  
	let tipoProductoIngresado;
	let precioIngresado;
	let cantidadBolsasIngresada;
  let confirmarVuelta;
  let precioBruto;
  let acumuladorPrecioBruto;
  let mensaje;
  let acumuladorArena;
  let acumuladorCal;
  let acumuladorCemento;
  let totalBosalCompradas;
  let descuentoCompra;
  let precioFinalDescuento;
  let banderaMasCaro;
  let PrimerPrecio;
  let PrimerTipo;
  let primerUnidadesCaro;

  confirmarVuelta=true;
  acumuladorPrecioBruto=0;
  acumuladorArena=0;
  acumuladorCal=0;
  acumuladorCemento=0;
  banderaMasCaro=true;

  while(confirmarVuelta==true)
  {
    tipoProductoIngresado=prompt("Ingrese el tipo de producto:")
		while(tipoProductoIngresado!="arena"&&tipoProductoIngresado!="cal"&&tipoProductoIngresado!="cemento")
		{
			tipoProductoIngresado=prompt("Error, reingrese el tipo de producto:")
		}
    cantidadBolsasIngresada=prompt("Ingrese la cantidad:");
		cantidadBolsasIngresada=parseInt(cantidadBolsasIngresada);
		while(isNaN(cantidadBolsasIngresada)||cantidadBolsasIngresada<1)
		{
			cantidadBolsasIngresada=prompt("Error, reingrese la cantidad:");
			cantidadBolsasIngresada=parseInt(cantidadBolsasIngresada);
		}
		precioIngresado=prompt("Ingrese el precio:");
		precioIngresado=parseFloat(precioIngresado);
		while(isNaN(precioIngresado)||precioIngresado<1)
		{
			precioIngresado=prompt("Error, reingrese el precio:");
			precioIngresado=parseFloat(precioIngresado);
		}
    switch(tipoProductoIngresado)
    {
      case "arena":
        acumuladorArena=acumuladorArena+cantidadBolsasIngresada;
      break;
      case "cal":
        acumuladorCal=acumuladorCal+cantidadBolsasIngresada;
      break;
      case "cemento":
        acumuladorCemento=acumuladorCemento+cantidadBolsasIngresada;
      break; 
    }
    if(banderaMasCaro==true)
    {
      PrimerPrecio=precioIngresado;
      PrimerTipo=tipoProductoIngresado;
      primerUnidadesCaro=cantidadBolsasIngresada;
      banderaMasCaro=false;
    }
    else
    {
      if(precioIngresado>PrimerPrecio)
      {
        PrimerPrecio=precioIngresado;
        PrimerTipo=tipoProductoIngresado;
        primerUnidadesCaro=cantidadBolsasIngresada;
      }
    }
    precioBruto=cantidadBolsasIngresada*precioIngresado;
    acumuladorPrecioBruto=acumuladorPrecioBruto+precioBruto;
    confirmarVuelta=confirm("¿Desea continuar?");

  }//fin del while
  totalBosalCompradas=acumuladorArena+acumuladorCal+acumuladorCemento;
  mensaje="El importe total bruto a pagar es: "+acumuladorPrecioBruto+"<br>";
  if(totalBosalCompradas>10)
  {
    if(totalBosalCompradas>30)
    {
      descuentoCompra=precioBruto*25/100;
      precioFinalDescuento=precioBruto-descuentoCompra;
      mensaje=mensaje+"Se realizó un descuento del 25% el precio final es $"+precioFinalDescuento+"<br>";
    }
    else
    {
      descuentoCompra=precioBruto*15/100;
      precioFinalDescuento=precioBruto-descuentoCompra;
      mensaje=mensaje+"Se realizó un descuento del 15% el precio final es $"+precioFinalDescuento+"<br>";
    }
  }

  if(acumuladorArena>acumuladorArena&&acumuladorArena>acumuladorCemento)
  {
    mensaje=mensaje+"El tipo que más se compro es Arena, se compraron unidades "+acumuladorArena+"<br>";
  }
  else
  {
    if(acumuladorCal>acumuladorCemento)
    {
      mensaje=mensaje+"El tipo que más se compro es Cal, se compraron unidades "+acumuladorCal+"<br>";
    }
    else
    {
      mensaje=mensaje+"El tipo que más se compro es Cemento, se compraron unidades "+acumuladorCemento+"<br>";
    }
  }
  mensaje=mensaje+"El tipo más caro es: "+PrimerTipo+"la bolsa cuesta: $"+PrimerPrecio+", y se compraron bolsas:"+primerUnidadesCaro;

  document.write(mensaje);

}// Fin de función
