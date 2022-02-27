/*Alejandro Alberto Martín Rozas
Div J
ejercicio While 04
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let numeroIngresado;
	numeroIngresado = prompt("ingrese un número entre 0 y 10.");
	numeroIngresado=parseInt(numeroIngresado);

	while(numeroIngresado>10 || numeroIngresado<0)
	{
		numeroIngresado = prompt("no ingresó un número entre 0 y 10.");
		numeroIngresado=parseInt(numeroIngresado);
	}
	document.getElementById('txtIdNumero').value="Perfecto, ingresó el numero: "+numeroIngresado;

}//FIN DE LA FUNCIÓN