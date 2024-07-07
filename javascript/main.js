

function introduccion() {
    alert("Hola, esta es una aventura de Mario donde resolverás ejercicios matemáticos para ayudarlo a rescatar a la princesa.");
}

function solicitarNombre() {
    let nombre = prompt("Ingrese su nombre para empezar la aventura");
    alert("¡Hola " + nombre + "! Bienvenido a la aventura.");
}

function mostrar() {
    alert("¡Felicitaciones! Has pasado el primer nivel.");
}

function mostrarDos() {
    alert("Ahora vamos a resolver algo un poco más complejo: Selecciona la opción correcta.");
}

function mostrarTres() {
    alert("¿Siguiente ejercicio?");
}

function elegirOpcionCorrecta(pregunta, respuestaCorrecta) {
    let volverAIntentarlo = true;

    do {
        let respuesta = prompt(pregunta).toUpperCase();
        if (respuesta === respuestaCorrecta) {
            alert("¡Felicitaciones! " + respuesta + " es la opción correcta.");
            volverAIntentarlo = false;
        } else {
            alert("Respuesta incorrecta. Vuelve a intentarlo.");
        }
    } while (volverAIntentarlo);
}

const resultados = [
    { opciones: "A", resultado: "-6" },
    { opciones: "B", resultado: "6" },
    { opciones: "C", resultado: "1" },
    { opciones: "D", resultado: "-1" }
];

const resultadosDos = [
    { opcionesDos: "A", resultadoDos: "60" },
    { opcionesDos: "B", resultadoDos: "80" },
    { opcionesDos: "C", resultadoDos: "90" },
    { opcionesDos: "D", resultadoDos: "100" }
];

function mostrarOpciones() {
    const ejerciciosOrdenados = resultados.map(resultado => resultado.opciones + ") " + resultado.resultado);
    alert("¿Cuál es el resultado de: -2 · 3 : (-6)=..?\n" + ejerciciosOrdenados.join("\n"));
    elegirOpcionCorrecta("Ingrese la respuesta correcta (A, B, C, D)", "C");
    mostrarTres();
    mostrarOpcionesDos();
}

function mostrarOpcionesDos() {
    const ejerciciosOrdenadosDos = resultadosDos.map(resultado => resultado.opcionesDos + ") " + resultado.resultadoDos);
    alert("El mínimo común múltiplo de 20 y 30 es...\n" + ejerciciosOrdenadosDos.join("\n"));
    elegirOpcionCorrecta("Ingrese la respuesta correcta (A, B, C, D)", "A");
}


let boton = document.getElementById("btnPrincipal");
boton.addEventListener("click", function() {
    introduccion();
    solicitarNombre();
    alert("Vamos a resolver esta suma 5 + 5 = ?");
    elegirOpcionCorrecta("Ingrese la respuesta correcta ", "10");
    mostrar();
    mostrarDos();
    mostrarOpciones();
});
