function doble(x){
    return 2 * x;
}
function cuadrado(x){
    return x * x;
}

function imprimirValores(p){

    console.log(`El valor ${p}, su doble es ${doble(p)} y cuadrado es de ${cuadrado(p)} `)

}

var g = parseInt(prompt("Ingrese cualquier valor: "));
imprimirValores(g)