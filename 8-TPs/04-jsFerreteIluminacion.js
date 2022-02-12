/*
Alejandro Alberto Martín Rozas
Div J
TP 04 IF

4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 
 */
function CalcularPrecio () 
{
    let cantidadLamparas;
    let marcaLamparas;
    let precioLamparas;
    let precioBruto;
    let descuento;
    let ingresosBrutos;
    let precioConDescuento;
    let precioFinal;

    cantidadLamparas=document.getElementById('txtIdCantidad').value;
    marcaLamparas=document.getElementById('Marca').value;
    precioLamparas=35;
    descuento=0; //si no declaro el descuento me va a tirar error en 1 lampara

    cantidadLamparas=parseInt(cantidadLamparas);

    precioBruto=cantidadLamparas*precioLamparas;
 	
    if(cantidadLamparas>5) //.A
    {
        descuento=50;
    }
    else
    {
        if(cantidadLamparas>4) //B
        {
            if (marcaLamparas=="ArgentinaLuz")
            {
                descuento=40;
            }
            else
            {
                descuento=30;
            }
        }
        else
        {
            if(cantidadLamparas>3) //.C
            {
                if (marcaLamparas=="ArgentinaLuz"|| marcaLamparas=="FelipeLamparas")
                {
                    descuento=25;
                }
                else
                {
                    descuento=20;
                }
            }
            else
            {
                if(cantidadLamparas>2)//.D
                {
                   if(marcaLamparas=="ArgentinaLuz")
                   {
                       descuento=15;
                   }
                   else
                   {
                       if(marcaLamparas=="FelipeLamparas")
                        {
                            descuento=10;
                        }
                        else    
                        {
                            descuento=5;
                        }
                   }
                }
            }
        }
    }

    precioConDescuento=precioBruto-(precioBruto*descuento)/100

    if (precioConDescuento>120)
    {
        ingresosBrutos=(precioConDescuento*10)/100;
        precioFinal=precioConDescuento-ingresosBrutos;
        document.getElementById('txtIdprecioDescuento').value="Usted pago $"+precioFinal+" de IIBB.”, siendo $"+ingresosBrutos+" el impuesto que se pagó";
    }


    precioFinal=precioConDescuento;
    document.getElementById('txtIdprecioDescuento').value="Usted pago $"+precioFinal;
}
