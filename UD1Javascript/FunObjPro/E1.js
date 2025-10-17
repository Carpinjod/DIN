/*1. Escribe una función tradicional que calcule la suma de dos números. Luego conviértela
en función anónima y en función flecha. */

// Función tradicional
function suma (num1, num2) {
    return num1 + num2;
}
console.log(suma (3, 5));

//Anónima
let suma1 = function (num1, num2) {
    return num1 + num2;
};
console.log(suma1 (4, 5));

// Flecha
let suma3 = (num1, num2) => {
    return num1 + num2;
};
console.log(suma3 (9, 5));
