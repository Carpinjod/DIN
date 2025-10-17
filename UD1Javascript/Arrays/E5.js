/*5. Dado el array edades = [25, 30, 18, 40, 25, 30], encuentra la posición de la primera
aparición del número 30 y la posición de la última aparición del número 25.*/

var edades = [25, 30, 18, 40, 25, 30];

var primera30 = edades.indexOf(30);
var ultima25 = edades.lastIndexOf(25);

console.log("Primera aparición del 30: " + primera30);
console.log("Última aparición del 25: " + ultima25);

