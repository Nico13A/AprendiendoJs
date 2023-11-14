// ************************* OBJETOS LITERALES *************************

let nombre = "kEnAi",
    edad = 7;

const perro = {
    nombre: nombre,
    edad: edad,
    ladrar: function () {
        console.log("guauu guauu!!!");
    }
}

console.log(perro);// {nombre: 'kEnAi', edad: 7, ladrar: f}
perro.ladrar();// guauu guauu!!!

//Nuevas formas:

const dog = {
    nombre,
    edad,
    raza: "Callejero",
    ladrar() {
        console.log("guauu guauu guauu!!!");
    }
}

console.log(dog);// {nombre: 'kEnAi', edad: 7, raza: 'Callejero', ladrar: f}
dog.ladrar();//guauu guauu guauu!!!



