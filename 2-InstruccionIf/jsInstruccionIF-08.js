/*Alejandro Alberto Martín Rozas
Div J
ejercicio IF08
*/
function mostrar()
{
let edadIngresada;
let estadoCivil;

edadIngresada=document.getElementById('txtIdEdad').value;
estadoCivil=document.getElementById('estadoCivil').value;

edadIngresada=parseInt(edadIngresada);

if (edadIngresada>18)
{
	if (estadoCivil=="Soltero")
	{
		alert("Es soltero y no es menor");
	}
}
}//FIN DE LA FUNCIÓN