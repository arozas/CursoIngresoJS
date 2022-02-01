/*
Alejandro Alberto Martín Rozas
e/s 06
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
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
	*/
	//Corregido:
	//Primera forma:
	/*
	let numeroY;
	let numeroX;
	let suma;
	
	numeroY=parseInt(document.getElementById('txtIdNumeroUno').value);
	
	numeroX=parseInt(document.getElementById('txtIdNumeroDos').value);

	suma=numeroY+numeroX;

	alert("el resultado es "+ suma);
	*/
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
	// Tercer Forma:
	let numeroY, numeroX, suma;
	
	numeroY=parseInt(document.getElementById('txtIdNumeroUno').value);
	
	numeroX=parseInt(document.getElementById('txtIdNumeroDos').value);

	suma=numeroY+numeroX;

	alert("el resultado es "+ suma);
}

