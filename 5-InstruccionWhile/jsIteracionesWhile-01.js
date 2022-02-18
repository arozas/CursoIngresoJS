/*Alejandro Alberto Martín Rozas
Div J
ejercicio While 01
al presionar el botón mostrar 10 repeticiones 
con números ASCENDENTE, desde el 1 al 10.*/
function mostrar()
{
	let contador;

	contador = 0;
	//while tambien puede evaluar cadenas,ya que como IF tiene valores true o false.
	//usa los mismos operadores de lógica del IF. siempre asegurar de cerrar el bucle.
	while(contador<10)
	{
		contador=contador+1 //Aca primero suma y luego muestra,
		alert(contador); //hay que tener cuidado, de no salir de la condición y quedar en un bucle eterno.
		
	}
	/*
	El while consta de 3 partes, la variable que lo inicializa, la condición que lo cierra
	y la parte que lo cierra.
	*/
}//FIN DE LA FUNCIÓN