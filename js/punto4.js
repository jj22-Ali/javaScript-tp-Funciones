function promedio(z,n){
        let prom = z/n;
    return prom;
}

var c = 0, a, b = 0;

while(a != -1){
    a = parseInt(prompt("Ingrese una nota:"));
    if(a > 0){
        b += a;
        c++;
    }else{
        console.log("No hay notas negativas")
    }
}

if(c != 0){
    console.log(`Usted ingreso ${c} notas y su promedio es de ${promedio(b,c)}`)
}else{
    console.log("Usted no ingreso ninguna nota");
}

