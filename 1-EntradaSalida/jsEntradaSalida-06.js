/*
Alejandro Alberto Martín Rozas
e/s 06
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	let numeroUno;
	let numeroDos;
	let suma;
	
	numeroUno=document.getElementById('txtIdNumeroUno').value;
	numeroDos=document.getElementById('txtIdNumeroDos').value;
	
	numeroUno=parseInt(numeroUno);//Esta es la forma correcta de usar el parseInt
	numeroDos=parseInt(numeroDos);// Esta la forma correcta de usar el parseInt
	
	suma=numeroUno+numeroDos;

	alert("La suma es " +suma);
	/*
	Toda la sintaxis esta mal
	var numeroY;
	numeroY=document.getElementById('txtIdNumeroUno').value;
	
	var numeroX;
	numeroX=document.getElementById('txtIdNumeroDos').value;

	var suma;
	suma=parseInt(numeroY)+parseInt(numeroX);

	//recordar siempre las mayuscalas y minusculas, en la funciones.
	// Proando definir las variables en una sola linea.

	var X,Y,suma;
	X=document.getElementById('txtIdNumeroUno').value;
	
	Y=document.getElementById('txtIdNumeroDos').value;

	suma=parseInt(X)+parseInt(Y);
	
	alert("el resultado es "+ suma);
	Esta mal, ya que estoy definiendo variables dentro del bloque y eso se hace con la keyword let
	var = variable dentro de la función
	let = variable dentro del bloque
	Acontinuación defíno 3 sintaxis de programación que funcionan, 
	¿Cual sigue una buena practica de desarrollo?
	¿Es indistinto la forma en que se definen las variables?
	*/
	//Corregido:
	//Primera forma:

	//alert(parseInt(document.getElementById('txtIdNumeroUno').value)+parseInt(document.getElementById('txtIdNumeroDos').value));
	//ahorrarse codigo es un mala practica, en la carrera me voy ahorrar nota, esta forma no comentada es la correcta.
	//Segunda forma:
	/*
	let numeroY;
	numeroY=parseInt(document.getElementById('txtIdNumeroUno').value);

	let numeroX;
	numeroX=parseInt(document.getElementById('txtIdNumeroDos').value);

	let suma;
	suma=numeroY+numeroX;

	alert("el resultado es "+ suma);
	*/
	/*/ Tercer Forma: MAL NO HAY QUE AHORRARSE CÓDIGO
	let numeroY, numeroX, suma;
	
	numeroY=parseInt(document.getElementById('txtIdNumeroUno').value);
	
	numeroX=parseInt(document.getElementById('txtIdNumeroDos').value);

	suma=numeroY+numeroX;

	alert("el resultado es "+ suma);*/
}
