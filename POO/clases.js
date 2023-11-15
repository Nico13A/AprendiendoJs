// ************************* CLASES Y HERENCIA *************************

class Animal {
      //El constructor es un método especial que se ejecuta en el momento de instanciar la clase.
    constructor(nombre, genero) {
        this.nombre = nombre;
        this.genero = genero;
    }

    //Métodos
    sonar() {
        console.log("Hago sonidos por que estoy vivo");
    }

    saludar() {
        console.log(`Hola me llamo ${this.nombre}`);
    }
}

class Perro extends Animal {
    constructor(nombre, genero, tamanio) {
        //Con el método super() se manda a llamar el constructor de la clase padre.
        super(nombre, genero);
        this.tamanio = tamanio;
    }

    sonar() {
        console.log("Soy un perro y mi sonido es un ladrido");
    }

    ladrar() {
        console.log("Guauuu Guauuu!!!");
    }
}

const mimi = new Animal("Mimi", "Hembra");
const scooby = new Perro("Scooby", "Macho", "Gigante");

console.log(mimi);//Animal {nombre: 'Mimi', genero: 'Hembra'}
mimi.saludar();//Hola me llamo Mimi
mimi.sonar();//Hago sonidos por que estoy vivo

console.log(scooby);// Perro {nombre: 'Scooby', genero: 'Macho', tamanio: 'Gigante'}
scooby.saludar();//Hola me llamo Scooby
scooby.sonar();//Soy un perro y mi sonido es un ladrido
scooby.ladrar();//Guauuu Guauuu!!!
