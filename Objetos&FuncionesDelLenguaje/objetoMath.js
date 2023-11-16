// ************************* OBJETO MATH *************************

//Math es un objeto estático. Por ende cada vez que lo queramos utilizar tenemos que convocar
//al objeto, al prototipo.
console.log(Math);//Con esto vemos todos los métodos disponibles.
    
console.log(Math.PI);//3.141592653589793
    
console.log(Math.abs(-7.8));//Devuelve el valor absoluto, 7.8.
    
console.log(Math.ceil(7.2));//8. Redondea hacia arriba.
    
console.log(Math.floor(7.8));//7. Redondea hacia abajo.
    
console.log(Math.round(7.49));//Hace justicia, redondea hacia el que este más cerca. 7.
    
console.log(Math.sqrt(81));//Da la raíz cuadrada, 9.
    
console.log(Math.pow(2, 5));//Potencia, en este caso es 2 a la quinta. 32.
    
console.log(Math.sign(-0.3)); // -1 0 1 Devuelve -1 si es negativo, 0 si es 0 y 1 si es positivo.
    
console.log(Math.random());//Me da un valor entre 0 y 1. (Incluye el 0 pero no el 1).
    
console.log(Math.round(Math.random() * 1000));


