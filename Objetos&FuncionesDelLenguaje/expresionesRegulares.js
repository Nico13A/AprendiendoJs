// ************************* EXPRESIONES REGULARES *************************

/*
Expresiones regulares:
    Son una secuencia de caracteres que forma un patrón de búsqueda, 
    principalmente utilizada para la búsqueda de patrones de cadenas de caracteres.
    https://es.wikipedia.org/wiki/Expresi%C3%B3n_regular
    https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions
*/

let cadena = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem fuga cupiditate dolores saepe, praesentium sit eaque recusandae id sapiente similique, laudantium voluptatum perferendis ea iure ad odio doloremque earum voluptate.";

let expReg = new RegExp("lorem", "ig");
//Con test pruebo que la expresión regular exista en la cadena.
console.log(expReg.test(cadena));//true
//Exec devuelve un arreglo con información en donde encontro la expresión regular.
console.log(expReg.exec(cadena));

let expReg2 = /lorem{1,}/ig;
console.log(expReg2.test(cadena));//true
console.log(expReg2.exec(cadena));

