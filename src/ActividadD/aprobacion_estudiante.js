console.log("===== Inicio del sistema de aprobacion de estudiante =====");

let nota = 70;
let asistencia = 65;

// Operadores logicos de control:
//   - nota >= 60 devuelve verdadero o falso.
//   - asistencia >= 80 devuelve verdadero o falso.
//   - El condicional if evalúa el resultado de ambas usando &&.
//   - Para aprobar, se exige el cumplimiento del 100% de las condiciones. Con una que falle, va directo al else

if (nota >= 60 && asistencia >= 80) {
    // Solo si tiene buena nota Y buena asistencia
    console.log("Estudiante aprobado");
}
else {
    // Se ejecuta si le falto nota, le falto asistencia, o le faltaron amba.
    console.log("Estudiante reprobado");
}

console.log("===== Fin del sistema de aprobacion de estudiante =====");