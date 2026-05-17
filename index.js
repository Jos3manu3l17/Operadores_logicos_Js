console.log("=== Inicio del sistema de temperatura en una ciudad ===");

let temperatura = prompt("Ingrese la temperatura actual: ");

if (temperatura >= 30) {
    console.log("Hace calor");
} else {
    console.log("Clima agradable");
}

console.log("=== Fin del sistema de temperatura en una ciudad ===");


console.log("=== Inicio del sistema de calculo de velocidad ===");

let velocidad = prompt("Ingrese la velocidad del vehiculo: ");

if (velocidad < 30) {
    console.log("Muy lento");
} 
else if (velocidad >= 30 && velocidad <= 60) {
    console.log("Velocidad moderada");
}
else if (velocidad > 60 && velocidad <= 100) {
    console.log("Rapido");
}
else {
    console.log("Muy rapido");
}

console.log("=== Fin del sistema de calculo de velocidad ===");




console.log("===Inicio del sistema de clasificar mes del año ===");

let mes = prompt("Ingrese el numero del mes que desea ver (1 - 12): ");
mes = Number(mes);

switch (mes) {
    case 1:
        console.log("Enero") ;
        break;

    case 2:
        console.log("Febrero")
        break;

        case 3:
            console.log("Marzo") ;
            break;

            case 4:
                console.log("Abril") ;
                break;

                case 5:
                    console.log("Mayo"); 
                    break;

                    case 6:
                        console.log("Junio");
                        break;

                        case 7:
                            console.log("Julio") ;
                            break;

                            case 8:
                                console.log("Agosto");
                                break;

                                case 9:
                                    console.log("Septiembre");
                                    break;

                                    case 10:
                                        console.log("Octubre");
                                        break;

                                        case 11: 
                                            console.log("Noviembre");
                                            break;

                                            case 12:
                                                console.log("Diciembre");
                                                break;

                                                default:
                                                    console.log("Lo siento, mes no encontrado");
                                                    break;
    
}

console.log("=== Fin del sistema de clasificar mes del año ===");
