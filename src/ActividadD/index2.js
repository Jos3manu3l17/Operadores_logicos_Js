console.log("=== Inicio de un sistema de login ===");

// 1. Acceso a un sistema
// Un sistema debe permitir el acceso a un usuario si cumple estas condiciones:

// El nombre de usuario es "admin".
// La contraseña es "1234".

// Si no cumple las dos condiciones, debe mostrar "Acceso denegado".


const nombreUsuario = "admin";
const contraseñaUsuario = "1234";

let nombre = prompt("Ingrese su nombre de usuario: ");
let contraseña = prompt("Ingrese su contraseña: ");

if (nombre === nombreUsuario && contraseña === contraseñaUsuario) {
    console.log("¡Hola de nuevo " + nombreUsuario + "! accediendo...");
} else {
    console.log("Lo siento, acceso denegado.");
}

console.log("=== Fin de un sistema de login ===");

// ===========================================================================

console.log("=== Inicio del sistema de entradas a cine ===");

// 2. Calcular precio de entradas al cine

// Un cine aplica las siguientes reglas:
// Si el cliente tiene menos de 12 años, el valor de la entrada es 5000.
// Si tiene entre 12 y 18 años, el valor es 8000.
// Si es mayor de 18, el valor es 10000.

// Si el cliente es estudiante (condición adicional), se le aplica un descuento del 20%
// al valor de la entrada.

let edad = parseInt(prompt("Para el ingreso al cine, por favor ingrese su edad: "));
let estudiante = prompt("¿Es estudiante? (si / no): ") .toLowerCase().trim();
let precio;

if (edad <= 12) {
    precio = 5000;
}
else if (edad > 12 && edad <= 18) {
    precio = 8000;
}
else {
    precio = 10000;
}

if (estudiante === "si") {
    precio = precio * 0.8;
}

console.log("El valor de tu entrada a cine es: $" + precio);

console.log("=== Fin del sistema de entradas a cine ===");

// ====================================================================================



