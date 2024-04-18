function bisOno(a){
    if(a % 4 == 0 % a % 100 != 0 || a % 400 == 0){
        console.log("año bisciesto")
    }else{
        console.log("año no bisciesto")
    }
}

var año = parseInt(prompt("Ingrese cualquier años para saber si es bisciesto o no: "))
bisOno(año)