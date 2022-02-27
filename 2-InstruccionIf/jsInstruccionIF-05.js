/*Alejandro Alberto Martín Rozas
Div J
ejercicio IF05
*/
function mostrar()
{
	let edadIngresada;
	let mensajeEdad;

	edadIngresada=document.getElementById('txtIdEdad').value;
	edadIngresada=parseInt(edadIngresada);

	mensajeEdad="Usted tiene "+edadIngresada+" y no es adolecente";

	if (edadIngresada<13)
	{
		alert(mensajeEdad);
	}
	if (edadIngresada>17)
	{
		alert(mensajeEdad);
	}
	/*if (edadIngresada<=13 || edadIngresada>=17)
	{
		alert(mensajeEdad);
	}*/
	/*Logica
	if(edadIngresada<13)
	{
		//error if(edadIngresada>17) nunca entra
		if(edadIngresada<6)
		{
			alert("al jardin");
		}else
		{
			alert("primaria");
		}
	}
	else // los no niños
	{
		// mal if(edadIngresada<6) no entra nunca
		
		if(edadIngresada>17)
		{
			alert("mayor");
			if(edadIngresada>55)
			{
				alert("anda a cobrar la jubilacion");
			}

		}else
		{
			alert("adolescente");
		}
	*/
}//FIN DE LA FUNCIÓN