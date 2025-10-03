/*Ejercicio 2:
Simula una “barra de carga” en consola que vaya creciendo carácter a carácter
cada medio segundo:
█
██
███
████
Cuando llegue a 10 bloques, se debe detener automáticamente y mostrar:
Carga completada */

let bloques = 0;

let intervalo = setInterval(() => {
    bloques++;
    console.log('█'.repeat(bloques));
    console.log("");
    if (bloques === 10) {
        clearInterval(intervalo);
        console.log("Carga completada");
    }
}, 500);