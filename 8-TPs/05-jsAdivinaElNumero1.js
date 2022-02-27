/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contadorIntentos;

contadorIntentos=0

function comenzar()
{
	numeroSecreto=Math.random()*100+1;
  numeroSecreto=parseInt(numeroSecreto);
	 
		//alert(numeroSecreto);
    alert("Se genero el número")
}

function verificar()
{
	let numeroIngresado;
  let mensaje;
  let faltanNumeros;
  let sobranNumeros;

  numeroIngresado=document.getElementById('txtIdNumero').value;

  numeroIngresado=parseInt(numeroIngresado);

  contadorIntentos=contadorIntentos+1;
	
  if (numeroIngresado==numeroSecreto)
  {
    
    mensaje= "Usted es un ganador!!! y en solo "+contadorIntentos+" intentos";
  }
  else
  {
    if (numeroIngresado<numeroSecreto)
    {
      faltanNumeros=numeroSecreto-numeroIngresado;
      mensaje= "Falta "+faltanNumeros+" números";
    } 
    else
    {
      if(numeroIngresado>numeroSecreto)
      {
        sobranNumeros=numeroIngresado-numeroSecreto;
        mensaje ="Sé pasó por "+sobranNumeros+" números";
      }
    }
  }
  alert(mensaje);
}