// ************************* OBJETO CONSOLE *************************

console.log(console);//Así vemos las caracteristicas de console.
console.error("Esto es un error");//Así modifico el mensaje error.
console.warn("Esto es un aviso");
console.info("Esto es un mensje informativo");
console.log("Un registro de lo que ha pasado en nuestra aplicación");


let nombre = "Jon",
    apellido = "MirCha",
    edad = 35;

console.log(nombre);//Jon
console.log(apellido);//MirCha
console.log(edad);//35
console.log(nombre, apellido, edad);//Jon MirCha 35
console.log(`Hola mi nombre es ${nombre} ${apellido} y tengo ${edad} años.`);
//Hola mi nombre es Jon MirCha y tengo 35 años.
console.log(`Hola mi nombre es %s %s y tengo %d años.`, nombre, apellido, edad);
//Hola mi nombre es Jon MirCha y tengo 35 años.
console.clear();//Limpia la consola.

//console.log(window); Me muestra todas las propiedades de la ventana.
//console.log(document); Me muestra el html completo.
//console.dir(window);
//console.dir(document);//Me muestra todas las propiedades del objeto documento.
console.clear();

console.group("Cursos de @jonmircha en YouTube");//Forma de agrupar datos en consola.
console.log("Curso de JavaScript");
console.log("Curso de Node.js");
console.log("Curso de PWAs");
console.log("Curso de Flexbox");
console.log("Curso de Diseño y Programación Web");
console.groupEnd();//Acá termina el agrupamiento.

console.groupCollapsed("Cursos de @jonmircha en YouTube");
console.log("Curso de JavaScript");
console.log("Curso de Node.js");
console.log("Curso de PWAs");
console.log("Curso de Flexbox");
console.log("Curso de Diseño y Programación Web");
console.groupEnd();

console.clear();

console.log(console);
console.table(Object.entries(console).sort());//Me muestra en forma de tabla las props de console.

const numeros = [1, 2, 3, 4, 5],
    vocales = ["a", "e", "i", "o", "u"];

console.table(numeros);
console.table(vocales);

const perro = {
    nombre: "Boni",
    raza: "Boxer",
    color: "cafe"
}

console.table(perro);
console.clear();

//Para medir el tiempo de cuanto tarda mi código en ejecutarse.
console.time('Cuanto tiempo tarda mi código');
const arreglo = Array(1000000);

for (let i = 0; i < arreglo.length; i++) {
    arreglo[i] = i;
}

console.timeEnd('Cuanto tiempo tarda mi código');//Acá termina el tiempo, debo usar lo 
//mismo en console.time y console.timeEnd.

console.clear();


for (let i = 0; i <= 100; i++) {
    console.count("código for");//Me dice cuantas veces se ejecuto el ciclo.
    console.log(i);
}

console.clear();

let x = 3,
    y = 2,
    pruebaXY = "Se espera que X siempre sea menor que Y";
    
console.assert(x < y, { x, y, pruebaXY });//Assertion failed:
//Se espera que X siempre sea menor que Y



