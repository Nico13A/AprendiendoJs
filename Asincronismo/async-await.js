// ************************* ASYNC - AWAIT *************************

/*
Las promesas fueron una gran mejora respecto a las callbacks para controlar la asincronía 
en JavaScript, sin embargo pueden llegar a ser muy verbosas a medida 
que se requieran más y más métodos .then().

Las funciones asíncronas (async / await) surgen para simplificar el manejo de las promesas.

La palabra async declara una función como asíncrona e indica que una promesa será 
automáticamente devuelta.

Podemos declarar como async funciones con nombre, anónimas o funciones flecha.

La palabra await debe ser usado siempre dentro de una función declarada como async y 
esperará de forma asíncrona y no bloqueante a que una promesa se resuelva o rechace.
*/

function cuadradoPromise(value) {
    if (typeof value !== "number") {
        return Promise.reject(
            `Error, el valor " ${value} " ingresado no es un número`
        );
    }

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                value,
                result: value * value,
            });
        }, 0 | (Math.random() * 1000));
    });
}

async function funcionAsincronaDeclarada() {
    try {
        console.log("Inicio Async Function");
    
        let obj = await cuadradoPromise(0);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);

        obj = await cuadradoPromise(1);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);
    
        obj = await cuadradoPromise(2);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);
    
        obj = await cuadradoPromise("3");
        console.log(`Async Function: ${obj.value}, ${obj.result}`);
    
        obj = await cuadradoPromise(4);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);
    
        obj = await cuadradoPromise(5);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);
    
        console.log("Fin Async Function");
    } catch (err) {
        console.error(err);
    }
}

funcionAsincronaDeclarada();

const funcionAsincronaExpresada = async () => {
    try {
        console.log("Inicio Async Function");
    
        let obj = await cuadradoPromise(6);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);
    
        obj = await cuadradoPromise(7);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);
    
        obj = await cuadradoPromise(8);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);
    
        obj = await cuadradoPromise("9");
        console.log(`Async Function: ${obj.value}, ${obj.result}`);
    
        obj = await cuadradoPromise(10);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);
    
        console.log("Fin Async Function");
    } catch (err) {
        console.error(err);
    }
};

funcionAsincronaExpresada();
