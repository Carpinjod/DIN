/*Ejercicio 4.
Simula un precio de una acción de la bolsa que cambia cada segundo:
    • Empieza en 100 y cada segundo sube o baja entre -5 y +5 aleatoriamente y
    muestra el precio en consola.

    • Si el precio llega a 120 → mensaje "¡Máximo alcanzado!" y detener. Si baja
    de 80 → mensaje "¡Mínimo alcanzado!" y detener. */

let precio = 100;

let intervalo = setInterval(() => {
    let cambio = Math.floor(Math.random() * 11) - 5;
    precio += cambio;
    console.log("Precio actual: ", precio);

    if (precio >= 120) {
        console.log("¡Máximo alcanzado!");
        clearInterval(intervalo);
    } else if (precio < 80) {
        console.log("¡Mínimo alcanzado!");
        clearInterval(intervalo);
    }
}, 1000);