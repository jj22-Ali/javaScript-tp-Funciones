function doble(x){
    return 2 * x;
}
function cuadrado(x){
    return x * x;
}

function imprimirElDobleDelSiguente(z){

    console.log(`El doble del siguiente del doble es ${(doble(z) + 1) * 2} y el doble del siguiente al cuadrado es: ${(cuadrado(z) + 1) * 2}`)
}

var a = parseInt(prompt("Ingrese un numero: "))
console.log(`El doble ${doble(a)}`)
console.log(`El cuadrado ${cuadrado(a)}`)

imprimirElDobleDelSiguente(a);