/*3. Simula un sistema de registro de estudiantes:
    o Define una clase Estudiante con nombre, edad y notas.
    o Crea un método para calcular la media de notas.
    o Define una promesa que valide si la media es mayor o igual a 5:
        ▪ resolve("Aprobado")
        ▪ reject("Suspendido")
    o Crea varios estudiantes y evalúalos con then y catch. */


class Estudiante {
    constructor(nombre, edad, notas) {
        this.nombre = nombre;
        this.edad = edad;
        this.notas = notas;
    }

    calcularMedia() {
        let suma = 0;
        for (let i = 0; i < this.notas.length; i++) {
            suma += this.notas[i];
        }
        let media = suma / this.notas.length;
        return media;
    }

    estaAprobado() {
        let media = this.calcularMedia();
        return new Promise((resolve, reject) => {
            if (media >= 5) {
                resolve("Aprobado");
            } else {
                reject("Suspendido");
            }
        });
    }
}

let e1 = new Estudiante("Carlos", 24, [6, 7, 8]);
let e2 = new Estudiante("Luis", 20, [5, 2, 3]);
let e3 = new Estudiante("Roberto", 29, [6, 9, 10]);

e1.estaAprobado()
    .then(function(resultado) {
        console.log(e1.nombre + ": " + resultado);
    })
    .catch(function(error) {
        console.log(e1.nombre + ": " + error);
    })

e2.estaAprobado()
    .then(function(resultado) {
        console.log(e2.nombre + ": " + resultado);
    })
    .catch(function(error) {
        console.log(e2.nombre + ": " + error);
    });

e3.estaAprobado()
    .then(function(resultado) {
        console.log(e3.nombre + ": " + resultado);
    })
    .catch(function(error) {
        console.log(e3.nombre + ": " + error);
    });

