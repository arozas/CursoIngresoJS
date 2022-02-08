/*Alejandro Alberto Martín Rozas
Div J
ejercicio IF07
*/
function mostrar()
{
	let edadIngresada;
	let estadoCivil;

	edadIngresada=document.getElementById('txtIdEdad').value;
	estadoCivil=document.getElementById('estadoCivil').value;

	edadIngresada=parseInt(edadIngresada);

	/*if (edadIngresada <18)
	{
		if(estadoCivil!="Soltero")
		{
			alert("Es muy pequeño para NO ser soltero.");
		}
	}*/
	if (edadIngresada<18 && estadoCivil!="Soltero")
	{
		alert("Es muy pequeño para NO ser soltero.");
	}
}//FIN DE LA FUNCIÓN