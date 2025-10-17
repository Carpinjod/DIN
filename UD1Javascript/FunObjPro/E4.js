/*4. Crea una promesa que simule comprobar si un número es par.
    - Si lo es → resolve("El número es par").
    - Si no lo es → reject("El número es impar").
    Consume la promesa con then y catch. */

let numPar = numero => {
    return new Promise ((resolve, reject) => {
        if (numero % 2 === 0) {
            resolve ("El número es par.");
        } else {
            reject ("El número es impar.");
        }
    });
};

let num = 7;

numPar(num)
    .then(resultado => {
        console.log(resultado);
    })
    .catch(error => {
        console.log(error);
    });