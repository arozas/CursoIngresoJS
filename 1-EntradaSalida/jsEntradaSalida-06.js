/*
Alejandro Alberto Martín Rozas
e/s 06
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	/*
	var numeroY;
	numeroY=document.getElementById('txtIdNumeroUno').value;
	
	var numeroX;
	numeroX=document.getElementById('txtIdNumeroDos').value;

	var suma;
	suma=parseInt(numeroY)+parseInt(numeroX);
*/
	//recordar siempre las mayuscalas y minusculas, en la funciones.
	// Proando definir las variables en una sola linea.

	var X,Y,suma;
	X=document.getElementById('txtIdNumeroUno').value;
	
	Y=document.getElementById('txtIdNumeroDos').value;

	suma=parseInt(X)+parseInt(Y);
	
	alert("el resultado es "+ suma);
}

