function menu() {
    var fase = `Seleccione una opcion
        S: suma
        R: resta
        M: multiplicar
        D: dividir
        X: Para Salir`


    var ele = prompt(fase);

    switch (ele.toLowerCase()) {
        case 's':
            var num1= parseInt(prompt("Ingrese el primer Numero"));
            var num2= parseInt(prompt("Ingrese el segundo Numero"));

            alert(`La suma de ${num1} + ${num2} es igual a: ${num1+num2}`)
            
            menu();
            break;
        case 'r':
            var num1= parseInt(prompt("Ingrese el primer Numero"));
            var num2= parseInt(prompt("Ingrese el segundo Numero"));

            alert(`La resta de ${num1} - ${num2} es igual a: ${num1-num2}`)
            
            menu();
            break;
        case 'm':
            var num1= parseInt(prompt("Ingrese el primer Numero"));
            var num2= parseInt(prompt("Ingrese el segundo Numero"));

            alert(`La Multiplicacion de ${num1} * ${num2} es igual a: ${num1*num2}`)
            menu();
            break;
        case 'd':
            var num1= parseInt(prompt("Ingrese el primer Numero"));
            var num2= parseInt(prompt("Ingrese el segundo Numero"));

            alert(`La Divicion de ${num1} / ${num2} es igual a: ${num1/num2}`)
            menu();
            break;
        case 'x':
            alert("Gracias por usar la Calculadora");
            break;
    }




}

menu();