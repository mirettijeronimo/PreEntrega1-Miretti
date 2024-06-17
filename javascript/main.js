
function introduccion(){
    alert("Hola esta es una aventura de Mario que tendras que resolver ejercicios matematicos para poder ayudar a mario a rescatar a la princesa");
}
function solicitarNombre(){
    let nombre = prompt("ingrese su nombre para empezar la aventura");
    alert (" Hola " + nombre+ " bienvenido a la aventura ")
}

function mostrar(){
    alert("Felicitaciones has pasado el primer nivel.")
}

introduccion();
solicitarNombre();

alert("Vamos a resolver esta suma 5+5 es igual a...")

let resultado = 10;
let askAgain = true;
do{
    let resultado = parseInt(prompt("Ingresar reslutado:"))
    if( resultado == 10){
        alert("El resultado es correcto...")
        askAgain=false;
    }else{
        alert(  "El resultado: " + resultado + " ,es incorrecto. Volvamos a intentarlo..")
    }
}while(askAgain);
    
mostrar()
