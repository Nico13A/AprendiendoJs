// ************************* MÉTODOS ESTÁTICOS, GETTERS Y SETTERS *************************

//OBS IMPORTANTE. Todas las clases en js son públicas.
class Animal {
    constructor(nombre, genero) {
        this.nombre = nombre;
        this.genero = genero;
    }

    sonar() {
        console.log("Hago sonidos por que estoy vivo");
    }

    saludar() {
        console.log(`Hola me llamo ${this.nombre}`);
    }
}

class Perro extends Animal {
    constructor(nombre, genero, tamanio) {
        super(nombre, genero);
        this.tamanio = tamanio;
        this.raza = null;
    }

    sonar() {
        console.log("Soy un perro y mi sonido es un ladrido");
    }

    ladrar() {
        console.log("Guauuu Guauuu!!!");
    }

    //Un método estático se puede ejecutar sin necesidad de instanciar la clase.
    static queEres() {
        console.log("Los perros somos animales mamíferos que pertenecemos a la familia de los caninos. Somos considerados los mejores amigos del hombre.");
    }

    //Los setters y getters son métodos especiales que nos permiten establecer y 
    //obtener los valores de atributos de nuestra clase.

    get getRaza() {
        return this.raza;
    }

    set setRaza(raza) {
        this.raza = raza;
    }
}

Perro.queEres();//Los perros somos animales mamíferos que pertenecemos a la familia de los caninos. Somos considerados los mejores amigos del hombre.

const mimi = new Animal("Mimi", "Hembra");
const scooby = new Perro("Scooby", "Macho", "Gigante");

console.log(scooby.getRaza);//null
//scooby.setRaza("Grán Danés"); Esto larga ERROR.
scooby.setRaza = "Grán Danés";
console.log(scooby.getRaza);//Grán Danés








