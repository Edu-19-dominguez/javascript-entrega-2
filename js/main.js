let seguir = true;

while (seguir) {
    const entrada = prompt("Ingresa tu nota (1 al 10):");
    const nota = parseFloat(entrada);


    if (isNaN(nota) || nota < 1 || nota > 10) {
        alert("Nota inválida.");
        console.log("Error: nota fuera de rango.");
    } else {
        
        let estado = "";
        if (nota >= 7) {
            estado = "PROMOCIONADO";
        } else if (nota >= 4) {
            estado = "APROBADO";
        } else {
            estado = "DESAPROBADO";
        }

        switch (estado) {
            case "PROMOCIONADO":
                alert("Promocionado con " + nota);
                console.log("Resultado: Promocionado");
                break;

            case "APROBADO":
                alert("Aprobado con " + nota);
                console.log("Resultado: Aprobado");
                break;

            case "DESAPROBADO":
                alert("Desaprobado con " + nota);
                console.log("Resultado: Desaprobado");
                break;
        }
    }

    const resp = prompt("¿Probar otra nota? (si/no)");
    if (resp === null || resp.toLowerCase() !== "si") {
        seguir = false;
        alert("¡Hasta la próxima!");
    }
}