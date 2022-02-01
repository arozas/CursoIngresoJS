/*
Alejandro Alberto Martín Rozas
e/s 07
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	let X,Y,suma;

	X=parseInt(document.getElementById('txtIdNumeroUno').value);

	Y=parseInt(document.getElementById('txtIdNumeroDos').value);

	suma=X+Y;
	
	alert("La suma es "+ suma);
}

function restar()
{
	let X,Y,resta;

	X=parseInt(document.getElementById('txtIdNumeroUno').value);

	Y=parseInt(document.getElementById('txtIdNumeroDos').value);

	resta=X-Y;
	
	alert("La resta es "+ resta);
}

function multiplicar()
{ 
	let X,Y,multiplicacion;

	X=parseInt(document.getElementById('txtIdNumeroUno').value);

	Y=parseInt(document.getElementById('txtIdNumeroDos').value);

	multiplicacion=X*Y;
	
	alert("La multiplicación es "+ multiplicacion);
}

function dividir()
{
	let X,Y,division;

	X=parseInt(document.getElementById('txtIdNumeroUno').value);

	Y=parseInt(document.getElementById('txtIdNumeroDos').value);

	division=X/Y;
	
	alert("La división es "+ division);
}

/* Me adelante despues de resolver el ejercicio anterior, lo que hice es copiar y pegar el código
cambiando solamente una variable. Puede que este haciendo algo mal, pero estoy esperimentando.
Hice correcciones sobre la sintaxis y adecue al enunciado.
*/