/*Ejercicio 2 */

const newPerson = (person, data) => {
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

const deletePerson = (phone, data) => {
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

module.exports = { newPerson, deletePerson };