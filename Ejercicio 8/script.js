/* Escribir un programa que lea números enteros hasta teclear 0 (cero). Al finalizar el
programa se debe mostrar el máximo número ingresado, el mínimo, y el promedio de
todos ellos. */

var numero = parseInt(prompt("Ingrese un numero entero diferente a 0"));
console.log(numero);

var minimo = numero;
var maximo = numero;
var sum = 0;
var cont = 0;

while (numero != 0) {
  if (maximo < numero) {
    maximo = numero;
  }

  if (minimo > numero) {
    minimo = numero;
  }
  sum += numero;
  cont++;

  numero = parseInt(prompt("Ingrese un numero entero diferente a 0"));
  console.log(numero);
}

var promedio = sum / cont;
console.log(sum + " y " + cont);

alert(`-Numero Maximo: ${maximo}
- Numero Minimo: ${minimo}
-Promedio: ${promedio}`);
