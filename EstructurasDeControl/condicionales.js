// ************************* CONDICIONALES *************************

 /* IF - ELSE */

let edad = 14;

if (edad > 17) {
    console.log("Eres mayor de Edad");
} else {
    console.log("Eres menor de Edad");
}

if (edad >= 18) {
    console.log("Eres mayor de Edad");
} else {
    console.log("Eres menor de Edad");
}

if (edad < 18) {
    console.log("Eres menor de Edad");
} else {
    console.log("Eres mayor de Edad");
}

if (edad <= 17) {
    console.log("Eres menor de Edad");
} else {
    console.log("Eres mayor de Edad");
} 

/* IF - ELSE IF - ELSE */
/*
    Déjame Dormir - 0hrs - 5hrs
    Buenos dias 6hrs - 11hrs
    Buenas tardes 12hrs - 18hrs
    Buenas noches 19hrs - 23hrs
*/

let hora = 17;
if (hora >= 0 && hora <= 5) {
    console.log("Déjame dormir");
} else if (hora >= 6 && hora <= 11) {
    console.log("Buenos días");
} else if (hora >= 12 && hora <= 18) {
    console.log("Buenas tardes");
} else {
    console.log("Buenas noches");
}

if (hora < 6) {
    console.log("Déjame dormir");
} else if (hora > 5 && hora < 12) {
    console.log("Buenos días");
} else if (hora > 11 && hora < 19) {
    console.log("Buenas tardes");
} else {
    console.log("Buenas noches");
} 

/* OPERADOR TERNARIO (condición) ? verdadero : falsa */
console.log("Operador Ternario");
let eresMayor = (edad >= 18) 
? "Eres mayor de Edad" 
: "Eres menor de Edad";
console.log(eresMayor);//Eres menor de Edad

/* SWITCH - CASE */
/*
    domingo - 0
    lunes - 1
    martes - 2
    miércoles - 3
    jueves - 4
    viernes - 5
    sábado - 6
*/

/* 
let dia = 2;

switch (dia) {
    case 0:
        console.log("Domingo");
        break;
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miércoles");
        break;
    case 4:
        console.log("Jueves");
        break;
    case 5:
        console.log("Viernes");
        break;
    case 6:
        console.log("Sábado");
        break;
    default:
        console.log("El día no existe");
        break;
}
*/
