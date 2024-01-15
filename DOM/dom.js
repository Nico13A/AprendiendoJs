// ************************* DOM *************************

console.log("************* Elementos del documento *************");
console.log(window.document);
console.log(document);
console.log(document.head);
console.log(document.body);
console.log(document.documentElement);// Esto representa la etiqueta HTML
console.log(document.doctype);
console.log(document.charset);
console.log(document.title);
console.log(document.links);
console.log(document.images);
console.log(document.forms);
console.log(document.styleSheets);
console.log(document.scripts);
setTimeout(() => {
    console.log(document.getSelection().toString());
}, 3000);// Get selection sirve para mostrar lo que marco con el mouse.

document.write("<h2>Hola mundo, desde el DOM</h2>");




