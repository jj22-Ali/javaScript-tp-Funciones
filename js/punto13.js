function calcularAreaDelCirulo(r){
    let area= Math.round((r*r)*(Math.PI));
    return area;
}

var x = parseInt(prompt("Ingrese el radio del circulo: "));
console.log(`El area del circulo es de ${calcularAreaDelCirulo(x)} cm^2`)   