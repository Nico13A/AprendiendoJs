// ************************* SETS *************************

const set = new Set([1, 2, 3, 3, 4, 5, true, false, false, {}, {}, "hola", "HOla"]);

console.log(set);// Set {1, 2, 3, 4, 5, true, false, {}, {}, "hola", "HOla"}
console.log(set.size);// 11


const set2 = new Set();
set2.add(1);
set2.add(2);
set2.add(2);
set2.add(3);
set2.add(true);
set2.add(false);
set2.add(true);
set2.add({});

console.log(set2);// Set {1, 2, 3, true, false, {}}
console.log(set2.size);// 6

console.log("Recorriendo set");// Recorriendo set
for (item of set) {
    console.log(item); // 1, 2, 3, 4, 5, true, false, {}, {}, "hola", "HOla"
}

console.log("Recorriendo set2"); // Recorriendo set2
set2.forEach(item => console.log((item)));// 1, 2, 3, true, false, {}

let arr = Array.from(set);//Esto convierte un objeto iterable en un arreglo.
console.log(arr);//[1, 2, 3, 4, 5, true, false, {}, {}, "hola", "HOla"]
console.log(arr[0]);//1
console.log(arr[9]);//"hola"


set.delete("HOla");//Borra un elemento del set.
console.log(set);// Set {1, 2, 3, 4, 5, true, false, {}, {}, "hola"}

//Comprueba si un valor existe dentro de la colección de datos.
console.log(set.has("hola"));//true
console.log(set.has(19));//false

set2.clear();// Con esto limpio set2
console.log(set2);// Set { }

//En conclusión, sirve para agregar datos únicos o validar, etc.