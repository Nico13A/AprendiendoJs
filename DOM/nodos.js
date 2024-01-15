// ************************* NODOS, ELEMENTOS Y SELEECTORES *************************

console.log(document.getElementsByTagName("li"));
console.log(document.getElementsByClassName("card"));
console.log(document.getElementsByName("nombre"));
// Estos 3 de arriba fueron reemplazados por query selector y query selector all.
console.log(document.getElementById("menu"));
console.log(document.querySelector("#menu"));// Es más lento que id, por eso id se sigue usando.
console.log(document.querySelector("a"));
console.log(document.querySelectorAll("a"));
console.log(document.querySelectorAll("a").length);
document.querySelectorAll("a").forEach((elemento) => console.log(elemento));
console.log(document.querySelectorAll(".card"));
console.log(document.querySelectorAll(".card")[2]);
console.log(document.querySelectorAll("#menu li"));