// ************************* HERENCIA PROTOTÍPICA *************************

function Animal(nombre, genero) {
    this.nombre = nombre;
    this.genero = genero;
} 
Animal.prototype.sonar = function () {
    console.log("Hago sonidos por que estoy vivo");
}
Animal.prototype.saludar = function () {
    console.log(`Hola me llamo ${this.nombre}`);
} 

function Perro(nombre, genero, tamanio) {
    this.super = Animal;
    this.super(nombre, genero);
    this.tamanio = tamanio;
} 

//Perro está heredando de Animal
Perro.prototype = new Animal();
Perro.prototype.constructor = Perro;

//Sobreescritura de métodos del Prototipo padre en el hijo
Perro.prototype.sonar = function () {
    console.log("Soy un perro y mi sonido es un ladrido");
}
Perro.prototype.ladrar = function () {
    console.log("Guauuu Guauuu !!!!");
} 

const snoopy = new Perro("Snoopy", "Macho", "Mediano"),
    lolaBunny = new Animal("Lola Bunny", "Hembra");

console.log(snoopy);//Perro {super: f Animal, nombre: 'Snoopy', genero: 'Macho', tamanio: 'Mediano'}
console.log(lolaBunny);//Animal {nombre: 'Lola Bunny', genero: 'Hembra'}

snoopy.sonar();//Soy un perro y mi sonido es un ladrido
snoopy.saludar();//Hola me llamo Snoopy
snoopy.ladrar();//Guauuu Guauuu !!!!

lolaBunny.sonar();//Hago sonidos por que estoy vivo
lolaBunny.saludar();//Hola me llamo Lola Bunny
