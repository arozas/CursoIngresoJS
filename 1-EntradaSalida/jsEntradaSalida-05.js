/*
Alejandro Alberto Martín Rozas
e/s 05
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	/*
	var nombreIngresado; MAL
	nombreIngresado=document.getElementById('txtIdNombre').value;	
	
	var edadIngresada; MAL
	edadIngresada=document.getElementById('txtIdEdad').value;
	
	Esta mal, ya que estoy definiendo variables dentro del bloque y eso se hace con la keyword let
	var = variable dentro de la función
	let = variable dentro del bloque
	*/

	let nombreIngresado;
	nombreIngresado=document.getElementById('txtIdNombre').value;	
	
	let edadIngresada;
	edadIngresada=document.getElementById('txtIdEdad').value;
	
	alert("Usted se llama "+ nombreIngresado +" y tiene "+ edadIngresada +" años" );

}
/*

Recordad que el ingresos o salidas por ID es por medio de 
document.getElementByID no por prompt.

Procesos de Salida de datos se puede hacer por:
alert() que muestra un mensaje
document.getElementById('unID').value= que se le asigna algo

Procesos de Entrada de datos:
variable=prompt() donde es importante que tenga igual que va a una variable
variable=document.getElementById('unID').value es importante donde va el igual
*/
