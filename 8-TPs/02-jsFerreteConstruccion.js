/*
Alejandro Alberto Martín Rozas
DIV J
TP02
2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let largoRectangulo;
    let anchoRectangulo;
    let cantidadHiloAlambre;
    let perimetroRectangulo;
    let materialNecesario;

    largoRectangulo=document.getElementById('txtIdLargo').value;
    anchoRectangulo=document.getElementById('txtIdAncho').value;
    cantidadHiloAlambre=3;

    largoRectangulo=parseInt(largoRectangulo);
    anchoRectangulo=parseInt(anchoRectangulo);
    cantidadHiloAlambre=parseInt(cantidadHiloAlambre);

    perimetroRectangulo=(largoRectangulo*2)+(anchoRectangulo*2);

    materialNecesario=perimetroRectangulo*cantidadHiloAlambre;

    alert("Se necesita comprar "+materialNecesario+" metros del alambre");
}
function Circulo () 
{
    let radioCirculo;
    let cantidadHiloAlambre;
    let numeroPi;
    let perimetroCirculo; //L = 2 · π · r
    let materialNecesario;

    radioCirculo=document.getElementById('txtIdRadio').value;
    cantidadHiloAlambre=3;
    numeroPi=3.14;
   
    radioCirculo=parseInt(radioCirculo);
    cantidadHiloAlambre=parseInt(cantidadHiloAlambre);
    //numeroPi=parseInt(numeroPi); //no se puede calcular el radio con parseInt, por que lo traforma a entero
    numeroPi=parseFloat(numeroPi); //uso el parseFloat por que Pi es un numero decimal

    perimetroCirculo=2*numeroPi*radioCirculo;

    materialNecesario=perimetroCirculo*cantidadHiloAlambre;

    alert("Se necesita comprar "+materialNecesario+" metros del alambre");
}
function Materiales () 
{
    let largoRectangulo;
    let anchoRectangulo;
    let bolsasCemento;
    let bolsasCal;
    let areaRectangulo; //ÁREA = BASE X ALTURA (Largo x Ancho)
    let cantidadCemento;
    let cantidadCal;

    largoRectangulo=document.getElementById('txtIdLargo').value;
    anchoRectangulo=document.getElementById('txtIdAncho').value;
    bolsasCemento=2;
    bolsasCal=3;

    largoRectangulo=parseInt(largoRectangulo);
    anchoRectangulo=parseInt(anchoRectangulo);
    bolsasCemento=parseInt(bolsasCemento);
    bolsasCal=parseInt(bolsasCal);

    areaRectangulo=largoRectangulo*anchoRectangulo;

    cantidadCemento=areaRectangulo*bolsasCemento;

    cantidadCal=areaRectangulo*bolsasCal;

    alert("Se necesita comprar "+cantidadCemento+" bolsas de cemento y "+cantidadCal+" bolsas de cal");	
}