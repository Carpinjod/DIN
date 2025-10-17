class Person {
    constructor(firstname, lastname, birthday) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.birthday = new Date (birthday);
    }

    getAge() {
    const today = new Date();
    let age = today.getFullYear() - this.birthday.getFullYear();
    return age;
    }
}

const p = new Person('Paul', 'Almunia', '2005-11-20');
console.log(p.getAge()); // calcula la edad real