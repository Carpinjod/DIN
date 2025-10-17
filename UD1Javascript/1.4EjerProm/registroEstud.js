/*Ejercicio 3
Simula un sistema de registro de estudiantes:
      o Define una clase Estudiante con nombre, edad y notas.
      o Crea un método para calcular la media de notas.
      o Define una promesa que valide si la media es mayor o igual a 5:
         ▪ resolve("Aprobado")
         ▪ reject("Suspendido")
      o Crea varios estudiantes y evalúalos con then y catch */

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
      return suma / this.notas.length;
   }
}

function evaluarEstudiante(estudiante) {
   return new Promise((resolve, reject) => {
      let media = estudiante.calcularMedia();
      if (media >= 5) {
         resolve("Aprobado");
      } else {
         reject("Suspendido");
      }
   });
}

let e1 = new Estudiante("Ana", 20, [7, 6, 8]);
let e2 = new Estudiante("Luis", 25, [4, 3, 5]);
let e3 = new Estudiante("Carlos", 28, [7, 9, 10]);

evaluarEstudiante(e1)
   .then(resultado => console.log(e1.nombre + ": " + resultado))
   .catch(error => console.log(e1.nombre + ": " + error));

evaluarEstudiante(e2)
   .then(resultado => console.log(e2.nombre + ": " + resultado))
   .catch(error => console.log(e2.nombre + ": " + error));

evaluarEstudiante(e3)
   .then(resultado => console.log(e3.nombre + ": " + resultado))
   .catch(error => console.log(e3.nombre + ": " + error));