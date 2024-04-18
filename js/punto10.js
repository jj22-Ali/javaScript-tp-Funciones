function calcularPerimetro(l){
    let perimetro = l * 4;
    return perimetro;
}

var x = parseInt(prompt("Ingrese la longitud del lado del cuadrado: "));
console.log(`El perimetro del cuadrado es de ${calcularPerimetro(x)} cm`)   