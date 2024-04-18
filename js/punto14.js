function diasMes(a){
    if(a === 1){
        console.log("El mes de Enero tiene 31 días")
    }else if(a === 2){
        console.log("El mes de Febrero tiene 28 días")
    }else if(a === 3){
        console.log("El mes de Marzo tiene 31 días")
    }else if(a === 4){
        console.log("El mes de Abril tiene 30 días")
    }else if(a === 5){
        console.log("El mes de Mayo tiene 31 días")
    }else if(a === 6){
        console.log("El mes de Junio tiene 30 días")
    }else if(a === 7){
        console.log("El mes de Julio tiene 31 días")
    }else if(a === 8){
        console.log("El mes de Agosto tiene 31 días")
    }else if(a === 9){
        console.log("El mes de Septiembre tiene 30 días")
    }else if(a === 10){
        console.log("El mes de Octubre tiene 31 días")
    }else if(a === 11){
        console.log("El mes de Noviembre tiene 30 días")
    }else if(a === 12){
        console.log("El mes de Diciembre tiene 31 días")
    }
   
}


while(true){
    var x = parseInt(prompt("Ingrese el numero del mes y te dire cuanto dias tiene dicho mes: "))
    if(x >= 1 && x <= 12){
        diasMes(x);
        break;
    }else{
        console.log("Ese numero de mes no existe.")
    }
}



