/*Alejandro Alberto Martín Rozas
Div J
ejercicio IF10
Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4, (Mayor a 4=5,6,7,8,etc)
"Vamos, la proxima se puede" para notas menores a 4 (Menor a 4= 3, 2, 1...)
*/
function mostrar()
{
	let numeroRandom;

	numeroRandom=(Math.random()*10)+1;

	numeroRandom=parseInt(numeroRandom);

		if (numeroRandom==9 || numeroRandom==10)
	{
		alert("Tu nota es "+numeroRandom+" ¡EXCELENTE!");
	}
	else
	{
		if (numeroRandom<4)
		{
			alert("Tu nota es "+numeroRandom+" ¡Vamos, la proxima se puede!");
		}
		else
		{
			alert("Tu nota es "+numeroRandom+" ¡APROBÓ!");
		}
	}
	/*Esta mal, la comprovación en notas mayores de 9 me muestra los dos mensajes, Aprobo y excelente.
	if (numeroRandom>8)
	{
		alert("Tu nota es "+numeroRandom+" ¡EXCELENTE!")
	}
	if (numeroRandom>3)
	{
		alert("Tu nota es "+numeroRandom+" ¡APROBÓ!")
	}if (numeroRandom<4)
	{
		alert("Tu nota es "+numeroRandom+" ¡Vamos, la proxima se puede!")
	}
*/
}//FIN DE LA FUNCIÓN