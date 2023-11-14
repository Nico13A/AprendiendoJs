// ************************* ARROW FUNCTIONS *************************

//Función expresada (cuando a una variable le asignas el valor de una función anónima)
const saludar = function () {
    console.log("Hola");
}
saludar();//Hola
/*
OBS. Al no ser una función declarada, ejemplo function saludar(), si pongo o invoco el 
saludar() antes del const saludar me larga un error.
*/

const saludar2 = () => console.log("Hola");
saludar2();//"Hola"

const saludarConNombre = nombre => console.log(`Hola ${nombre}`);
saludarConNombre("Nicolas")//"Hola Nicolas"

/*
const sumar = function(a, b) {
    return a + b;
}
*/

const sumar = (a, b) => a + b;

console.log(sumar(9, 9));//18

const funcionDeVariasLineas = () => {
    console.log("Uno");
    console.log("Dos");
    console.log("Tres");
}

funcionDeVariasLineas();// Uno Dos Tres

const numeros = [1, 2, 3, 4, 5];

numeros.forEach((el, index) => console.log(`${el} esta en la posición ${index}`));
/*
    1 esta en la posición 0
    2 esta en la posición 1
    3 esta en la posición 2
    4 esta en la posición 3
    5 esta en la posición 4
*/


const perro = {
    nombre: "kenai",
    ladrar() {
        console.log(this);
    }
}

perro.ladrar();// {nombre: 'kenai', ladrar: f}
/*
No se recomienda usar funciones flechas en los métodos.
ladrar: () => {
    console.log(this);
}
*/