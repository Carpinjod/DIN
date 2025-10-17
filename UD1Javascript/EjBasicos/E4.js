/*Crea una variable nota y asígnale un número de 0 a 10. Programa para que salga por
consola lo siguiente en función de la nota:
o Si la nota es mayor o igual a 9 → "Sobresaliente"
o Entre 7 y 8 → "Notable"
o Entre 5 y 6 → "Aprobado"
o Menos de 5 → "Suspenso"
o Además, imprime "Felicidades" si la nota es mayor o igual a 9.*/

let nota = 8;

if (nota < 5) {
    console.log("Suspenso");
} else if (nota >= 5 & nota <=6) {
    console.log("Aprobado");
} else if (nota >= 7 & nota <= 8) {
    console.log("Notable");
} else if (nota >= 9) {
    console.log("Sobresaliente");
    console.log("Felicidades!!");
}

