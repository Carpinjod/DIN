/*2. Crea un array de objetos con productos (nombre, precio, stock) y usa filter con una
función flecha para obtener solo los que tengan stock mayor que 0. */

var productos = [
    {nombre: "lápiz", precio: 1, stock: 10},
    {nombre: "mesa", precio: 10, stock: 0},
    {nombre: "torre", precio: 4, stock: 15},
];

var disponibles = productos.filter (productos => productos.stock > 0);

console.log(disponibles);