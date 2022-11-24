

var num = prompt("Ingrese un numero")

var area = Math.PI * Math.pow(num,2);
var perim = 2*Math.PI*num;

var mensaje = `El perimetro es: ${perim}
El area es: ${area}`;

alert(mensaje)