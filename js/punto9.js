function doble(x){
    return 2 * x;
}
function cuadrado(x){
    return x * x;
}

function imprimirElDobleDelSiguenteAlCuadrado(z){

    console.log(`El cuadrado del siguiente del doble es ${((doble(z) + 1) * (doble(z) + 1))} y el cuadrado del siguiente al cuadrado es: ${((cuadrado(z) + 1) * (cuadrado(z) + 1))}`)
}

var a = parseInt(prompt("Ingrese un numero: "))
console.log(`El doble ${doble(a)}`)
console.log(`El cuadrado ${cuadrado(a)}`)

imprimirElDobleDelSiguenteAlCuadrado(a);