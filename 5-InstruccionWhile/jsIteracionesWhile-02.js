/*Alejandro Alberto Martín Rozas
Div J
ejercicio While 02
al presionar el botón mostrar 10 repeticiones 
con números DESCENDENTES, desde el 10 al 1.*/
function mostrar()
{
let contador;
let confirmarContinuar;

contador = 10;
confirmarContinuar=true; //una forma de poner un paro al while con confirm.
//confirm hace una pregunta con dos respuestas true o false

while(confirmarContinuar==true)
{
	alert(contador);
	contador=contador-1;
	confirmarContinuar=confirm("¿desea cotinuar?")
	
}

}//FIN DE LA FUNCIÓN