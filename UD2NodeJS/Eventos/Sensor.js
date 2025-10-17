const events = require('events');

class Sensor extends events.EventEmitter {
    constructor(nombre, umbral) {
        super();
        this.nombre = nombre;
        this.umbral = umbral;
        this.intervalo = null;
    }

    medir() {
        this.intervalo = setInterval(() => {
            let valor = Math.floor(Math.random() * 101);
            console.log(this.nombre, ": " + valor);
            if (valor > this.umbral) {
                this.emit('alerta', valor);
                clearInterval(this.intervalo);
            }
        }, 10000);
    }
}

let temp = new Sensor('Temperatura', 80);
let hum = new Sensor('Humedad', 90);
let pres = new Sensor('Presión', 85);

temp.on('alerta', (valor) => {
    console.log("¡Alerta! Temperatura: " + valor);
    process.exit();
});

hum.on('alerta', (valor) => {
    console.log("¡Alerta! Humedad: " + valor);
    process.exit();
});

pres.on('alerta', (valor) => {
    console.log("¡Alerta! Presión: " + valor);
    process.exit();
});

temp.medir();
hum.medir();
pres.medir();