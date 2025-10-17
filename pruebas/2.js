const events = require('events');
class Person extends events.EventEmitter {
    //cada objeto de tipo Person podrá emitir eventos (emit) y escuchar
    // eventos(on).
    constructor(name) {
        super(); //EventEmitter no requiere parámetros en su constructor
        this.name = name;
    }
}
let manu = new Person('manu');
let boris = new Person('boris');
let people = [manu, boris];
people.forEach(function (littleperson) {
    littleperson.on('talk', function (message) {
        console.log(littleperson.name + ' ha dicho ' + message);
    });
});
manu.emit('talk', 'Espero que estudieis node');
boris.emit('talk', 'Lo repito mucho');