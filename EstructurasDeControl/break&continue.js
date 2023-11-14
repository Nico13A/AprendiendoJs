// ************************* BREAK & CONTINUE *************************

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

for (let i = 0; i < numeros.length; i++) {
    if (i === 5) {
        break;
    }
    console.log(numeros[i]);
}

for (let i = 0; i < numeros.length; i++) {
    if (i === 5) {
        continue;//Omite que imprimas en este caso, el código que se encuentra en esa iteración.
        //Por eso cuando llega a la posición 5 no imprime el 6, lo omite y sigue.
    }
    console.log(numeros[i]);
}