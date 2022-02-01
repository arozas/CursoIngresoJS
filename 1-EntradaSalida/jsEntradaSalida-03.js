/*
Alejandro Alberto Martín Rozas
e/s 03
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
/*Como encontrar el ID, la forma mas dificil es revisar el HTML, y ver cual es el ID.
	dentro de html, vemos el input text.
	Si no con inspecionar el objeto en la web, inspecionandolo y de ahi compiando el el ID
	en este caso seria el txtIdnombre */ 
{
	var nombreIngresado;
	//nombreIngresado=txtIdNombre.value; esto esta mal
	//alert("ok");
	//a	nombreIngresado=document.getElementById('txtIdNombre'); asi dá error [object HTMLInputElement]
	nombreIngresado=document.getElementById('txtIdNombre').value;
	alert("El nombre por usted ingresado es "+ nombreIngresado); 
	//Agrego texto y lo concateno con la variable para practicar y entender mejor estas funciones
	/*Agrego la variable nombre ingresado, que tomar el dato desde la caja de 
	texto que es txtIdNombre, se agrega .value para informar que es el valor*/
}


