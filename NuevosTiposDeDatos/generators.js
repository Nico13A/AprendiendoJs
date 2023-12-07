// ************************* GENERATORS *************************

//OBS. El símbolo *, le indica a js que es un generador.
function* iterable() {
    yield "hola";
    console.log("Hola consola");
    yield "hola 2";
    console.log("Seguimos con más instrucciones de nuestro código");
    yield "hola 3";
    yield "hola 4";
}

let iterador = iterable();
/*console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());*/

//Un generador es convertir una función en iterable.

for (let y of iterador) {
    console.log(y);
}

const arr = [...iterable()];
console.log(arr);//["hola", "hola 2", "hola 3", "hola 4"]


function cuadrado(valor) {
    setTimeout(() => {
        return console.log({ valor, resultado: valor * valor })
    }, Math.random() * 1000);
}

function* generador() {
    console.log("Inicia Generator");
    yield cuadrado(0);
    yield cuadrado(1);
    yield cuadrado(2);
    yield cuadrado(3);
    yield cuadrado(4);
    yield cuadrado(5);
    console.log("Termina Generator");
}

let gen = generador();

for (let y of gen) {
    console.log(y);
}
