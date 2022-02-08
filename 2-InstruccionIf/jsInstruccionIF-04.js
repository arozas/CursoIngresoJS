/*Alejandro Alberto Martín Rozas
Div J
ejercicio IF04
*/
function mostrar()
{
	let edadIngresada;
	let mensajeEdad;

	edadIngresada=document.getElementById('txtIdEdad').value;
	edadIngresada=parseInt(edadIngresada);

	mensajeEdad="Usted tiene "+edadIngresada+" y es adolecente";

	if (edadIngresada>12)
	{
		if(edadIngresada<18)
		{
			alert(mensajeEdad);
		}
	}
	/*if (edadIngresada>=13 && edadIngresada<=17)
	{
		alert(mensajeEdad);
	}*/

	/*
	function mostrar()
{
	//tomo la edad  
	/*	
	Al ingresar una edad solo debemos 
	informar si la persona
					NO es adolescente.
	if(edadIngresada<13)
	{
		alert("su edad es "+edadIngresada+" y usted es NO adolescente");	
	}
	if(edadIngresada>17)
	{
		alert("su edad es "+edadIngresada+" y usted es NO adolescente");
	}	


	//bien if(edadIngresada<13 || edadIngresada>17)
	if(!(edadIngresada>12 && edadIngresada<18))
	//error if(edadIngresada>13 || edadIngresada<17)// todos
	{
		alert("su edad es "+edadIngresada+" y usted es NO adolescente");
	}	


	if(edadIngresada>12 && edadIngresada<18)
	{

	}else
	{
		alert("su edad es "+edadIngresada+" y usted es NO adolescente");
	}	

	if(edadIngresada<13 || edadIngresada>17)
	{
		alert("su edad es "+edadIngresada+" y usted es NO adolescente");
	}*/
	// if (edadIngresada >12 && aca va la variable <18)
}//FIN DE LA FUNCIÓN