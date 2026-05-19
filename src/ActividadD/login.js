console.log("=== Inicio de un sistema de login ===");

// Credenciales fijas en el sistema
const nombreUsuario = "admin";
const contraseñaUsuario = "1234";

// Captura de datos del usuario
let nombre = prompt("Ingrese su nombre de usuario: ");
let contraseña = prompt("Ingrese su contraseña: ");

// USO DE CONDICIONALES Y OPERADORES LÓGICOS:
//   - Usamos if para evaluar una condición obligatoria.
//   - Usamos el operador "&&" porque se necesita que 
//     ambas condiciones sean verdaderas al mismo tiempo (usuario correcto Y contraseña correcta)
//   - Si una de las dos falla, el if se vuelve falso.

if (nombre === nombreUsuario && contraseña === contraseñaUsuario) {
    // Bloque que se ejecuta SOLO si el usuario y la contraseña coinciden
    console.log("¡Hola de nuevo " + nombreUsuario + "! accediendo...");
} else {
    // else actua como un "si no". Se ejecuta si el if no se cumplio
    console.log("Lo siento, acceso denegado.");
}

console.log("=== Fin de un sistema de login ===");