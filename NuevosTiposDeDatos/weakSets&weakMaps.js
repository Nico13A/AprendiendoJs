// ************************* WEAK SETS & WEAK MAPS *************************

//const ws = new WeakSet([1, 2, 3, 3, 4, 5, true, false, false, {}, {}, "hola", "HOla"]); Invalid.

const ws = new WeakSet();//Esto solo aceptan referencias débiles, es decir, objetos.

let valor1 = { "valor1": 1 };
let valor2 = { "valor2": 2 };
let valor3 = { "valor3": 3 };

ws.add(valor1);
ws.add(valor2);

console.log(ws); // WeakSet {{...}, {...}}

console.log(ws.has(valor1));// true
console.log(ws.has(valor3));// false

ws.delete(valor2);
console.log(ws);// WeakSet {{...}}

ws.add(valor2);
ws.add(valor3);
console.log(ws); // WeakSet {{...}, {...}, {...}}

/*
setInterval(() => console.log(ws), 1000);

setTimeout(() => {
    valor1 = null;
    valor2 = null;
    valor3 = null;
}, 5000); 
*/




/*
const wm = new WeakMap([
    ["nombre", "kEnAi"],
    ["edad", 7],
    ["animal", "perro"],
    [null, "nulo"]
]);
Invalid
*/

const wm = new WeakMap();
let llave1 = {};
let llave2 = {};
let llave3 = {};

wm.set(llave1, 1);
wm.set(llave2, 2);

console.log(wm);// WeakMap { {...} => 1, {...} => 2 }

console.log(wm.has(llave1));// true
console.log(wm.has(llave3));// false

console.log(wm.get(llave1));// 1
console.log(wm.get(llave2));// 2
console.log(wm.get(llave3));// undefined

wm.delete(llave2);
console.log(wm);// WeakMap { {...} => 1 }

wm.set(llave2, 2)
wm.set(llave3, 3)
console.log(wm);// WeakMap { {...} => 1, {...} => 2, {...} => 3 }

/*
setInterval(() => console.log(wm), 1000);

setTimeout(() => {
    llave1 = null;
    llave2 = null;
    llave3 = null;
}, 5000); 
*/