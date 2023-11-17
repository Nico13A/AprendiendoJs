// ************************* MÓDULOS (IMPORT / EXPORT) *************************

export const PI = Math.PI;

export let usuario = "Jon";

const password = "qwerty";
//export default password;
//OBS. Asi puedo exportar por default una constante o let, no puedo exportarla como lo haria
//en una función o una clase.
const hello = () => console.log("Hola");

export default function saludar() {
    console.log("Hola Módulos +ES6");
}

export class Saludar {
    constructor() {
        console.log("Hola Clases +ES6");
    }
}