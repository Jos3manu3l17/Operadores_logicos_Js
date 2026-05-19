console.log("===== Inicio del sistema de un menu de opciones =====");

const cajero = parseInt(prompt(
`=== Bienvenido al cajero automático ===
Elije una opción (1 - 4):  
1. Consultar saldo
2. Retirar dinero  
3. Depositar dinero 
4. Salir`
));
        
// Uso de la condicional switch:
//   - Se usa 'switch' cuando voy a evaluar el valor exacto de una sola variable (cajero).
//   - Es ideal para menus de opciones puntuales.

switch (cajero) {
    case 1:
        // Si 'cajero' vale 1, ejecuta esto
        console.log("Perfecto, puedes consultar tu saldo");
        break; 

    case 2:
        // Si 'cajero' vale 2, ejecuta este bloque
        let retirar = prompt("¿Deseas retirar tu dinero? (si / no): ").toLowerCase().trim();
        
        // Puedo meter condicionales 'if' dentro de un 'case' que serian condicionales anidados
        if (retirar === "si") {
            console.log("¡Perfecto! retirando dinero...");
        } else {
            console.log("Vuelve pronto.");
        }
        break;

    case 3:
        console.log("Depositando dinero...");
        break;

    case 4:
        let salir = prompt("¿Desea salir? (si / no): ").toLowerCase().trim();
        
        if (salir === "si") {
            console.log("Saliendo...");
        } else {
            console.log("Puedes continuar en el cajero.");
        }
        break;

    default:
        console.log("Opción no registrada.");
        break;
}

console.log("=== Fin del sistema de un menu de opciones ===");