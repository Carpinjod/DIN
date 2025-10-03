/*5. Usa un bucle para sumar todos los números del 1 al 50 que sean múltiplos de 4.
Después, imprime el total acumulado.*/

var multiplos = 0;

for (var i = 1; i <= 50; i++) {
    if (i % 4 == 0) {
        multiplos += i;
    }
}

console.log(multiplos);

