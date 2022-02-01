/*
Alejandro Alberto Martín Rozas
e/s 08
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	let dividendo,divisor,resto;

	dividendo=parseInt(document.getElementById('txtIdNumeroDividendo').value);
	
	divisor=parseInt(document.getElementById('txtIdNumeroDivisor').value);

	resto=dividendo%divisor;
	
	alert("El resto es "+ resto);
}
