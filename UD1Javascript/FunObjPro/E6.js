/*6. Define una clase Coche con propiedades marca, modelo, año y un método 
getAntiguedad() que calcule cuántos años tiene el coche.

    o Crea 2 instancias y muestra la antigüedad en consola. */


class Coche {
    constructor(marca, modelo, año) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }

    getAntiguedad() {
        const today = new Date();
        return today.getFullYear() - this.año;
    }
}

const c = new Coche('Seat', 'Córdoba', 2005);
console.log(c.getAntiguedad());