/*
Alejandro Rozas
DIV J
PARCIAL 2020 - PUNTO 01
Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total
*/

function mostrar()
{
    let productoIngresado;
    let precioIngresado;
    let cantidadIngresada;
    let marcaIngresada;
    let fabricanteIngresado;
    let contadorVueltas;
    let banderaPrimerAlcohol;
    let precioPrimerAlcohol;
    let fabricantePrimerAlcohol;
    let acumuladorBarbijo;
    let acumuladorJabon;
    let acumuladorAlcohol;
    let mensaje;
    let totalCompra;
    let promedioCompra;

    contadorVueltas=0;
    banderaPrimerAlcohol=true;
    acumuladorBarbijo=0;
    acumuladorJabon=0;
    acumuladorAlcohol=0;


    while (contadorVueltas<5)
    {
        productoIngresado=prompt("Ingrese el producto");
        while(productoIngresado!="barbijo"&&productoIngresado!="jabón"&&productoIngresado!="alcohol")
        {
            productoIngresado=prompt("Error, ingrese barbijo, jabón o alcohol");
        }
        precioIngresado=prompt("Ingrese el precio:");
        precioIngresado=parseFloat(precioIngresado);
        while(isNaN(precioIngresado)||(precioIngresado<100 || precioIngresado>300))
        {
            precioIngresado=prompt("Error, reingrese el precio:");
            precioIngresado=parseFloat(precioIngresado);
        }
        cantidadIngresada=prompt("Ingrese la cantidad:");
        cantidadIngresada=parseInt(cantidadIngresada);
        while(isNaN(cantidadIngresada)||(cantidadIngresada<0 || cantidadIngresada>1000))
        {
            cantidadIngresada=prompt("Error, ingrese una cantidad valida:");
            cantidadIngresada=parseFloat(cantidadIngresada);
        }
        //b) Del tipo con mas unidades, el promedio por compra.
        switch(productoIngresado)
        {
            case "barbijo":
                acumuladorBarbijo=acumuladorBarbijo+cantidadIngresada;
            break;
            case "jabón":
                acumuladorJabon=acumuladorJabon+cantidadIngresada;
            break;
            case "alcohol":
                //a) Del más barato de los alcohol, la cantidad de unidades y el fabricante.
                if(banderaPrimerAlcohol==true)
                {
                    precioPrimerAlcohol=precioIngresado;
                    fabricantePrimerAlcohol=fabricanteIngresado;
                    banderaPrimerAlcohol=false;
                }
                else
                {
                    if(precioIngresado<precioPrimerAlcohol)
                    {
                        precioPrimerAlcohol=precioIngresado;
                        fabricantePrimerAlcohol=fabricanteIngresado; 
                    }
                }
                acumuladorAlcohol=acumuladorAlcohol+cantidadIngresada;
            break;
        }
        marcaIngresada=prompt("Ingrese la marca:");
        fabricanteIngresado=prompt("Ingrese el fabricante:");
        contadorVueltas=contadorVueltas+1;
        
    }//Fin del while
    totalCompra=acumuladorBarbijo+acumuladorJabon+acumuladorAlcohol;
    
    mensaje="El precio del alcohol más barato es: $"+precioPrimerAlcohol+" y su fabricante es: "+fabricantePrimerAlcohol+"<br>";
    
    if(acumuladorBarbijo>acumuladorJabon&&acumuladorBarbijo>acumuladorAlcohol)
    {
        promedioCompra=(acumuladorBarbijo*100)/totalCompra;
        mensaje=mensaje+"El promedio de compra de los barbijos es: "+promedioCompra+"%<br>";
    }
    else
    {
        if(acumuladorJabon>acumuladorAlcohol)
        {
            promedioCompra=(acumuladorJabon*100)/totalCompra;
            mensaje=mensaje+"El promedio de compra del jabon es: $"+promedioCompra+"%<br>";
        }
        else
        {
            promedioCompra=(acumuladorAlcohol*100)/totalCompra;
            mensaje=mensaje+"El promedio de compra de los Alcohol es: $"+promedioCompra+"%<br>";
        }
    }
    mensaje=mensaje+"La cantidad de jabones comprados es: "+acumuladorJabon;

    document.write(mensaje);
   
}//fin función