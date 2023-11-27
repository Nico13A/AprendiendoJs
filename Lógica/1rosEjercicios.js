// ************************* EJERCICIOS LÓGICA DE PROGRAMACIÓN *************************

/*
1) Programa una función que cuente el número de caracteres de una cadena de texto, 
pe. miFuncion("Hola Mundo") devolverá 10.
2) Programa una función que te devuelva el texto recortado según el número de caracteres 
indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
3) Programa una función que dada una String te devuelva un Array de textos separados 
por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) 
devolverá Hola Mundo Hola Mundo Hola Mundo.
*/

// ----------------- EJERCICIO 1 -----------------
/**
 * Dada una cadena de texto, devuelve la cantidad de caracteres.
 * @param {string} cadena 
 * @returns {number | string}
 */
function contarCaracteres(cadena) {
    let cantidadDeCaracteres;
    if (typeof cadena === 'string') {
        cantidadDeCaracteres = cadena.length;
    }
    else {
        cantidadDeCaracteres = "No has ingresado una cadena de texto.\n";
    }
    return cantidadDeCaracteres;
}

console.log(contarCaracteres("Hola mundo"));//10
console.log(contarCaracteres());//No has ingresado una cadena de texto.

/* OTRA FORMA (Función expresada)
const contarCaracteres = cadena => typeof cadena === 'string' ? cadena.length : console.log("No has ingresado una cadena de texto.");
console.log(contarCaracteres("Hola mundo"));//10
console.log(contarCaracteres(0));//No has ingresado una cadena de texto.
*/




// ----------------- EJERCICIO 2 -----------------
/**
 * Dado un texto y una cantidad de caracteres, devuelve el texto recortado en base a la longitud.
 * @param {string} cadena 
 * @param {number} longitud 
 * @returns {string}
 */
const recortarTexto = (cadena , longitud) => 
    (typeof cadena === 'string') ? 
        (longitud > 0) ? cadena.slice(0, longitud) : cadena :
    "Error, no se ha ingresado un texto.";


let cad = "Hola mundo.";
console.log(recortarTexto(cad, 4));//Hola
console.log(recortarTexto("d", 0));//d
console.log(recortarTexto(4, 0));//Error, no se ha ingresado un texto.

/*
const recortarTexto = (cadena, cantidadDeCaracteres) => {
    //String textoRecortado
    let textoRecortado = "";
    if (typeof cadena === "string") {
        if (cantidadDeCaracteres > 0) {
            textoRecortado = cadena.slice(0, cantidadDeCaracteres);
        }
        else {
            textoRecortado = cadena;
        }
    }
    else {
        textoRecortado = "Error, no se ha ingresado un texto.\n";
    }
    return textoRecortado;
}
*/




// ----------------- EJERCICIO 3 -----------------
/**
 * Dado un string y cierto caracter, separa el string en un array en base al caracter.
 * @param {string} cadena 
 * @param {string} caracter 
 * @returns {array}
 */
const separarCadena = (cadena, caracter) => cadena.split(caracter);
console.log(separarCadena("hola que tal", ' '));//['hola', 'que', 'tal']




// ----------------- EJERCICIO 4 -----------------
/**
 * Dado una cadena y un contador, devuelve la cadena repetida en base al contador.
 * @param {string} cadena 
 * @param {number} contador 
 * @returns {string}
 */
const repetirCadena = (cadena = "", contador = undefined) => {
    /*
    if (!cadena) {
        return console.log("No ingresaste un texto.");
    }
    */
    //OBS No hace falta llaves si retorno algo en una sola linea.

    if (!cadena) return console.log("No ingresaste un texto.");

    if (contador === undefined) return console.log("No ingresaste el número de veces a repetir el texto.");

    if (contador === 0 ) return console.log("Error, el número de veces no puede ser 0.");
    
    if (Math.sign(contador) === -1) return console.log("Error, el número de veces no puede ser negativo.");

    /*
    for (let i = 0; i < contador; i++) {
        console.log(`${cadena}, ${i}`);
    }
    */
    for (let i = 0; i < contador; i++) console.log(`${cadena}`);
}

repetirCadena("Hola", 3)//Hola, Hola, Hola
repetirCadena("", 3);//No ingresaste un texto.
repetirCadena("Hola", -2)//Error, el número de veces no puede ser negativo.
repetirCadena("Hola", 0)//Error, el número de veces no puede ser 0.




/*
5) Programa una función que invierta las palabras de una cadena de texto, 
pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
6) Programa una función para contar el número de veces que se repite una palabra en un texto 
largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
7) Programa una función que valide si una palabra o frase dada, 
es un palíndromo (que se lee igual en un sentido que en otro), 
pe. mifuncion("Salas") devolverá true.
8) Programa una función que elimine cierto patrón de caracteres de un texto dado, 
pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
*/

// ----------------- EJERCICIO 5 -----------------
/**
 * Dada una cadena de texto, retorna el mismo invertido.
 * @param {string} cadena 
 * @returns {string}
 */
const invertirPalabra = (cadena = "") => {
    //String cadenaInvertida
    //Number i
    let cadenaInvertida = "";
    if (cadena === "" || typeof cadena !== 'string') {
        cadenaInvertida = "Error, no ha ingresado un texto.";
    }
    else {
        for (let i = cadena.length - 1; i >= 0; i--) {
            cadenaInvertida += cadena[i];
        }
    }
    return cadenaInvertida;
}

console.log(invertirPalabra("Hola mundo"));
console.log(invertirPalabra());




// ----------------- EJERCICIO 6 -----------------
/**
 * Dado una cadena de texto y una palabra, retorna cuantas veces se repite la palabra
 * en el texto.
 * @param {string} cadena 
 * @param {string} palabra 
 * @returns {number | string}
 */
const contarRepeticiones = (cadena = "", palabra = "") => {
    //Array arregloDeCadena
    //Number contador, i
    if (!cadena || typeof cadena !== "string") return "Error, no ingresaste un texto.";
    if (!palabra || typeof palabra !== "string") return "Error, no ingresaste una palabra para verificar si se repite.";

    let arregloDeCadena = cadena.split(" ");
    let contador = 0;
    for (let i = 0; i < arregloDeCadena.length; i++) {
        if (arregloDeCadena[i] === palabra) {
            contador++;
        }
    }
    return contador;
}

console.log(contarRepeticiones("hola mundo adios mundo perrito mundo mundo", "mundo"));
console.log(contarRepeticiones("", "mundo"));
console.log(contarRepeticiones(4, "mundo"));
console.log(contarRepeticiones("Perrito malvado", ""));




// ----------------- EJERCICIO 7 -----------------
//Función para quitar acentos.
const quitarAcentos = cadena => cadena.normalize('NFD').replace(/[\u0300-\u036f]/g,"");

/**
 * Dado una cadena, retorna verdadero o falso si la misma es palíndromo.
 * @param {string} cadena 
 * @returns {boolean | string}
 */
const esPalindromo = (cadena = "") => {
    //String cadenaAMinuscula
    if (!cadena || typeof cadena !== "string") return "Error, no ingresaste un texto.";
    let cadenaAMinuscula = quitarAcentos(cadena.toLowerCase());
    return invertirPalabra(cadenaAMinuscula) === cadenaAMinuscula;
}


console.log(esPalindromo("salas"));
console.log(esPalindromo("perro"));
console.log(esPalindromo("Neuquén"));
console.log(esPalindromo(""));




// ----------------- EJERCICIO 8 -----------------
/**
 * Dado una cadena y un cierto patrón de caracter, elimina de la cadena el patrón pasado.
 * @param {string} cadena 
 * @param {string} caracter 
 * @returns {string}
 */
const quitarCaracteres = (cadena = "", caracter = "") => {
    //Object regex
    if (!cadena || typeof cadena !== "string") return "Error, no ingresaste un texto.";
    if (!caracter || typeof caracter !== "string") return "Error, no ingresaste una palabra para verificar si se repite.";
    const regex = new RegExp(caracter, 'ig');
    return cadena.replace(regex, "");
}

console.log(quitarCaracteres("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz"));
console.log(quitarCaracteres("lorem ipsum hola perrito malvado como estas kula.", "o"));




/*
9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
10) Programa una función que reciba un número y evalúe si es capicúa o no 
(que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
11) Programa una función que calcule el factorial de un número 
(El factorial de un entero positivo n, se define como el producto de todos los números enteros 
positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.
*/

// ----------------- EJERCICIO 9 -----------------
/**
 * Retorna un número entero entre 501 y 600.
 * @returns {number}
 */
const obtenerAleatorio = () => Math.round(Math.random() * (600 - 501 + 1) + 501);
console.log(obtenerAleatorio());




// ----------------- EJERCICIO 10 -----------------
/**
 * Dado un número retorna verdadero si es capicúa, falso en caso contrario.
 * @param {number} numero 
 * @returns {boolean}
 */
const esCapicua = (numero = 0) => {
    //String numeroString, numeroInvertido
    if (!numero) return "No ingresaste un número";
    if (typeof numero !== "number") return `El valor ingresado ${numero}, no es un número.`;
    const numeroString = numero.toString();
    const numeroInvertido = numeroString.split("").reverse().join("");
    return numeroString === numeroInvertido;
}

console.log(esCapicua(4005));//false
console.log(esCapicua(2002));//true




// ----------------- EJERCICIO 11 -----------------
/**
 * Retorna el factorial de un número.
 * @param {number} numero 
 * @returns {number}
 */
const calcularFactorial = (numero = undefined) => {
    //Number factorial, i
    if (numero === undefined) return "No ingresaste un número.";
    if (typeof numero !== "number") return "Error, el valor ingresado no es un número.";
    if (numero <= 0) return "El número no puede ser igual o menor a 0.";
    let factorial = 1;
    for (let i = 1; i <= numero; i++) {
        factorial *= i;
    }
    return factorial;
}

console.log(calcularFactorial(5));//120
console.log(calcularFactorial(0));




/*
12) Programa una función que determine si un número es primo 
(aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.
13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) 
devolverá Impar.
14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, 
pe. miFuncion(0,"C") devolverá 32°F.
*/

// ----------------- EJERCICIO 12 -----------------
/**
 * Dado un número, devuelve verdadero si es par, falso en caso contrario.
 * @param {number} numero 
 * @returns {boolean | string}
 */
const esPrimo = numero => {

    if (typeof numero !== "number") return "Error, no ingresaste un número.";

    if (numero < 2) return false;

    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) return false;
    }

    return true;
}

console.log(esPrimo("d"));//Error, no ingresaste un número.
console.log(esPrimo(1));
console.log(esPrimo(7));
console.log(esPrimo(4));




// ----------------- EJERCICIO 13 -----------------
/**
 * Dado un número, retorna verdadero si es par, falso en caso contrario.
 * @param {number} numero 
 * @returns {boolean | string}
 */
const esPar = numero => (typeof numero === "number") ? numero % 2 === 0 : "Error, no ingresaste un número.";
console.log(esPar(6));//true
console.log(esPar());//Error, no ingresaste un numero.




// ----------------- EJERCICIO 14 -----------------
/**
 * Convierte grados Celsius a Fahrenheit y viceversa.
 * @param {number} valor 
 * @param {string} unidad 
 * @returns {number | string}
 */
const convertirTemperatura = (valor, unidad) => {
    if (typeof valor !== "number") return "El valor ingresado no es un número.";
    if (unidad === "C") return ((valor * 9/5) + 32) + "F";
    if (unidad === "F") return ((valor - 32) * 5/9) + "°C";

    return "Unidad no válida. Utiliza 'C' o 'F'.";
}

const resultadoCelsius = convertirTemperatura(0, "C");
console.log(resultadoCelsius); // Devolverá "32°F"

const resultadoFahrenheit = convertirTemperatura(32, "F");
console.log(resultadoFahrenheit); // Devolverá "0°C"




/*
15) Programa una función para convertir números de base binaria a decimal y viceversa, 
pe. miFuncion(100,2) devolverá 4 base 10.
16) Programa una función que devuelva el monto final después de aplicar un descuento a 
una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.
17) Programa una función que dada una fecha válida determine cuantos años han pasado 
hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).
*/
