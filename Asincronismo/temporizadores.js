// ************************* TEMPORIZADORES (setTimeOut & setInterval) *************************

// SET TIME OUT
// Recibe una callback (una función que va a ejecutar) y un tiempo expresado en milisegundos.

console.log("INICIO");

setTimeout(() => {
    console.log("Ejecutando un setTimeout, esto se ejecuta una sóla vez");
}, 3000);

// SET INTERVAL
// Recibi una función y un intervalo de tiempo.

/*
setInterval(() => {
    console.log("Ejecutando un setInterval, esto se ejecuta indefinidamente cada cierto intervalo de tiempo");
}, 1000);

setInterval(() => {
    console.log(new Date().toLocaleTimeString());
}, 1000);
*/

let temporizador = setTimeout(() => {
    console.log(new Date().toLocaleTimeString());
}, 1000);

clearTimeout(temporizador);
//Clear lo limpia igual que con interval, pero tiene que estar en una variable.