function calcularSuperficie(l){
    let area = l * l;
    return area;
}

var x = parseInt(prompt("Ingrese la longitud del lado del cuadrado: "));
console.log(`La superficie del cuadrado es de ${calcularSuperficie(x)} cm^2`)   