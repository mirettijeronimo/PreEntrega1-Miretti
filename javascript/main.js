let puntos = 0;
let vidas = 3;
let nombre = '';


function solicitarNombre() {
    nombre = prompt("Ingrese su nombre para empezar la aventura");
    alert("¡Hola " + nombre + "! Bienvenido a la aventura.");
}

function mostrarMensajeBienvenida() {
    document.getElementById('mensajeBienvenida').innerHTML = ``;}

function mostrar() {
    alert("¡Felicitaciones! Has pasado el primer nivel.");
}

function mostrarDos() {
    alert("Ahora vamos a resolver algo un poco más complejo: Selecciona la opción correcta.");
}

function mostrarTres() {
    alert("¿Siguiente ejercicio?");
}

function drawScore() {
    document.getElementById('puntosActuales').innerText = 'Puntos actuales: ' + puntos;
}

function drawVidas() {
    document.getElementById('vidasRestantes').innerText = 'Vidas restantes: ' + vidas;
}

function reiniciarJuego() {
    puntos = 0;
    vidas = 3;
    drawScore();
    drawVidas();
    document.getElementById('resultadoFinal').innerText = '';
    alert("El juego se reiniciará ahora.");
    iniciarJuego();
}

function elegirOpcionCorrecta(pregunta, respuestaCorrecta) {
    let volverAIntentarlo = true;

    do {
        let respuesta = prompt(pregunta).toUpperCase();
        if (respuesta === respuestaCorrecta) {
            alert("¡Felicitaciones! " + respuesta + " es la opción correcta.");
            volverAIntentarlo = false;
            puntos++;
        } else {
            alert("Respuesta incorrecta. Vuelve a intentarlo.");
            vidas--;
            drawVidas();
            if (vidas <= 0) {
                alert("Game Over! Se han agotado todas las vidas.");
                reiniciarJuego();
                return; // Salir de la función si se acaban las vidas
            }
        }
    } while (volverAIntentarlo);

    drawScore();
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
    mostrarResultadosFinales();
    mostrarAcertijo();
}

function mostrarResultadosFinales() {
    document.getElementById('resultadoFinal').innerText = 'Puntuación final: ' + puntos + ', Vidas restantes: ' + vidas;
}
// Guardar el nombre del jugador
function guardarNombreJugador(nombre) {
    localStorage.setItem('nombreJugador', nombre);
}

// Guardar el número de vidas restantes
function guardarVidasRestantes(vidas) {
    localStorage.setItem('vidasRestantes', vidas);
}

// Obtener el nombre del jugador
function obtenerNombreJugador() {
    return localStorage.getItem('nombreJugador');
}

// Obtener el número de vidas restantes
function obtenerVidasRestantes() {
    return parseInt(localStorage.getItem('vidasRestantes'));
}


function iniciarJuego() {
    mostrarMensajeBienvenida()
    solicitarNombre();
    alert("Vamos a resolver esta suma 5 + 5 = ?");
    elegirOpcionCorrecta("Ingrese la respuesta correcta", "10");
    mostrar();
    mostrarDos();
    mostrarOpciones();
    guardarNombreJugador(nombre); 
    guardarVidasRestantes(vidas); 
}

function mostrarAcertijo() {
    window.location.href = "acertijo.html";
}

document.getElementById("btnPrincipal").addEventListener("click", function() {
    iniciarJuego();
});

console.log(nombre, obtenerNombreJugador());
console.log(vidas, obtenerVidasRestantes());





