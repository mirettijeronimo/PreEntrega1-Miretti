document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("btnPrincipalDos").addEventListener("click", function() {
        // Obtener valores de los inputs
        let input1 = parseInt(document.getElementById("input1").value);
        let input2 = parseInt(document.getElementById("input2").value);
        let input3 = parseInt(document.getElementById("input3").value);
        let input4 = parseInt(document.getElementById("input4").value);
        let resultInput = parseInt(document.getElementById("input5").value);
        let resultInput2 = parseInt(document.getElementById("input6").value);
        let resultInput3 = parseInt(document.getElementById("input7").value);

        // Comprobar si los valores son correctos
        if (input1 === 9 && input2 === 9 && input3 === 9 && input4 === 9 && resultInput === 1 && resultInput2 === 0 && resultInput3 === 0) {
            alert("¡Correcto! Has resuelto el acertijo.");
            document.getElementById("btnContinuar").style.display = "block";
        } else {
            alert("Incorrecto. Inténtalo de nuevo.");
        }
    });

    document.getElementById("btnContinuar").addEventListener("click", function() {
        window.location.href = "continuacion.html";
    });
});

