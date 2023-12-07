// ************************* ITERABLES & ITERATORS *************************

// Iterable es el elemento, el cual su contenido se puede recorrer.
// Iterador es el mecanismo que recorre ese elemento.

const iterable = [1, 2, 3, 4, 5];
//const iterable = "Hola Mundo";
//const iterable = new Set([1, 2, 3, 3, 4, 5]);
//const iterable = new Map([["nombre", "jon"], ["edad", 35]]);

// Accedemos al iterador del iterable
const iterador = iterable[Symbol.iterator]();

console.log(iterable);//[1, 2, 3, 4, 5]
console.log(iterador);// {[Iterator]}

//console.log(iterador.next());// {value: 1, done: false}
//console.log(iterador.next());// {value: 2, done: false}
//console.log(iterador.next());// {value: 3, done: false}
//console.log(iterador.next());// {value: 4, done: false}
//console.log(iterador.next());// {value: 5, done: false}
//console.log(iterador.next());// {value: undefined, done: true}

let next = iterador.next();

while (!next.done) {
    console.log(next.value);// 1, 2, 3, 4, 5
    next = iterador.next();
}
