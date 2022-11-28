/* Escriba un programa en el cual se ingrese un valor límite positivo, y a continuación
solicite números al usuario hasta que la suma de los números introducidos supere el
límite inicial.*/


var numero = parseInt(prompt("ingrese un limite"));
limi(numero);



function limi(numero) {
    var suma = 0;


    while (suma <= numero) {

        suma = suma + parseInt(prompt(`Ingrese un numero, la suma acumulada es de: ${suma}`))
    }
    alert(`Se paso del limite que es: ${numero}
    la suma total es de ${suma}`)



}