// ************************* ASINCRONÍA Y EVENT LOOP *************************

/* -------------------------------- ASINCRONÍA -------------------------------
Js es un lenguaje de programación de un sólo subproceso o hilo (single thread), 
lo que significa que sólo puede ejecutar una cosa a la vez.

Imagina que solicitas datos de una API. 
Dependiendo de la situación, el servidor puede tardar un tiempo en procesar la solicitud 
mientras bloquea el hilo principal y hace que la página web no responda.

Ahí es donde entra en juego la asincronía que permite realizar largas solicitudes de red 
sin bloquear el hilo principal.

JavaScript fue diseñado para ser ejecutado en navegadores, trabajar con peticiones sobre la red 
y procesar las interacciones de usuario, al tiempo que mantiene una interfaz fluida.

Javascript usa un modelo asíncrono y no bloqueante, con un loop de eventos 
implementado en un sólo hilo, (single thread) para operaciones de 
entrada y salida (input/output).

------------------------------------------------------------------------------

Antes de explicar como funciona el modelo de JavaScript es importante entender 
algunos conceptos:
    Procesamiento Single thread y Multi thread.
    Operaciones de CPU y Operaciones de I / O.
    Operaciones Concurrentes y Paralelas.
    Operaciones Bloqueantes y No Bloqueantes.
    Operaciones Síncronas y Asíncronas.
*/

/* -------------------------- SINGLE Y MULTI THREAD --------------------------
Un hilo la unidad básica de ejecución de un proceso, cada vez que abres un programa 
como el navegador o tu editor de código, se levanta un proceso en tu computadora 
e internamente este puede tener uno o varios hilos (threads) ejecutándose para que el 
proceso funcione.
*/

/* ----------------- OPERACIONES DE CPU Y DE ENTRADA Y SALIDA ----------------
Operaciones CPU: Aquellas que pasan el mayor tiempo consumiendo Procesos del CPU, por ejemplo, 
la escritura de ficheros.
Operaciones de Entrada y Salida: Aquellas que pasan la mayor parte del tiempo 
esperando la respuesta de una petición o recurso, como la solicitud a una API o BD.
*/

/* ----------------------- CONCURRENCIA Y PARALELISMO ------------------------
Concurrencia: Cuando dos o más tareas progresan simultáneamente.
Paralelismo: Cuando dos o más tareas se ejecutan, al mismo tiempo.
*/

/* ----------------------- BLOQUEANTE Y NO BLOQUEANTE ------------------------
Se refiere a como la fase de espera de las operaciones afectan a nuestra aplicación:

    Bloqueante: Son operaciones que no devuelven el control a nuestra aplicación hasta que se 
    ha completado. Por tanto el thread queda bloqueado en estado de espera.

    No Bloqueante: Son operaciones que devuelven inmediatamente el control a nuestra aplicación, 
    independientemente del resultado de esta. 
    En caso de que se haya completado, devolverá los datos solicitados. 
    En caso contrario (si la operación no ha podido ser satisfecha) podría devolver un 
    código de error.
*/

/* -------------------------- SÍNCRONO Y ASÍNCRONO ---------------------------
Se refiere a ¿cuándo tendrá lugar la respuesta?:

Síncrono: La respuesta sucede en el presente, una operación síncrona esperará el resultado.
Asíncrono: La respuesta sucede a futuro, una operación asíncrona no esperará el resultado.

Con lo anterior en JavaScript podemos tener:
    Código síncrono y bloqueante o
    Código asíncrono y no bloqueante
*/

/* ----------------------- CÓDIGO SÍNCRONO BLOQUEANTE ------------------------
Cada operación se hace de una vez, bloqueando el flujo de ejecución, 
el hilo es bloqueado mientras espera la respuesta, cuando esta se procesa pasa a la siguiente 
operación y así sucesivamente al terminar todas las operaciones.
*/

(() => {
    console.log("Código síncrono");
    console.log("Inicio");

    function dos() {
        console.log("Dos");
    }
    
    function uno() {
        console.log("Uno");
        dos();
        console.log("Tres");
    }
    
    uno();
    console.log("Fin");
})();

console.log("***************************************************************");

/* --------------------- CÓDIGO ASÍNCRONO NO BLOQUEANTE ----------------------
Cada operación se ejecuta y devuelve inmediatamente el control al hilo, evitando el bloqueo, 
cuando cada operación termine se enviará una notificación de que ha terminado, 
es entonces cuando la respuesta se encolará para ser procesada.
*/

(() => {
    console.log("Código Asíncrono");
    console.log("Inicio");

    function dos() {
        setTimeout(function () {
            console.log("Dos");
        }, 1000);
    }

    function uno() {
        setTimeout(function () {
            console.log("Uno");
        }, 0);
        dos();
        console.log("Tres");
    }

    uno();
    console.log("Fin");
})();


