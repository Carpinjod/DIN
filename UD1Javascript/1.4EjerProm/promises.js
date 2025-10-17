/*Ejercicio 2
Crear un archivo llamado "promises.js", que sea copia de "arrow_functions.js" del
ejercicio anterior.
Lo que harás en este ejercicio es adaptar las dos funciones "newPerson" y
"deletePerson" para que devuelvan una promesa.
• En el caso de "newPerson", se devolverá el objeto persona insertado con resolve, si la
inserción fue exitosa, o con reject el mensaje "Error: el teléfono ya existe" si la persona
no pudo ser insertada porque su teléfono ya existía en el vector.
• En el caso de "deletePerson", el objeto de persona eliminada se devolverá con resolve,
si la eliminación fue exitosa, o con un mensaje de reject "Error: no se encontraron
coincidencias" si no había ninguna persona con ese teléfono en el vector.
Modifique el código del programa principal para que intente agregar y eliminar una
persona incorrecta (el teléfono ya existe en el vector). */

let data = [
    { name: "Nacho", phone: "966112233", age: 40 },
    { name: "Ana", phone: "911223344", age: 35 },
    { name: "Mario", phone: "611998877", age: 15 },
    { name: "Laura", phone: "633663366", age: 17 }
];

const newPerson = person => {
    return new Promise((resolve, reject) => {
        let existe = data.some(p => p.phone === person.phone);
        if (!existe) {
            data.push(person);
            resolve(person);
        } else {
            reject("Error: el teléfono ya existe");
        }
    });
};

const deletePerson = phone => {
    return new Promise((resolve, reject) => {
        let index = data.findIndex(p => p.phone === phone);
        if (index !== -1) {
            let eliminado = data.splice(index, 1)[0];
            resolve(eliminado);
        } else {
            reject("Error: no se encontraron coincidencias");
        }
    });
};

newPerson({ name: "Juan", phone: "965661564", age: 60 });
newPerson({ name: "Rodolfo", phone: "910011001", age: 20 });
deletePerson("910011001");
console.log(data);