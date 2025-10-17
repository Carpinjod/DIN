const events = require('events');

let EmisorEventos = events.EventEmitter;

let ee = new EmisorEventos();

ee.on('data', function (date) { //declaramos
    console.log(date);
});

setInterval(function () {
    ee.emit('data', Date().toString()); //disparar el evento
}, 500);