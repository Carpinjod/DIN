/*Ejercicio 1.
Crea un archivo llamado "arrow_functions.js" con el siguiente código:
let data = [
{name: "Nacho", phone: "966112233", age: 40},
{name: "Ana", phone: "911223344", age: 35},
{name: "Mario", phone: "611998877", age: 15},
{name: "Laura", phone: "633663366", age: 17}
];
newPerson ({name: "Juan", phone: "965661564", age: 60});
newPerson ({name: "Rodolfo", phone: "910011001", age: 20});
deletePerson ("910011001");
console.log (data);
Debes implementar las funciones "newPerson" y "deletePerson" para que hagan su
trabajo. El primero recibirá como parámetro a la persona y, si el teléfono no existe en
el vector de personas, agregará a esa persona.
En cuanto a "deletePerson", eliminará del vector a la persona que tiene dicho número
de teléfono, si es que existe.
Intenta utilizar funciones flecha para realizar el ejercicio. */

let data = [
    { name: "Nacho", phone: "966112233", age: 40 },
    { name: "Ana", phone: "911223344", age: 35 },
    { name: "Mario", phone: "611998877", age: 15 },
    { name: "Laura", phone: "633663366", age: 17 }
];

const newPerson = person => {
    let existe = data.some(p => p.phone === person.phone);
    if (!existe) {
        data.push(person);
    }
};

const deletePerson = phone => {
    let index = data.findIndex(p => p.phone === phone);
    if (index !== -1) {
        data.splice(index, 1);
    }
};

newPerson({ name: "Juan", phone: "965661564", age: 60 });
newPerson({ name: "Rodolfo", phone: "910011001", age: 20 });
deletePerson("966112233");
console.log(data);