function veri (ss){
    var letra = prompt("Ingrese un caracter");
    if( letra.toLowerCase() == "s" || letra.toLowerCase() == "n"){
        alert("CORRECTO");
        ss = false;
        return(ss);
    }else{
        alert("INCORRECTO\ndebe ingresar 'S' o 'N'");
        ss = true;
        return(ss)
        
    }
}


do {
    var s = true;
} while (veri(s));
