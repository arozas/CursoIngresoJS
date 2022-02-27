/*Alejandro Alberto Martín Rozas
Div J
ejercicio IF09
*/
function mostrar()
{
	let numeroRandom;

	//numeroRandom=(Math.random()+1)*10; La instrución solo muestra numeros del 0 al 9.
	//numeroRandom=Math.random()*11;   solo me muestra del 0 al 10
	numeroRandom=(Math.random()*10)+1;

	numeroRandom=parseInt(numeroRandom);

	alert(numeroRandom);	

}//FIN DE LA FUNCIÓN