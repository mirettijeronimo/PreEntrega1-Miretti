document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("btnContinuacion").addEventListener("click", function() {
        let respuesta = parseInt(document.getElementById("respuestaContinuacion").value);

        if (respuesta === 40) {
            alert("¡Correcto! Has resuelto el ejercicio.");
        } else {
            alert("Incorrecto. Inténtalo de nuevo.");
        }
    });
});
