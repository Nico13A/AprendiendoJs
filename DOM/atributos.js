// ************************* ATRIBUTOS Y DATA-ATTRIBUTES *************************

// OBTENCIÓN DE ATRIBUTOS
console.log(document.documentElement.lang);
console.log(document.documentElement.getAttribute("lang"));

console.log(document.querySelector(".link-dom").href);
console.log(document.querySelector(".link-dom").getAttribute("href"));
/*
Con getAttribute me aseguro de traer lo que esta escrito en el atributo.
*/

// MODIFICACIÓN DE ATRIBUTOS
document.documentElement.lang = "en";
console.log(document.documentElement.lang);

document.documentElement.setAttribute("lang", "es-MX");
console.log(document.documentElement.lang);


// Es buena práctica colocar $ a las variables donde guardamos elementos del DOM.
const $linkDOM = document.querySelector(".link-dom");

$linkDOM.setAttribute("target", "_blank");
$linkDOM.setAttribute("rel", "noopener");

$linkDOM.setAttribute("href", "https://youtube.com/jonmircha");

// REMOVER ATRIBUTOS
console.log($linkDOM.hasAttribute("rel"));
$linkDOM.removeAttribute("rel");
console.log($linkDOM.hasAttribute("rel"));

// Data-Attributes
// Obtención de data-attributes.
console.log($linkDOM.getAttribute("data-description"));
console.log($linkDOM.dataset);
console.log($linkDOM.dataset.description);
// Establecer nuevos valores.
$linkDOM.setAttribute("data-description", "Modelo de Objeto del Documento");
console.log($linkDOM.dataset.description);
$linkDOM.dataset.description = "Suscríbete a mi canal y comparte";
console.log($linkDOM.dataset.description);
// Remover.
console.log($linkDOM.hasAttribute("data-id"));
$linkDOM.removeAttribute("data-id");
console.log($linkDOM.hasAttribute("data-id"));





