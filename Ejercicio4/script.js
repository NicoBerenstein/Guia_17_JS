function veri (le){
    if( le == "s" || le == "n"){
        alert("CORRECTO");
    }else{
        alert("INCORRECTO");
    }
}

var letra = prompt("Ingrese un caracter");

veri(letra.toLowerCase());

