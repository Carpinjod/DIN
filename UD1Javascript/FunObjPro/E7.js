/*7. Crea una clase CuentaBancaria con métodos depositar y retirar.

        o Simula operaciones y consulta su saldo actual.*/


class CuentaBancaria {
    constructor(saldoInicial = 0) {
        this.saldo = saldoInicial;
    }

    depositar(cantidad) {
        this.saldo += cantidad;
    }

    retirar(cantidad) {
        if (cantidad <= this.saldo) {
            this.saldo -= cantidad;
        } else {
            console.log("Fondos insuficientes")
        }
    }

    consultarSaldo() {
        return this.saldo;
    }
}

let cuenta = new CuentaBancaria(200);
cuenta.retirar(220);
cuenta.depositar(200);
console.log("Saldo final: ", cuenta.consultarSaldo());
