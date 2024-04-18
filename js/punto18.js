function diasMesAño(a,m,d){
    if(m === 2 && a % 4 == 0 % a % 100 != 0 || a % 400 == 0){
        console.log(`El ultimo dia es 31 de `)
    }
   
    if(m === 1){
        console.log(`El ultimo dia es 31 de enero`)
    }else if(m === 2){
        console.log(`El ultimo dia es 28 de febrero`)
    }else if(m === 3){
        console.log(`El ultimo dia es 31 de marzo`)
    }else if(m === 4){
        console.log(`El ultimo dia es 30 de abril`)
    }else if(m === 5){
        console.log(`El ultimo dia es 31 de mayo`)
     }else if(m === 6){
        console.log(`El ultimo dia es 30 de junio`)
    }else if(m === 7){
        console.log(`El ultimo dia es 31 de julio`)
    }else if(m === 8){
        console.log(`El ultimo dia es 31 de agosto`)
    }else if(m === 9){
        console.log(`El ultimo dia es 30 de septiembre`)
    }else if(m === 10){
        console.log(`El ultimo dia es 31 de octubre`)
    }else if(m === 11){
        console.log(`El ultimo dia es 30 de noviembre`)
    }else if(m === 12){
        console.log(`El ultimo dia es 31 de diciembre`)

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