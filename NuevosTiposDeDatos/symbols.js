// ************************* SYMBOLS *************************

//Se usan por lo general para crear propiedades privadas dentro de un objeto.

/*
let id = "hola";
let id2 = "hola";

console.log(id === id2); true
*/

let id = Symbol("id");
let id2 = Symbol("id2");

console.log(id === id2);//false
console.log(id, id2);//Symbol(id) Symbol(id2)
console.log(typeof id, typeof id2);//symbol symbol

const NOMBRE = Symbol("nombre");
const SALUDAR = Symbol("saludar");

const persona = {
    [NOMBRE]: "Jon",
    edad: 35
};

console.log(persona);//{edad: 35, [Symbol(nombre)]: "Jon"}

persona.NOMBRE = "Jonathan MirCha"
console.log(persona);//{edad: 35, NOMBRE: "Jonathan MirCha", [Symbol(nombre)]: "Jon"}
console.log(persona.NOMBRE);//Jonathan MirCha
console.log(persona[NOMBRE]);//Jon

persona[SALUDAR] = function () {
    console.log(`Hola`);
}

console.log(persona);// {edad: 35, NOMBRE: "Jonathan MirCha", [Symbol(nombre)]: "Jon", [Symbol(saludar)]: f}
persona[SALUDAR]();//Hola


for (let propiedad in persona) {
    console.log(propiedad);// "edad", "NOMBRE"
    console.log(persona[propiedad]);// 35, "Jonathan MirCha"
}

console.log(Object.getOwnPropertySymbols(persona));// [Symbol(nombre), Symbol(saludar)]
