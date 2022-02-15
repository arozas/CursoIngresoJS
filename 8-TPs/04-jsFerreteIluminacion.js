/*
Alejandro Alberto Martín Rozas
Div J
TP 04 Switch

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
 	
    switch(cantidadLamparas)
    {
        case 5:
            switch(marcaLamparas)
            {
                case "ArgentinaLuz":
                    descuento=(precioBruto*-40)/100;
                break;
                default:
                    descuento=(precioBruto*-30)/100;
                break;
            }
        break;
        case 4:
            switch(marcaLamparas)
            {
                case "ArgentinaLuz":
                case "FelipeLamparas":
                    descuento=(precioBruto*-25)/100;
                break;
                default:
                    descuento=(precioBruto*-20)/100;
                break;
            }
        break;
        case 3:
            switch(marcaLamparas)
            {
                case "ArgentinaLuz":
                    descuento=(precioBruto*-15)/100;
                break;
                case "FelipeLamparas":
                    descuento=(precioBruto*-10)/100;
                break;
                default:
                    descuento=(precioBruto*-5)/100;
                break;
            }
        break;
        case 2:
        case 1:
            descuento=0
        break;
        default:
            descuento=(precioBruto*-6)/100;
        break;
    }

    precioConDescuento=precioBruto+descuento
    precioFinal=precioConDescuento;

    if (precioConDescuento>120)
    {
        ingresosBrutos=(precioConDescuento*10)/100;
        precioFinal=precioConDescuento+ingresosBrutos;
        alert("Usted pago $"+ingresosBrutos.toFixed(2)+" de IIBB");
    }

    document.getElementById('txtIdprecioDescuento').value="Importe $"+precioFinal.toFixed(2);
}
