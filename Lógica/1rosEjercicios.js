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

// ----------------- EJERCICIO 15 -----------------
const convertirBinarioDecimal = (numero = undefined, base = undefined) => {
    if (numero === undefined) return "No ingresaste un número a convertir.";
    if (typeof numero !== "number") return `El valor ingresado ${numero} no es un número.`;
    if (base === undefined) return "No ingresaste la base a convertir.";
    if (typeof base !== "number") return `El valor ingresado ${base} no es un número.`;

    if (base === 2) return `${numero} base ${base} = ${parseInt(numero, base)} base 10`;
    if (base === 10) return `${numero} base ${base} = ${numero.toString(base)} base 2`;
    return "El tipo de base a convertir no es válido.";
}

console.log(convertirBinarioDecimal(100, 2));
console.log(convertirBinarioDecimal(4, 10));




// ----------------- EJERCICIO 16 -----------------
const calcularDescuento = (precio = undefined, descuento = 0) => {
    if (precio === undefined) return "No ingresaste un precio para realizar el descuento.";
    if (typeof precio !== "number") return `El valor ingresado ${precio} no es un número.`;
    if (precio <= 0) return "Error, el precio no puede ser 0 o negativo.";
    if (typeof descuento !== "number") return `El valor ingresado ${descuento} no es un número.`;
    if (Math.sign(descuento) === -1) return "El descuento no puede ser negativo.";
    return precio - ((precio * descuento) / 100);
}

console.log(calcularDescuento(1000, 20));//800
console.log(calcularDescuento("", 20));//El valor ingresado no es un número.




// ----------------- EJERCICIO 17 -----------------
const calcularAnios = (fecha = undefined) => {
    if (fecha === undefined) return "No ingresaste la fecha.";
    if (!(fecha instanceof Date)) return "No ha ingresado una fecha válida.";

    let hoyMenosFecha = new Date().getTime() - fecha.getTime();
    let aniosEnMS = 1000 * 60 * 60 * 24 * 365;
    let aniosHumanos = Math.floor(hoyMenosFecha / aniosEnMS);
    return (Math.sign(aniosHumanos) === -1) ? `Faltan ${Math.abs(aniosHumanos)} años para el ${fecha.getFullYear()}.` : (Math.sign(aniosHumanos) === 1) ? `Han pasado ${aniosHumanos} años desde ${fecha.getFullYear()}` : `Estamos en el año actual ${fecha.getFullYear()}.`;
}

console.log(calcularAnios(new Date(1984, 10, 11)));//39
console.log(calcularAnios(new Date()));//
console.log(calcularAnios(new Date(1998, 7, 13)));
console.log(calcularAnios(new Date(2040, 1, 1)));




/*
18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, 
pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
19) Programa una función que valide que un texto sea un nombre válido, 
pe. miFuncion("Jonathan MirCha") devolverá verdadero.
20) Programa una función que valide que un texto sea un email válido, 
pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.
*/

// ----------------- EJERCICIO 18 -----------------
const contarVocalesYConsonantes = (texto = "") => {
    if (!texto) return "Warning, no ingresaste una cadena de texto.";
    if (typeof texto !== "string") return "Error, el valor ingresado no es una cadena de texto.";
    textoEnMinuscula = texto.toLowerCase();
    let vocales = 0;
    let consonantes = 0;

    for (const letra of textoEnMinuscula) {
        if (/[aeiouáéíóúü]/.test(letra)) {
            vocales++;
        }
        else if (/[a-z]/.test(letra)) {
            consonantes++;
        }
    }

    return `Vocales: ${vocales}, Consonantes: ${consonantes}`;
}

console.log(contarVocalesYConsonantes("Hola mundo"));
console.log(contarVocalesYConsonantes());




// ----------------- EJERCICIO 19 -----------------
const validarNombre = (nombre = "") => {
    if (!nombre) return "Warning, no ingresaste un nombre.";
    if (typeof nombre !== "string") return "Error, el valor ingresado no es una cadena de texto.";

    const regexNombre = /^[a-zA-ZñÑáÁéÉíÍóÓúÚüÜ\s]+$/;
    if (!regexNombre.test(nombre)) return false;

    const palabras = nombre.split(" ");
    if (palabras.length < 2) return false;

    return true;
}

console.log(validarNombre("Nicolas Matias Antinao"));
console.log(validarNombre("123")); 
console.log(validarNombre("John"));




// ----------------- EJERCICIO 20 -----------------
const validarCorreo = (correo = "") => {
    const regexCorreo = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!regexCorreo.test(correo)) return false;
    return true;
}

console.log(validarCorreo("nicoantinao1998@gmail.com"));//true
console.log(validarCorreo("nicoantinao.com"));//false
console.log(validarCorreo());




/*
21) Programa una función que dado un array numérico devuelve otro array con los 
números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].
22) Programa una función que dado un array devuelva el número mas alto y el más 
bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].
23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos 
en el primero almacena los números pares y en el segundo los impares, 
pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.
*/

// ----------------- EJERCICIO 21 -----------------
const elevarAlCuadrado = (numeros = undefined) => {
    if(numeros === undefined) return "Warning, no ingresaste un arreglo de números.";
    if(!(numeros instanceof Array)) return "Error, el valor ingresado no es un arreglo.";
    if(numeros.length === 0) return "El arreglo esta vacío.";
    for (const numero of numeros) {
        if (typeof numero !== "number") return `Error, el valor ingresado ${numero} no es un número.`;
    }
    return numeros.map(numero => numero * numero);
}

console.log(elevarAlCuadrado([1, 4, 5]));//[1, 16, 25]
console.log(elevarAlCuadrado([1, 4, "5"]));




// ----------------- EJERCICIO 22 -----------------
const devolverMinimoYMaximo = (numeros = undefined) => {
    if(numeros === undefined) return "Warning, no ingresaste un arreglo de números.";
    if(!(numeros instanceof Array)) return "Error, el valor ingresado no es un arreglo.";
    if(numeros.length === 0) return "El arreglo esta vacío.";
    for (const numero of numeros) {
        if (typeof numero !== "number") return `Error, el valor ingresado ${numero} no es un número.`;
    }
    return [Math.max(...numeros), Math.min(...numeros)];
}


console.log(devolverMinimoYMaximo([1, 4, 5, 99, -60]));//[99, -60]




// ----------------- EJERCICIO 23 -----------------
const devolverParesEImpares = (numeros = undefined) => {
    if(numeros === undefined) return "Warning, no ingresaste un arreglo de números.";
    if(!(numeros instanceof Array)) return "Error, el valor ingresado no es un arreglo.";
    if(numeros.length === 0) return "El arreglo esta vacío.";
    for (const numero of numeros) {
        if (typeof numero !== "number") return `Error, el valor ingresado ${numero} no es un número.`;
    }
    return ({
        'pares': numeros.filter(numero => numero % 2 === 0),
        'impares': numeros.filter(numero => numero % 2 !== 0)
    });
}

console.log(devolverParesEImpares([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));




/*
24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, 
el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, 
pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.
25) Programa una función que dado un arreglo de elementos, elimine los duplicados, 
pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].
26) Programa una función que dado un arreglo de números obtenga el promedio, 
pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.
*/

// ----------------- EJERCICIO 24 -----------------
const ordenarAscendenteDescendente = numeros => {
    const asc = [...numeros].sort((a, b) => b - a);
    const desc = [...numeros].sort((a, b) => a - b);
    return ({
        asc, desc
    })
};

console.log(ordenarAscendenteDescendente([7, 5, 7, 8, 6]));




// ----------------- EJERCICIO 25 -----------------
const eliminarDuplicados = elementos => {
    const arregloSinDuplicados = [];
    for (const elemento of elementos) {
        if (arregloSinDuplicados.indexOf(elemento) === -1) {
            arregloSinDuplicados.push(elemento);
        }
    }
    return arregloSinDuplicados;
}

console.log(eliminarDuplicados(["x", 10, "x", 2, "10", 10, true, true]));




// ----------------- EJERCICIO 26 -----------------
const obtenerPromedio = (numeros = undefined) => {
    /*
    if (numeros.length === 0) return 0;
    let suma = 0;
    let contador = 0;
    let promedio = 0;
    for (const numero of numeros) {
        suma += numero;
        contador++;
    }
    promedio = suma / contador;
    return promedio;
    */
    if(numeros === undefined) return "Warning, no ingresaste un arreglo de números.";
    if(!(numeros instanceof Array)) return "Error, el valor ingresado no es un arreglo.";
    if(numeros.length === 0) return "El arreglo esta vacío.";
    for (const numero of numeros) {
        if (typeof numero !== "number") return `Error, el valor ingresado ${numero} no es un número.`;
    }
    return (numeros.reduce((total, numero, indice, numeros) => {
        total += numero;
        if(indice === numeros.length - 1) {
            return (total / numeros.length);
        }
        else {
            return total;
        }
    }));
}

console.log(obtenerPromedio([9,8,7,6,5,4,3,2,1,0]));




/*
27) Programa una clase llamada Pelicula.

La clase recibirá un objeto al momento de instanciarse con los siguentes datos: 
id de la película en IMDB, titulo, director, año de estreno, país o países de origen, 
géneros y calificación en IMBD.

    - Todos los datos del objeto son obligatorios.
    - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 7 restantes 
    números.
    - Valida que el título no rebase los 100 caracteres.
    - Valida que el director no rebase los 50 caracteres.
    - Valida que el año de estreno sea un número entero de 4 dígitos.
    - Valida que el país o paises sea introducidos en forma de arreglo.
    - Valida que los géneros sean introducidos en forma de arreglo.
    - Valida que los géneros introducidos esten dentro de los géneros aceptados*.
    - Crea un método estático que devuelva los géneros aceptados*.
    - Valida que la calificación sea un número entre 0 y 10 pudiendo ser decimal de una posición.
    - Crea un método que devuelva toda la ficha técnica de la película.
    - Apartir de un arreglo con la información de 3 películas genera 3 instancias de 
    la clase de forma automatizada e imprime la ficha técnica de cada película.

    * Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, 
    Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, 
    Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, 
    Sport, Talk-Show, Thriller, War, Western.
*/

// ----------------- EJERCICIO 27 -----------------
class Pelicula {
    constructor({id, titulo, director, estreno, pais, generos, calificacion}) {
        this.id = id;
        this.titulo = titulo;
        this.director = director;
        this.estreno = estreno;
        this.pais = pais;
        this.generos = generos;
        this.calificacion = calificacion;
    
        this.validarIMDB(id);
        this.validarTitulo(titulo);
        this.validarDirector(director);
        this.validarEstreno(estreno);
        this.validarPais(pais);
        this.validarGeneros(generos);
        this.validarCalificacion(calificacion);
    }

    static get listaGeneros() {
        return ["Action", "Adult", "Adventure", "Animation", "Biography", "Comedy", "Crime", "Documentary" , "Drama", "Family", "Fantasy", "Film Noir", "Game-Show", "History", "Horror", "Musical", "Music", "Mystery", "News", "Reality-TV", "Romance", "Sci-Fi", "Short", "Sport", "Talk-Show", "Thriller", "War", "Western"];
    }

    static generosAceptados() {
        return console.log(`Géneros aceptados: ${Pelicula.listaGeneros.join(", ")}`);
    }

    validarCadena(propiedad, valor) {
        if (!valor) return `Warning, ${propiedad} "${valor}" esta vacío.`;
        if (typeof valor !== "string") return `${propiedad} "${valor}" ingresado, no es una cadena de texto.`;
        return true;
    }

    validarLongitudCadena(propiedad, valor, longitud) {
        if (valor.length > longitud) return console.log(`Error, ${propiedad} "${valor}" excede el número de caracteres permitidos (${longitud}).`);
        return true;
    }

    validarNumero(propiedad, valor) {
        if(!valor) return console.log(`Warning, ${propiedad} "${valor}" esta vacío.`);
        if (typeof valor !== "number") return console.log(`Error, ${propiedad} "${valor}" ingresado, no es un número.`);
        return true;
    }

    validarArreglo(propiedad, valor) {
        if(!valor) return console.log(`Warning, ${propiedad} "${valor}" esta vacío.`);
        if(!(valor instanceof Array)) return console.log(`Error, ${propiedad} "${valor}" ingresado, no es un arreglo.`);
        if(valor.length === 0) return console.log(`Error, ${propiedad} "${valor}" no tiene datos.`);
        for (const cadena of valor) {
            if (typeof cadena !== "string") return console.log(`Error, el valor ingresado ${cadena} no es una cadena de texto.`);
        }
        return true;
    }

    validarIMDB(id) {
        if (this.validarCadena("IMDB id", id))
            if(!(/^([a-z]){2}([0-9]){7}$/.test(id)))
                return console.log(`IMDB id "${id}" no es válido, debe tener 9 caracteres, los 2 primeros letras minúsculas, los 7 restantes números.`);
    }

    validarTitulo(titulo) {
        if(this.validarCadena("Título", titulo))
            this.validarLongitudCadena("Título", titulo, 100);
    }

    validarDirector(director) {
        if(this.validarCadena("Director", director))
            this.validarLongitudCadena("Director", director, 50);
    }

    validarEstreno(estreno) {
        if (this.validarNumero("Año de estreno", estreno))
            if(!(/^([0-9]){4}$/.test(estreno)))
                return console.log(`Error, año de estreno "${estreno}" no es válido, debe ser un número de 4 digitos.`);
    }

    validarPais(pais) {
        this.validarArreglo("País", pais);
    }

    validarGeneros(generos) {
        if (this.validarArreglo("Géneros", generos)){
            for (const genero of generos) {
                //console.log(genero, Pelicula.listaGeneros.includes(genero));
                if (!Pelicula.listaGeneros.includes(genero)) {
                    console.log(`Géneros incorrectos "${generos.join(", ")}"`);
                    Pelicula.generosAceptados();
                }
            }
        }
    }

    validarCalificacion(calificacion) {
        if (this.validarNumero("Calificación", calificacion)){
            return (calificacion<0 || calificacion>10) ? console.log("Error, la calificación tiene que estar en un rango entre 0 y 10.") : this.calificacion.toFixed(1);
        }
    }

    fichaTecnica() {
        console.log(`Ficha técnica:
            Título: "${this.titulo}"
            Director: "${this.director}"
            Año: "${this.estreno}"
            País: "${this.pais.join("-")}"
            Géneros: "${this.generos.join(", ")}"
            Calificación: "${this.calificacion}"
            IMDB id: "${this.id}"`);
    }
}

//Pelicula.generosAceptados();

const peli = new Pelicula({
    id: "tt1234567",
    titulo: "Titulo de la pelicula",
    director: "Director de la pelicula",
    estreno: 2020,
    pais: ["Argentina", "Francia"],
    generos: ["Sport"],
    calificacion: 8.1
});

peli.fichaTecnica();

