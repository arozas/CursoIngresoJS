/*
Alejandro Alberto Martín Rozas
e/s 02
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	//alert("ok");
	/*let person = prompt("Please enter your name", "Harry Potter"); 
	primera interacción con el código, 
	w3school son ejemplos de programacion no siempre es codigo bien programado*/
	let nombreIngresado = prompt("Por favor ingrese su nombre", "Fulano");

	//alert("texto literal")
	//alert(person) ejemplo de salida de la variable anterior
	alert("su nombre es "+ nombreIngresado)
	//alert(nombreIngresado)
}

