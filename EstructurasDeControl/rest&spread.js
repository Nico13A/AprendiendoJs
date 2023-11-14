// ************************* PARÁMETROS REST Y OPERADOR SPREAD *************************

function sumar(a, b, ...c) { //Parámetro rest ...c
    let resultado = a + b;

    c.forEach(function (n) {
        resultado += n
    });

    return resultado;
}

console.log(sumar(1, 2));//3
console.log(sumar(1, 2, 3));//6
console.log(sumar(1, 2, 3, 4));//10
console.log(sumar(1, 2, 3, 4, 5));//15
console.log(sumar(1, 2, 3, 4, 5, 6));//21
console.log(sumar(1, 2, 3, 4, 5, 6, 7));//28


const arr1 = [1, 2, 3, 4, 5],
    arr2 = [6, 7, 8, 9, 0];

console.log(arr1, arr2);//[1, 2, 3, 4, 5] [6, 7, 8, 9, 0]

const arr3 = [...arr1, ...arr2];//Spread operator
console.log(arr3);//[1, 2, 3, 4, 5, 6, 7, 8, 9, 0]