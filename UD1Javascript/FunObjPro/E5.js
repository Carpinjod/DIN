/*5. Escribe una función que devuelva una promesa que simule consultar un servidor y
devuelva un array de usuarios después de 2 segundos (setTimeout).

        o Si la lista está vacía, devuelve un error.
        o Consume la promesa mostrando el resultado en consola. */

let getUsersPromise = usuarios => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (usuarios.length > 0) {
                resolve(usuarios);
            } else {
                reject("Error: la lista está vacía");
            }
        }, 2000);
    });
};

let usuarios = [
    {nombre: "Ana", edad: 25},
    {nombre: "Luis", edad: 30}
];

getUsersPromise(usuarios)
    .then(resultado => {
        console.log("Usuarios recibidos: ");
        console.log(resultado);
    })
    .catch(error => {
        console.log(error);
    });