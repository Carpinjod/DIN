const moment = require('moment');

let now = moment();

let before = moment('09/10/2015', 'DD/MM/YYYY');

let future = moment('09/10/2035', 'DD/MM/YYYY');

let diffYears = moment.duration(now.diff(before)).years();
console.log("Desde la fecha anterior a la actual han pasado ", diffYears, " años.");

let durationToFuture = moment.duration(future.diff(now));
console.log("Años hasta la fecha futura: ", durationToFuture.years());
console.log("Meses hasta la fecha futura: ", durationToFuture.months());


if (before.isBefore(now)) {
    console.log('La fecha antigua es anterior a la actual.');
} else {
    console.log('La fecha antigua NO es anterior a la actual.');
}

let dentroUnMes = now.add(1, 'months');
console.log('Fecha dentro de un mes: ', dentroUnMes.format("DD/MM/YYYY"));