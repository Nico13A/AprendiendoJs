// ************************* CALL, APPLY Y  BIND *************************


console.log(this);

this.lugar = "Contexto Global";

function saludar(saludo, aQuien) {
    console.log(`${saludo} ${aQuien} desde el ${this.lugar}`);
}

saludar("Hola", "kEnAi");// Hola kEnAi desde el Contexto Global

const obj = {
    lugar: "Contexto Objeto"
}

saludar.call(obj, "Hola", "Jon");// Hola Jon desde el Contexto Objeto
saludar.call(null, "Hola", "Jon");// Hola Jon desde el Contexto Global
saludar.call(this, "Hola", "Jon");// Hola Jon desde el Contexto Global

saludar.apply(obj, ["Adios", "MirCha"]);// Adios MirCha desde el Contexto Objeto
saludar.apply(null, ["Adios", "MirCha"]);// Adios MirCha desde el Contexto Global
saludar.apply(this, ["Adios", "MirCha"]);// Adios MirCha desde el Contexto Global

this.nombre = "Window";

const persona = {
    nombre: "Jon",
    saludar: function () {
        console.log(`Hola ${this.nombre}`)
    }
}

persona.saludar();// Hola Jon 

const otraPersona = {
    saludar: persona.saludar.bind(this)
}

otraPersona.saludar();// Hola Window
//OBS. Si saco el this.nombre y en bind pongo (persona) el resultado es Hola Jon.

//Sin el bind si hago persona.saludar me retorna Hola undefined. Si no estaba this.nombre = "Window".

