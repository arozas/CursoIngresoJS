/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let largoRectangulo;
    let anchoRectangulo;
    let perimetroRectangulo;
    let cantidadHiloAlambre;

    largoRectangulo=document.getElementById('txtIdLargo').value;
    anchoRectangulo=document.getElementById('txtIdAncho').value;

    largoRectangulo=parseInt(largoRectangulo);
    anchoRectangulo=parseInt(anchoRectangulo);

    perimetroRectangulo=(largoRectangulo*2)+(anchoRectangulo*2);

    cantidadHiloAlambre=perimetroRectangulo*3;

    alert("Se necesita comprar "+cantidadHiloAlambre+" metros del alambre");
}
function Circulo () 
{
    let radioCirculo;
    let numeroPi;
    let perimetroCirculo; //L = 2 · π · r
    let cantidadHiloAlambre;

    radioCirculo=document.getElementById('txtIdRadio').value;
    numeroPi=3.14;
    
    
    radioCirculo=parseInt(radioCirculo);
    //numeroPi=parseInt(numeroPi); //no se puede calcular el radio con parseInt, por que lo traforma a entero
    numeroPi=parseFloat(numeroPi); //uso el parseFloat por que Pi es un numero decimal

    perimetroCirculo=2*numeroPi*radioCirculo;

    cantidadHiloAlambre=perimetroCirculo*3;

    alert("Se necesita comprar "+cantidadHiloAlambre+" metros del alambre");
}
function Materiales () 
{
    let largoRectangulo;
    let anchoRectangulo;
    let areaRectangulo; //ÁREA = BASE X ALTURA (Largo x Ancho)
    let cantidadMaterial;

    largoRectangulo=document.getElementById('txtIdLargo').value;
    anchoRectangulo=document.getElementById('txtIdAncho').value;

    largoRectangulo=parseInt(largoRectangulo);
    anchoRectangulo=parseInt(anchoRectangulo);

    areaRectangulo=largoRectangulo*anchoRectangulo;

    cantidadMaterial=areaRectangulo*3;

    alert("Se necesita comprar "+cantidadMaterial+" bolsas de cemento");	
}