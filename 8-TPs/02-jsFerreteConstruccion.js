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
    let mensajeAlert;

    largoRectangulo=document.getElementById('txtIdLargo').value;
    anchoRectangulo=document.getElementById('txtIdAncho').value;
    cantidadHiloAlambre=3;

    largoRectangulo=parseInt(largoRectangulo);
    anchoRectangulo=parseInt(anchoRectangulo);

    perimetroRectangulo=2*(largoRectangulo+anchoRectangulo);

    materialNecesario=perimetroRectangulo*cantidadHiloAlambre;

    mensajeAlert="Se necesita comprar "+materialNecesario+" unidades de alambre";
    
    alert(mensajeAlert);
}
function Circulo () 
{
    let radioCirculo;
    let cantidadHiloAlambre;
    let perimetroCirculo; //L = 2 · π · r
    let materialNecesario;
    let mensajeAlert;

    radioCirculo=document.getElementById('txtIdRadio').value;
    cantidadHiloAlambre=3;
   
    radioCirculo=parseInt(radioCirculo);

    perimetroCirculo=2*Math.PI*radioCirculo;

    materialNecesario=perimetroCirculo*cantidadHiloAlambre;

    mensajeAlert="Se necesita comprar "+materialNecesario.toFixed(2)+" unidades de alambre";
    //usar .toFixed para definir la cantidad de decimales a mostrar sin modificar el valor de la variable.
    alert(mensajeAlert);
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
    let mensajeAlert;

    largoRectangulo=document.getElementById('txtIdLargo').value;
    anchoRectangulo=document.getElementById('txtIdAncho').value;
    bolsasCemento=2;
    bolsasCal=3;

    largoRectangulo=parseInt(largoRectangulo); //Solo para cadenas o entradas de datos usar el parseInt
    anchoRectangulo=parseInt(anchoRectangulo);

    areaRectangulo=largoRectangulo*anchoRectangulo;

    cantidadCemento=areaRectangulo*bolsasCemento;

    cantidadCal=areaRectangulo*bolsasCal;

    mensajeAlert="Se necesita comprar "+cantidadCemento+" bolsas de cemento y "+cantidadCal+" bolsas de cal";

    alert(mensajeAlert);	
}