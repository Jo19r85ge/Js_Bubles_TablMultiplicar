var numEscogido = parseInt(prompt("Escoja un número entero (entre 1 y 10)"));
var maxTablaMult=10;

for(let c=1; c<=maxTablaMult; c++) 
{
    var resultado = numEscogido*c;
    
    document.write(`${numEscogido} x ${c} = ${resultado}<br>`);
}