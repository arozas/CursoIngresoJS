/*
Alejandro Alberto Martín Rozas
e/s 08
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	let numeroDividendo;
	let numeroDivisor;
	let resto;

	numeroDividendo=document.getElementById('txtIdNumeroDividendo').value;
	numeroDivisor=document.getElementById('txtIdNumeroDivisor').value;

	numeroDividendo=parseInt(numeroDividendo);
	numeroDivisor=parseInt(numeroDivisor);

	resto=numeroDividendo%numeroDivisor;
	
	alert("El resto es "+ resto);
}
/* Este ejercicio se hizo según las buenas practicas, siempre ir al ejercicio 06 
para ver todo lo que se hizo mal.*/

//resto=2%10 reultado 2
//resto=10%2 resultado 0
