/*
Alejandro Alberto Martín Rozas
DIV J
TP03
3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () //(32°F − 32) × 5/9 = 0°C
{
    let temperaturaFahrenheit;
    let variableConversionDecimal;
    let variableConversionEntera;
    let formulaCentigrados;

    temperaturaFahrenheit=document.getElementById('txtIdTemperatura').value;
    variableConversionEntera=32;
    variableConversionDecimal=5/9;

    temperaturaFahrenheit=parseInt(temperaturaFahrenheit);
    variableConversionEntera=parseInt(variableConversionEntera);
    variableConversionDecimal=parseFloat(variableConversionDecimal);

    formulaCentigrados=(temperaturaFahrenheit-variableConversionEntera)*variableConversionDecimal;

    alert(temperaturaFahrenheit+"° Fahrenheit son "+formulaCentigrados+"° Centigrados");

}

function CentigradosFahrenheit () //(0°C × 9/5) + 32 = 32°F
{
    let temperaturaCentigrados;
    let variableConversionDecimal;
    let variableConversionEntera;
    let formulaFahrenheit;

    temperaturaCentigrados=document.getElementById('txtIdTemperatura').value;
    variableConversionDecimal=9/5; //1.8
    variableConversionEntera=32

    temperaturaCentigrados=parseInt(temperaturaCentigrados);
    variableConversionDecimal=parseFloat(variableConversionDecimal);
    variableConversionEntera=parseInt(variableConversionEntera)

    formulaFahrenheit=(temperaturaCentigrados*variableConversionDecimal)+variableConversionEntera;

    alert(temperaturaCentigrados+"° Centígrados son "+formulaFahrenheit+"° Fahrenheit");
}
