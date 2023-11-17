// ************************* MÓDULOS (IMPORT / EXPORT) *************************

import saludar, {Saludar, PI, usuario} from "./constantes.js";
import {aritmetica as calculos} from "./aritmeticas.js";


console.log("Archivo modulos.js");

console.log(PI, usuario);//3.14 'Jon'

//console.log(aritmetica.sumar(3, 4));//7
console.log(calculos.sumar(2, 5));//7
console.log(calculos.restar(3, 4));//-1

saludar();//Hola Módulos +ES6

let saludo = new Saludar();
saludo;//Hola Clases +ES6