function diasMesAño(a,m,d){
    if(m === 2 && a % 4 == 0 % a % 100 != 0 || a % 400 == 0){
        console.log(`Dia anterior ${d - 1}`)
    }
   
    if(m === 1){
        console.log(`Dia anterior ${d - 1}`)
    }else if(m === 2){
        console.log(`Dia anterior ${d - 1}`)
    }else if(m === 3){
        console.log(`Dia anterior ${d - 1}`)
    }else if(m === 4){
        console.log(`Dia anterior ${d - 1}`)
    }else if(m === 5){
        console.log(`Dia anterior ${d - 1}`)
     }else if(m === 6){
        console.log(`Dia anterior ${d - 1}`)
    }else if(m === 7){
        console.log(`Dia anterior ${d - 1}`)
    }else if(m === 8){
        console.log(`Dia anterior ${d - 1}`)
    }else if(m === 9){
        console.log(`Dia anterior ${d - 1}`)
    }else if(m === 10){
        console.log(`Dia anterior ${d - 1}`)
    }else if(m === 11){
        console.log(`Dia anterior ${d - 1}`)
    }else if(m === 12){
        console.log(`Dia anterior ${d - 1}`)

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
