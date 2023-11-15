// ************************* PROTOTIPOS *************************

/*
Los prototipos en js son o es un mecanismo por el cual un objeto puede heredar (de un objeto 
padre) atributos y métodos.
La herencia se da por la cadena de prototipos.
*/

/*                                  POO
    Clases - Modelo a seguir.

    Objetos - Es una instancia de una clase.

    Atributos - Es una característica o propiedad del objeto (son variables dentro de un objeto).

    Métodos - Son las acciones que un objeto puede realizar (son funciones dentro de un objeto).
*/

const animal = {
    nombre: "Snoopy",
    sonar() {
        console.log("Hago sonidos por que estoy vivo");
    }
}

const animal2 = {
    nombre: "Lola Bunny",
    sonar() {
        console.log("Hago sonidos por que estoy vivo");
    }
}

console.log(animal);// {nombre: 'Snoopy', sonar: f}
console.log(animal2);// {nombre: 'Lola Bunny', sonar: f}

//Función constructora
/*
function Animal(nombre, genero) {
    //Atributos
    this.nombre = nombre;
    this.genero = genero;

    //Métodos
    this.sonar = function () {
        console.log("Hago sonidos por que estoy vivo");
    }
    this.saludar = function () {
        console.log(`Hola me llamo ${this.nombre}`);
    }
} 

OBS. Lo ideal es que nuestra función constructora solo tenga los atributos.
Los métodos hay que sacarlos de la función y tenemos que pasarselo a los prototipos.
*/

/*
const snoopy = new Animal("Snoopy", "Macho");
const lolaBunny = new Animal("Lola Bunny", "Hembra");

console.log(snoopy);//Animal {nombre: 'Snoopy', genero: 'Macho', sonar: f, saludar: f}
console.log(lolaBunny);

snoopy.sonar();//Hago sonidos por que estoy vivo
snoopy.saludar();//Hola me llamo Snoopy
*/

//Función constructora donde asignamos los métodos al Prototipo, no a la función como tal.
function Animal(nombre, genero) {
    //Atributos
    this.nombre = nombre;
    this.genero = genero;
} 

//Métodos agregados al prototipo de la función constructora
Animal.prototype.sonar = function () {
    console.log("Hago sonidos por que estoy vivo");
}

Animal.prototype.saludar = function () {
    console.log(`Hola me llamo ${this.nombre}`);
} 
//OBS. La idea con esto es evitar duplicados de métodos.

const snoopy = new Animal("Snoopy", "Macho");
const lolaBunny = new Animal("Lola Bunny", "Hembra");

console.log(snoopy);//Animal {nombre: 'Snoopy', genero: 'Macho'}
console.log(lolaBunny);

snoopy.sonar();//Hago sonidos por que estoy vivo
snoopy.saludar();//Hola me llamo Snoopy
