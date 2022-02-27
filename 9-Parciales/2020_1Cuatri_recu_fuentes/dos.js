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
  let productoIngresado;
  let cantidadBolsas;
  let precioBolsas;
  let confirmacionCliente;
  let acumuladorBolsas;
  let acumuladorPrecio;
  let precioBruto;

  acumuladorBolsas=0;
  acumuladorPrecio=0;

  confirmacionCliente=true;
  
  while(confirmacionCliente==true)
  {
    productoIngresado=prompt("Ingrese Producto");
    productoIngresado=productoIngresado.toLowerCase();
    while(productoIngresado!="arena"&&productoIngresado!="cal"&&productoIngresado!="cemento")
    {
      productoIngresado=prompt("Error, ingrese arena, cal o cemento");
      productoIngresado=productoIngresado.toLowerCase();
    }
    cantidadBolsas=prompt("Ingrese canitad de bolsas");
    cantidadBolsas=parseInt(cantidadBolsas);
    while(isNaN(cantidadBolsas)||cantidadBolsas<0)
    {
      cantidadBolsas=prompt("Error, ingrese un una cantidad valida");
      cantidadBolsas=parseInt(cantidadBolsas);
    }
    precioBolsas=prompt("Ingrese precio");
    precioBolsas=parseFloat(precioBolsas);
    while(isNaN(precioBolsas) || precioBolsas<0)
    {
      precioBolsas=prompt("Error, ingrese un precio valido");
      precioBolsas=parseFloat(precioBolsas);
    }
    acumuladorBolsas=acumuladorBolsas+cantidadBolsas;
    acumuladorPrecio=acumuladorPrecio+precioBolsas;
    confirmacionCliente=confirm("¿desea continuar?")


  
  }//fin del While
  precioBruto=acumuladorBolsas*acumuladorPrecio
  alert(precioBruto);
  // Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
  // Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
  // a) El importe total a pagar , bruto sin descuento y...

}// Fin de función
