/*Ejercicio 1:
Haz un programa que muestre 3 recordatorios en diferentes momentos:
• A los 3 segundos → “Toma agua”
• A los 6 segundos → “Estírate un poco”
• A los 9 segundos → “Descansa la vista” */

setTimeout(() => {
    console.log("Toma agua");
}, 3000);

setTimeout(() => {
    console.log("Estírate un poco");
}, 6000);

setTimeout(() => {
    console.log("Descansa la vista");
}, 9000);

