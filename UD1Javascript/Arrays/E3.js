/*3. Crea un array llamado colores con los elementos "rojo", "verde", "azul", "amarillo",
"naranja", "violeta". Crea un nuevo array con los colores entre las posiciones 1 y 4.
Eliminar 2 colores a partir de la posición 3 en el array original e inserta los colores
"negro" y "blanco" en esa posición.*/

var colores = ["rojo", "verde", "azul", "amarillo", "naranja", "violeta"];

var colores2 = colores.slice(1, 4);
console.log(colores2);

colores.splice(3, 2, "negro", "blanco");
console.log(colores);