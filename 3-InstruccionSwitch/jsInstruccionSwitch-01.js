/*Alejandro Alberto Martín Rozas
Div J
ejercicio Switch 01
*/
function mostrar()
{
	//tomo el mes
	var mesDelAño =txtIdMes.value;
	let mensaje;

	switch(mesDelAño)
	{
		case "Enero":
			mensaje="que comiences bien el año!!!";
		break;
		case "Marzo":
			mensaje="a clases!!!.";
		break;
		case "Julio":
			mensaje="se vienen las vacaciones!!!";
		break;
		case "Diciembre":
			mensaje="Felices fiesta!!!";
		break;
		default:
			mensaje=" "+mesDelAño;
		break;
	}
	alert(mensaje);
}
//Carateristicas del Switch, no hay lógica, ni operadores.El switch es creado para no tener estructuras, internamente tiene bifurcaciones y saltos.
//para armar los cosas se usa "case" que puede recibir palabras o numeros
// no se pude poner código fuera del "case"-"break#"
// se puede usar un if dentro de un case, no lo vamos a usar del 1 al 6
//otra erramienta es la instrucción el default;
//Puedo poner 2 cases seguido con un solo break
//FIN DE LA FUNCIÓN