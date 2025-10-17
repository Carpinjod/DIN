/*Declara una variable global con var mensaje = "Hola";.
Dentro de un if (true), declara otra variable con let mensaje = "Adiós"; y muestra su
valor.
Después, imprime mensaje fuera del bloque. ¿Son iguales los dos valores?
Ahora prueba a usar en los 2 casos let. ¿Cambia algo?
Finalmente prueba a usar en los 2 casos var. ¿Cambia algo?*/

var mensaje = "Hola";

if (true) {
    var mensaje = "Adiós";
    console.log(mensaje);
}

console.log(mensaje);

// No son iguales ya que let crea una variable distinta dentro del bloque.
// No cambia nada.
// En los dos se imprime adiós, ya que es la misma variable en los dos casos, por lo que sobreescribe el valor.