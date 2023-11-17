// ************************* ALERT, CONFIRM Y PROMPT *************************

//console.log(window);
//alert("Hola esto es una alerta");
//confirm("Hola esto es una confirmación");
//prompt("Hola esto es un aviso y le permite al usuario ingresar un valor");

let alerta = alert("Hola esto es una alerta"),
    confirmacion = confirm("Hola esto es una confirmación"),
    aviso = prompt("Hola esto es un aviso y le permite al usuario ingresar un valor");

console.log(alerta);//undefined
console.log(confirmacion);//true si pongo aceptar
console.log(aviso);//hola si ingreso algo por ejemplo.
//OBS. Si en prompt pones un valor y le das a cancelar devuelve null.



