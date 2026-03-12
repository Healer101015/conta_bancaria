import { Conta } from "../model/Conta";
import { ContaRepository } from "../repository/ContaRepository";

export class ContaController implements ContaRepository {
    private listaContas: Array<Conta> = new Array<Conta>();
    public numero: number = 0;

    procurarPorNumero(numero: number): void {
        let conta = this.buscarNoArray(numero);

        if (conta !== null) {
            conta.visualizar();
        } else {
            console.log("\nA Conta numero: " + numero + " não foi encontrada!");
        }
    }

    listarTodas(): void {
        for (let conta of this.listaContas) {
            conta.visualizar();
        }
    }

    cadastrar(conta: Conta): void {
        this.listaContas.push(conta);
        console.log("\nA Conta numero: " + conta.numero + " foi criada com sucesso!");
    }

    atualizar(conta: Conta): void {
        let buscaConta = this.buscarNoArray(conta.numero);

        if (buscaConta !== null) {
            this.listaContas[this.listaContas.indexOf(buscaConta)] = conta;
            console.log("\nA Conta numero: " + conta.numero + " foi atualizada com sucesso!");
        } else {
            console.log("\nA Conta numero: " + conta.numero + " não foi encontrada!");
        }
    }

    deletar(numero: number): void {
        let conta = this.buscarNoArray(numero);

        if (conta !== null) {
            this.listaContas.splice(this.listaContas.indexOf(conta), 1);
            console.log("\nA Conta numero: " + numero + " foi deletada com sucesso!");
        } else {
            console.log("\nA Conta numero: " + numero + " não foi encontrada!");
        }
    }

    sacar(numero: number, valor: number): void {
        let conta = this.buscarNoArray(numero);

        if (conta !== null) {
            if (conta.sacar(valor) === true) {
                console.log("\nO Saque na Conta numero: " + numero + " foi efetuado com sucesso!");
            }
        } else {
            console.log("\nA Conta numero: " + numero + " não foi encontrada!");
        }
    }

    depositar(numero: number, valor: number): void {
        let conta = this.buscarNoArray(numero);

        if (conta !== null) {
            conta.depositar(valor);
            console.log("\nO Depósito na Conta numero: " + numero + " foi efetuado com sucesso!");
        } else {
            console.log("\nA Conta numero: " + numero + " não foi encontrada ou a Conta destino não é uma Conta Corrente!");
        }
    }

    transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
        let contaOrigem = this.buscarNoArray(numeroOrigem);
        let contaDestino = this.buscarNoArray(numeroDestino);

        if (contaOrigem !== null && contaDestino !== null) {
            if (contaOrigem.sacar(valor) === true) {
                contaDestino.depositar(valor);
                console.log("\nA Transferência foi efetuada com sucesso!");
            }
        } else {
            console.log("\nA Conta de Origem e/ou Destino não foram encontradas!");
        }
    }

    public gerarNumero(): number {
        return ++this.numero;
    }

    public buscarNoArray(numero: number): Conta | null {
        for (let conta of this.listaContas) {
            if (conta.numero === numero) {
                return conta;
            }
        }
        return null;
    }
}