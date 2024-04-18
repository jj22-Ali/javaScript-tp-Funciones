function diasMesAño(a,m,d){
    if(m === 2 && a % 4 == 0 % a % 100 != 0 || a % 400 == 0){
        console.log(`Es el mes de Febrero y le quedan ${29 - d} dias del año ${a}`)
    }
   
    if(m === 1){
        console.log(`Es el mes de Enero y le quedan ${31 - d} dias del año ${a}`)
    }else if(m === 2){
        console.log(`Es el mes de Febrero y le quedan ${28 - d} dias del año ${a}`)
    }else if(m === 3){
        console.log(`Es el mes de Marzo y le quedan ${31 - d} dias del año ${a}`)
    }else if(m === 4){
        console.log(`Es el mes de Abril y le quedan ${30 - d} dias del año ${a}`)
    }else if(m === 5){
        console.log(`Es el mes de Mayo y le quedan ${31 - d} dias del año ${a}`)
     }else if(m === 6){
        console.log(`Es el mes de Junio y le quedan ${30 - d} dias del año ${a}`)
    }else if(m === 7){
        console.log(`Es el mes de Julio y le quedan ${31 - d} dias del año ${a}`)
    }else if(m === 8){
        console.log(`Es el mes de agosto y le quedan ${31 - d} dias del año ${a}`)
    }else if(m === 9){
        console.log(`Es el mes de Septiembre y le quedan ${30 - d} dias del año ${a}`)
    }else if(m === 10){
        console.log(`Es el mes de Octubre y le quedan ${31 - d} dias del año ${a}`)
    }else if(m === 11){
        console.log(`Es el mes de Noviembre y le quedan ${30 - d} dias del año ${a}`)
    }else if(m === 12){
        console.log(`Es el mes de Diciembre y le quedan ${31 - d} dias del año ${a}`)

    }

}


while(true){
    var z = parseInt(prompt("Ingrese el dia:"))
    var x = parseInt(prompt("Ingrese el numero del mes: "))
    var v = parseInt(prompt("Ingrese el año:"))
    if(x >= 1 && x <= 12 && z >= 1 && z <=31 && v>=1 && v<= 2024){
        diasMesAño(v,x,z);
        break;
    }else{
        console.log("Ese numero de dia/mes/año no existe.")
    }
}
