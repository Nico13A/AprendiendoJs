// ************************* THIS *************************

/*
Esto hace referencia al objeto global, y el objeto global es window. En los navegadores.
Con node me devuelve global, que es el objeto global.
*/
console.log(this);
console.log(window);
console.log(this === window);

this.nombre = "Contexto Global";
console.log(this.nombre);// Contexto Global

function imprimir() {
    console.log(this.nombre);
}

imprimir();// Contexto Global

const obj = {
    nombre: "Contexto Objeto",
    imprimir: function () {
        console.log(this.nombre);
    }
}

obj.imprimir()// Contexto Objeto

const obj2 = {
    nombre: "Contexto Objeto 2",
    imprimir
}

obj2.imprimir();// Contexto Objeto 2

const obj3 = {
    nombre: "Contexto Objeto 3",
    imprimir: () => {
        console.log(this.nombre);
    }
}

obj3.imprimir();// Contexto Global
//Las funciones flecha no crean un scope, por eso pasa esto.



function Persona(nombre) {
    const that = this;
    //this.nombre = nombre;
    that.nombre = nombre;

    //return console.log(this.nombre);

    //return function () {
    //console.log(this.nombre); En este caso me devolvia Contexto Global.
    //}

    //return () => console.log(this.nombre);

    return function () {
        console.log(that.nombre);
    }
}

let jon = new Persona("Jon");
jon();
