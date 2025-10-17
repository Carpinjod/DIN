/*1.Crea un array llamado numeros de 10 posiciones y rellénalo con el número 5 en
todas sus posiciones. Luego imprime el array. */

var numeros = new Array(10);

for(let i = 0; i < numeros.length; i++) {
    numeros[i] = 5;
}

/*numeros.fill(5); */

console.log(numeros);