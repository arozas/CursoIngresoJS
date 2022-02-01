/*
Alejandro Alberto Martín Rozas
e/s 07
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var X,Y,suma;

	X=document.getElementById('txtIdNumeroUno').value;
	
	Y=document.getElementById('txtIdNumeroDos').value;

	suma=parseInt(X)+parseInt(Y);
	
	alert("el resultado es "+ suma);
}

function restar()
{
	var X,Y,resta;

	X=document.getElementById('txtIdNumeroUno').value;
	
	Y=document.getElementById('txtIdNumeroDos').value;

	resta=parseInt(X)-parseInt(Y);
	
	alert("el resultado es "+ resta);
}

function multiplicar()
{ 
	var X,Y,multiplicacion;

	X=document.getElementById('txtIdNumeroUno').value;
	
	Y=document.getElementById('txtIdNumeroDos').value;

	multiplicacion=parseInt(X)*parseInt(Y);
	
	alert("el resultado es "+ multiplicacion);
}

function dividir()
{
	var X,Y,division;

	X=document.getElementById('txtIdNumeroUno').value;
	
	Y=document.getElementById('txtIdNumeroDos').value;

	division=parseInt(X)/parseInt(Y);
	
	alert("el resultado es "+ division);
}

/* Me adelante despues de resolver el ejercicio anterior, lo que hice es copiar y pegar el código
cambiando solamente una variable. Puede que este haciendo algo mal, pero estoy esperimentando.