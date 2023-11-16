// ************************* OBJETO DATE *************************

console.log(Date());// Thu Nov 16 2023 10:47:54 GMT-0300 (hora estándar de Argentina)

//Lo ideal es guardar en una variable la fecha.
let fecha = new Date();
console.log(fecha);// Thu Nov 16 2023 10:47:54 GMT-0300 (hora estándar de Argentina)

//Día del mes
console.log(fecha.getDate());//16

//Día de la semana D L M Mi J V S -> 0 1 2 3 4 5 6
console.log(fecha.getDay());//4

//Mes Ene Feb Mar Abr May Jun Jul Ago Sep Oct Nov Dic -> 0 1 2 3 4 5 6 7 8 9 10 11
console.log(fecha.getMonth());//10

console.log(fecha.getFullYear());//2023

console.log(fecha.getHours());//10
console.log(fecha.getMinutes());//50
console.log(fecha.getSeconds());//51
console.log(fecha.getMilliseconds());//780

console.log(fecha.toString());//Thu Nov 16 2023 10:47:54 GMT-0300 (hora estándar de Argentina)
console.log(fecha.toDateString());//Thu Nov 16 2023

console.log(fecha.toLocaleString());//16/11/2023 10:54:10
console.log(fecha.toLocaleDateString());//16/11/2023
console.log(fecha.toLocaleTimeString());//10:54:45

console.log(fecha.getTimezoneOffset());//De la hora 0 estamos a 180 minutos.
console.log(fecha.getUTCDate());//16
console.log(fecha.getUTCHours());//13

console.log(Date.now());//Esto da cuantos segundos han pasado desde el 1 de enero de 1970.

let cumpleJon = new Date(1984, 4, 23);
console.log(cumpleJon);//Wed May 23 1984 00:00:00 GTM-0300(hora estándar de Argentina)

//OBS. Ver página momentjs.com






