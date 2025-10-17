/*8. Crea una clase Animal con propiedades nombre y edad, y un método emitirSonido() que
imprima “sonido genérico”.

        o Define una clase Perro que herede de Animal que sobreescriba el método para
        imprimir “¡Guau!”.
        o Crea un objeto Perro y prueba los métodos. */


class Animal {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    emitirSonido() {
        console.log('Sonido genérico')
    }
}

class Perro extends Animal {
    emitirSonido() {
        console.log('¡Guau!');
    }
}

let miPerro = new Perro('Mika', 10);
miPerro.emitirSonido();
console.log("Nombre: " + miPerro.nombre + ", Edad: " + miPerro.edad + " años");