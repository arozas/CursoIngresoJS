/*Realizar el algoritmo que permita ingresar los datos de una compra productos 
de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro */
function mostrar()
{
  let productoIngresado;
  let cantidadIngresada;
  let precioIngresado;
  let confirmarVuelta;
  let precioBruto;
  let acumuladorPrecioBruto;
  let mensaje;
  let descuento;
  let precioFinalDescuento;
  let acumuladorArena;
  let acumuladorCal;
  let acumuladorCemento;
  let banderaMasCaro;
  let PrimerPrecio;
  let PrimerTipo;

  confirmarVuelta=true;
  acumuladorPrecioBruto=0;
  acumuladorArena=0;
  acumuladorCal=0;
  acumuladorCemento=0;
  banderaMasCaro=true;


  while (confirmarVuelta==true)
  {
    productoIngresado=prompt("Ingrese el producto");
    while(productoIngresado!="arena"&&productoIngresado!="cal"&&productoIngresado!="cemento")
    {
        productoIngresado=prompt("Error, ingrese arena, cal o cemento");
    }
    cantidadIngresada=prompt("Ingrese la cantidad de bolsas:");
    cantidadIngresada=parseInt(cantidadIngresada);
    while(isNaN(cantidadIngresada)||cantidadIngresada<0)
    {
        cantidadIngresada=prompt("Error, ingrese una cantidad valida:");
        cantidadIngresada=parseFloat(cantidadIngresada);
    }
    precioIngresado=prompt("Ingrese el precio:");
    precioIngresado=parseFloat(precioIngresado);
    while(isNaN(precioIngresado)||precioIngresado<0)
    {
        precioIngresado=prompt("Error, reingrese el precio:");
        precioIngresado=parseFloat(precioIngresado);
    }
    switch(productoIngresado)
    {
      case "arena":
        acumuladorArena=acumuladorArena+cantidadIngresada;
      break;
      case "cal":
        acumuladorCal=acumuladorCal+cantidadIngresada;
      break;
      case "cemento":
        acumuladorCemento=acumuladorCemento+cantidadIngresada;
      break;
    }
    if(banderaMasCaro==true)
    {
      PrimerPrecio=precioIngresado;
      PrimerTipo=productoIngresado;
      banderaMasCaro=false;
    }
    else
    {
      if(precioIngresado>PrimerPrecio)
      {
        PrimerPrecio=precioIngresado;
        PrimerTipo=productoIngresado; 
      }
    }
    precioBruto=precioIngresado*cantidadIngresada;
    acumuladorPrecioBruto=acumuladorPrecioBruto+precioBruto;
    confirmarVuelta=confirm("¿Desea continuar?")
  }// fin while
  
  mensaje="El precio bruto sin descuentos es: $"+acumuladorPrecioBruto+"<br>";

  if(cantidadIngresada>10)
  {
    if(cantidadIngresada>30)
    {
      descuento=(acumuladorPrecioBruto*15)/100;
      precioFinalDescuento=acumuladorPrecioBruto-descuento;
      mensaje=mensaje+"El precio final con el descuento del 15% es: $"+precioFinalDescuento+"<br>";
    }
    else
    {
      descuento=(acumuladorPrecioBruto*20)/100;
      precioFinalDescuento=acumuladorPrecioBruto-descuento;
      mensaje=mensaje+"El precio final con el descuento del 20% es: $"+precioFinalDescuento+"<br>";
    }
  }
 
  if(acumuladorArena>acumuladorCal&&acumuladorArena>acumuladorCemento)
  {
    mensaje=mensaje+"El tipo más comprado es arena. <br>"
  }
  else
  {
    if(acumuladorCal>acumuladorArena)
    {
      mensaje=mensaje+"El tipo más comprado es cal. <br>"
    }
    else
    {
      mensaje=mensaje+"El tipo más comprado es cemento. <br>"
    }
  }
  mensaje=mensaje+"El tipo más caro es :"+PrimerTipo+" y su precio es: $"+PrimerPrecio;

  document.write(mensaje)

}//fin función
