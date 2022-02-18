/*Alejandro Alberto Martín Rozas
Div J
ejercicio While 05
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	var sexoIngresado;
	sexoIngresado = prompt("ingrese f ó m .");
	sexoIngresado=sexoIngresado.toUpperCase();
	console.log(sexoIngresado);

	while(sexoIngresado!="F" && sexoIngresado!="M")
	{
		sexoIngresado = prompt("Debe ingresar un género valido");
	}



	txtIdSexo.value=sexoIngresado;
}//FIN DE LA FUNCIÓN