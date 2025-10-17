class Person {
    constructor(firstname, lastname, birthday) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.birthday = new Date(birthday);
}

    getAge() {
        const today = new Date();
        let age = today.getFullYear() - this.birthday.getFullYear();
        return age;
    }

    toString() {
        return this.firstname + ' ' + this.lastname + '(' + this.getAge() + ')';
    }
}

var p = new Person('Paul', 'Almunia', '07-08-1966');
/* Produce una llamada implícita to toString () ya que intenta concatenar
una cadena con un //objeto “p”. Si hay uno lo usa, sino usa el heredado
de Object.*/
console.log('Person:' + p);