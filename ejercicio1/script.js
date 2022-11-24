dias();

function dias(){
    var salir = true;


    do{
        let clima = prompt("¿Como esta el día?")
        if(clima.toLocaleLowerCase() == "soleado" || clima.toLocaleLowerCase() == "nublado" || clima.toLocaleLowerCase() == "lloviendo"){
            alert("El Clima esta: "+ clima.charAt(0).toUpperCase() + clima.slice(1).toLocaleLowerCase());
            
            salir =false;
    
        }else{alert("El clima ingresado no es valido\nTiene que ingresar 'Soleado, Nublado o lloviendo'")}
    
    }while(salir)
}