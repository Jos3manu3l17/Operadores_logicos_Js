console.log("=== Inicio del sistema de entradas a cine ===");

let edad = parseInt(prompt("Para el ingreso al cine, por favor ingrese su edad: "));
let estudiante = prompt("¿Es estudiante? (si / no): ").toLowerCase().trim();
let precio;

// Uso de condicionales anidados else if
//   - Se usa else if cuando tengo mas de dos caminos posibles que dependen de la misma variable.
//   - El programa evalúa en orden hacia abajo. En cuanto una condicion es verdadera, 
//     entra a ese bloque y descarta el resto.

if (edad <= 12) {
    // Condicion 1: Menores o iguales a 12 años
    precio = 5000;
}
else if (edad > 12 && edad <= 18) {
    // Condicion 2: Si no cumplio la primera, revisa si esta entre 12 y 18 años
    precio = 8000;
}
else {
    // Camino por defecto: Si no cumplio ninguna de las anteriores 
    precio = 10000;
}

// Condicional independiente:
//   - Este if va aparte porque la condicion de ser estudiante no depende de la edad.
//   - Si es estudiante, entra y modifica el valor de la variable aplicando el 20% de descuento.

if (estudiante === "si") {
    precio = precio * 0.8; 
}

console.log("El valor de tu entrada a cine es: $" + precio);
console.log("=== Fin del sistema de entradas a cine ===");