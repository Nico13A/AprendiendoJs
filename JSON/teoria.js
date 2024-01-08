// ************************* JSON *************************

/*
JavaScript Object Notation o Notación de Objetos de JavaScript, 
es un formato ligero de intercambio de datos.
*/

const json = {
    cadena: "Jon",
    numero: 35,
    booleano: true,
    arreglo: ["correr", "programar", "cocinar"],
    objeto: {
        twitter: "@jonmircha",
        email: "jonmircha@gmail.com"
    },
    nulo: null
}

console.log(json);
/*
{
    cadena: 'Jon',
    numero: 35,
    booleano: true,
    arreglo: [ 'correr', 'programar', 'cocinar' ],
    objeto: { twitter: '@jonmircha', email: 'jonmircha@gmail.com' },
    nulo: null
}
*/

console.log(JSON);

console.log("*** JSON.parse ***");
// Analiza una notación JSON y la convierte en un tipo de dato JS.
console.log(JSON.parse("{}"));// Devuelve las llaves como un objeto.
console.log(JSON.parse("[1,2,3]"));// Devuelve un arreglo.
console.log(JSON.parse("true"));// true
console.log(JSON.parse("false"));
console.log(JSON.parse("19"));
console.log(JSON.parse('"Hola Mundo"'));
console.log(JSON.parse("null"));
//console.log(JSON.parse("undefined"));
console.log(JSON.parse('{ "x": 2, "y": 3 }'));

console.log("*** JSON.stringify ***");
// Convierte un tipo de dato JS a notación JSON.
console.log(JSON.stringify({}));// "{}"
console.log(JSON.stringify([1, 2, 3]));// "[1, 2, 3]"
console.log(JSON.stringify(true));// "true"
console.log(JSON.stringify(false));
console.log(JSON.stringify(19));
console.log(JSON.stringify("Hola Mundo"));
console.log(JSON.stringify(null));
console.log(JSON.stringify(undefined));
console.log(JSON.stringify({ x: 2, y: 3 }));

console.log("*** Ejemplo JSON ***");
console.log(JSON.stringify(json));// Devuelve una notación JSON.
console.log(JSON.parse('{"cadena": "Jon","numero": 35, "booleano": true,"arreglo": ["correr","programar","cocinar"],"objeto": {"twitter": "@jonmircha","email": "jonmircha@gmail.com"},"nulo": null}'));// Devuelve un objeto.

