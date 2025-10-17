/*6. Dado el array numeros = [4, 21, 33, 12, 9, 54], obtén un nuevo array que contenga
solo los números pares. */

var numeros = [4, 21, 33, 12, 9, 54];

console.log(numeros.filter(function(num) {
    return num % 2 == 0;
}));