console.log("=== Inicio del sistema de clasificacion de numeros ===");

let numero = parseFloat(prompt("Ingrese un numero para verificar si es positivo o negativo: "));

// Uso de condicionales para exclusion mutua:
//   - Un numero no puede ser positivo, negativo y cero a la vez. 
//   - Usamos if, else if y else para asegurarnos de que SOLO se ejecute una de las tres opciones.

if (numero > 0) {
    // Se ejecuta si el numero es mayor estrictamente que 0
    console.log("Numero positivo");
}
else if (numero < 0) {
    // Se ejecuta solo si la primera fallo y el numero es menor que 0
    console.log("Numero negativo");
}
else {
    // Si no fue mayor a 0, ni menor a 0, por descarte obligatorio es Cero.
    console.log("Cero");
}

console.log("=== Fin del sistema de clasificacion de numeros ===");