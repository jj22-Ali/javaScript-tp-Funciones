function calcularPerimetroDelCirulo(r){
    let perimetro = Math.round((2*r*Math.PI));
    return perimetro;
}

var x = parseInt(prompt("Ingrese el radio del circulo: "));
console.log(`El perimetro del circulo es de ${calcularPerimetroDelCirulo(x)} cm`)   