// ************************* MAPS *************************

const mapa = new Map();//Es un objeto iterador.

mapa.set("nombre", "Jon");
mapa.set("apellido", "MirCha");
mapa.set("edad", 35);

console.log(mapa);// Map {"nombre" => "Jon", "apellido" => "MirCha", "edad" => 35}
console.log(mapa.size);// 3
console.log(mapa.has("correo"));// false
console.log(mapa.has("nombre"));// true
console.log(mapa.get("nombre"));// Jon
mapa.set("nombre", "Jonathan MirCha");
console.log(mapa.get("nombre"));//Jonathan MirCha
mapa.delete("apellido");
console.log(mapa);// Map {"nombre" => "Jonathan MirCha", "edad" => 35}

/*
Esto es algo raro, pero guarda las llaves como un number en caso del 19, como un boolean y 
un objeto.
mapa.set(19, "diecinueve");
mapa.set(false, "falso");
mapa.set({}, {});
console.log(mapa);
*/

for (let [key, value] of mapa) {
    console.log(`Llave: ${key}, Valor: ${value}`);
    //"Llave: nombre, Valor: Jonathan MirCha", "Llave: edad, Valor: 35"
}


const mapa2 = new Map([
    ["nombre", "kEnAi"],
    ["edad", 7],
    ["animal", "perro"],
    [null, "nulo"]
]);

console.log(mapa2);// Map {"nombre" => "kEnAi", "edad" => 7, "animal" => "perro", null => "nulo"}

const llavesMapa2 = [...mapa2.keys()];
const valoresMapa2 = [...mapa2.values()];

console.log(llavesMapa2);// ["nombre", "edad", "animal", null]
console.log(valoresMapa2);// ["kEnAi", 7, "perro", "nulo"]
