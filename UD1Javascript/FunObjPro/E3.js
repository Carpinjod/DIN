/*3. Implementa un callback con setTimeout que imprima “¡Tiempo cumplido!” después de
3 segundos, pero antes debe imprimirse “Esperando...”. */

setTimeout (function () {
    console.log("¡Tiempo cumplido!");
}, 3000);

console.log("Esperando...");