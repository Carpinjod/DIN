const EventEmitter = require('events');

class Sensor extends EventEmitter {
    constructor(nombre, umbral) {
        super();
        this.nombre = nombre;
        this.umbral = umbral;
    }

    iniciar() {
        this.intervalo = setInterval(() => {
            const valor = Math.floor(Math.random() * 101);
            console.log(this.nombre, ':', valor);

            if (valor > this.umbral) {
                this.emit('alerta', valor);
                clearInterval(this.intervalo);
            }
        }, 3000);
    }
}


const temp = new Sensor('Temperatura', 80);
const hum = new Sensor('Humedad', 90);
const pres = new Sensor('Presión', 85);

function manejarAlerta(valor) {
    console.log('¡Alerta!: El sensor ha superado el umbral con valor', valor);
    console.log('Deteniendo el sistema...');
    process.exit();
}

[temp, hum, pres].forEach(Sensor => {
    Sensor.on('alerta', manejarAlerta);
    Sensor.iniciar();
});

