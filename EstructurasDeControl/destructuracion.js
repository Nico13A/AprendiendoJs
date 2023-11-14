// ************************* DESTRUCTURACIÓN *************************
const numeros = [1, 2, 3];

//Sin destructuración
let uno = numeros[0];
let dos = numeros[1];
let tres = numeros[2];

console.log(uno, dos, tres);//1 2 3

//Con destructuración
const [one, two, three] = numeros;
console.log(one, two, three);//1 2 3

const persona = {
    nombre: "Jon",
    apellido: "MirCha",
    edad: 35
};

let { nombre, edad, apellido } = persona;
console.log(nombre, apellido, edad);// Jon MirCha 35