import readlineSync from "readline-sync";
import { Colors } from "./util/Colors";
import { ContaController } from "./controller/ContaController";
import { ContaCorrente } from "./model/ContaCorrente";
import { ContaPoupanca } from "./model/ContaPoupanca";

export function main() {
    let opcao: number;
    let numero: number, agencia: number, tipo: number, saldo: number, limite: number, aniversario: number;
    let titular: string;
    let numeroDestino: number;
    let valor: number;

    const tiposContas = ['Conta Corrente', 'Conta Poupanca'];
    const contas: ContaController = new ContaController();

    console.log(Colors.format("\nCriar Contas\n", Colors.fg.cyan));
    let cc1: ContaCorrente = new ContaCorrente(contas.gerarNumero(), 123, 1, "João da Silva", 1000, 100.0);
    contas.cadastrar(cc1);
    let cc2: ContaCorrente = new ContaCorrente(contas.gerarNumero(), 124, 1, "Maria da Silva", 2000, 100.0);
    contas.cadastrar(cc2);
    let cp1: ContaPoupanca = new ContaPoupanca(contas.gerarNumero(), 125, 2, "Mariana dos Santos", 4000, 12);
    contas.cadastrar(cp1);
    let cp2: ContaPoupanca = new ContaPoupanca(contas.gerarNumero(), 125, 2, "Juliana Ramos", 8000, 15);
    contas.cadastrar(cp2);

    while (true) {
        console.log(Colors.bg.black + Colors.fg.yellow + "*****************************************************" + Colors.reset);
        console.log(Colors.bg.black + Colors.fg.yellow + "                                                     " + Colors.reset);
        console.log(Colors.bg.black + Colors.fg.yellow + "                BANCO DO BRAZIL COM Z                " + Colors.reset);
        console.log(Colors.bg.black + Colors.fg.yellow + "                                                     " + Colors.reset);
        console.log(Colors.bg.black + Colors.fg.yellow + "*****************************************************" + Colors.reset);
        console.log(Colors.bg.black + Colors.fg.yellow + "                                                     " + Colors.reset);
        console.log(Colors.bg.black + Colors.fg.yellow + "            1 - Criar Conta                          " + Colors.reset);
        console.log(Colors.bg.black + Colors.fg.yellow + "            2 - Listar todas as Contas               " + Colors.reset);
        console.log(Colors.bg.black + Colors.fg.yellow + "            3 - Buscar Conta por Numero              " + Colors.reset);
        console.log(Colors.bg.black + Colors.fg.yellow + "            4 - Atualizar Dados da Conta             " + Colors.reset);
        console.log(Colors.bg.black + Colors.fg.yellow + "            5 - Apagar Conta                         " + Colors.reset);
        console.log(Colors.bg.black + Colors.fg.yellow + "            6 - Sacar                                " + Colors.reset);
        console.log(Colors.bg.black + Colors.fg.yellow + "            7 - Depositar                            " + Colors.reset);
        console.log(Colors.bg.black + Colors.fg.yellow + "            8 - Transferir valores entre Contas      " + Colors.reset);
        console.log(Colors.bg.black + Colors.fg.yellow + "            9 - Sair                                 " + Colors.reset);
        console.log(Colors.bg.black + Colors.fg.yellow + "                                                     " + Colors.reset);
        console.log(Colors.bg.black + Colors.fg.yellow + "*****************************************************" + Colors.reset);
        console.log("");

        console.log(Colors.format("Entre com a opção desejada: ", Colors.fg.yellow));
        opcao = readlineSync.questionInt("");

        if (opcao === 9) {
            console.log(Colors.format("\nBanco do Brazil com Z - O seu Futuro começa aqui!", Colors.fg.green));
            sobre();
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log(Colors.format("\n\nCriar Conta\n\n", Colors.fg.cyan));
                console.log("Digite o Número da agência: ");
                agencia = readlineSync.questionInt("");
                console.log("Digite o Nome do Titular da conta: ");
                titular = readlineSync.question("");
                console.log("Digite o tipo da Conta: ");
                tipo = readlineSync.keyInSelect(tiposContas, "", { cancel: false }) + 1;
                console.log("Digite o Saldo da conta (R$): ");
                saldo = readlineSync.questionFloat("");

                switch (tipo) {
                    case 1:
                        console.log("Digite o Limite da Conta (R$): ");
                        limite = readlineSync.questionFloat("");
                        contas.cadastrar(new ContaCorrente(contas.gerarNumero(), agencia, tipo, titular, saldo, limite));
                        break;
                    case 2:
                        console.log("Digite o Dia do aniversário da Conta Poupança: ");
                        aniversario = readlineSync.questionInt("");
                        contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), agencia, tipo, titular, saldo, aniversario));
                        break;
                }
                keyPress();
                break;
            case 2:
                console.log(Colors.format("\n\nListar todas as Contas\n\n", Colors.fg.cyan));
                contas.listarTodas();
                keyPress();
                break;
            case 3:
                console.log(Colors.format("\n\nConsultar dados da Conta - por número\n\n", Colors.fg.cyan));
                console.log("Digite o número da conta: ");
                numero = readlineSync.questionInt("");
                contas.procurarPorNumero(numero);
                keyPress();
                break;
            case 4:
                console.log(Colors.format("\n\nAtualizar dados da Conta\n\n", Colors.fg.cyan));
                console.log("Digite o número da conta: ");
                numero = readlineSync.questionInt("");

                let conta = contas.buscarNoArray(numero);

                if (conta !== null) {
                    console.log("Digite o Numero da Agência: ");
                    agencia = readlineSync.questionInt("");
                    console.log("Digite o Nome do Titular: ");
                    titular = readlineSync.question("");
                    tipo = conta.tipo;
                    console.log("Digite o Saldo da Conta (R$): ");
                    saldo = readlineSync.questionFloat("");

                    switch (tipo) {
                        case 1:
                            console.log("Digite o Limite de Crédito (R$): ");
                            limite = readlineSync.questionFloat("");
                            contas.atualizar(new ContaCorrente(numero, agencia, tipo, titular, saldo, limite));
                            break;
                        case 2:
                            console.log("Digite o dia do Aniversario da Conta: ");
                            aniversario = readlineSync.questionInt("");
                            contas.atualizar(new ContaPoupanca(numero, agencia, tipo, titular, saldo, aniversario));
                            break;
                    }
                } else {
                    console.log(Colors.format("\nA Conta numero: " + numero + " não foi encontrada!", Colors.fg.red));
                }
                keyPress();
                break;
            case 5:
                console.log(Colors.format("\n\nApagar uma Conta\n\n", Colors.fg.cyan));
                console.log("Digite o número da conta: ");
                numero = readlineSync.questionInt("");
                contas.deletar(numero);
                keyPress();
                break;
            case 6:
                console.log(Colors.format("\n\nSaque\n\n", Colors.fg.cyan));
                console.log("Digite o Numero da conta: ");
                numero = readlineSync.questionInt("");
                console.log("Digite o Valor do Saque (R$): ");
                valor = readlineSync.questionFloat("");
                contas.sacar(numero, valor);
                keyPress();
                break;
            case 7:
                console.log(Colors.format("\n\nDepósito\n\n", Colors.fg.cyan));
                console.log("Digite o Numero da conta: ");
                numero = readlineSync.questionInt("");
                console.log("Digite o Valor do Depósito (R$): ");
                valor = readlineSync.questionFloat("");
                contas.depositar(numero, valor);
                keyPress();
                break;
            case 8:
                console.log(Colors.format("\n\nTransferência entre Contas\n\n", Colors.fg.cyan));
                console.log("Digite o Numero da Conta de Origem: ");
                numero = readlineSync.questionInt("");
                console.log("Digite o Numero da Conta de Destino: ");
                numeroDestino = readlineSync.questionInt("");
                console.log("Digite o Valor da Transferência (R$): ");
                valor = readlineSync.questionFloat("");
                contas.transferir(numero, numeroDestino, valor);
                keyPress();
                break;
            default:
                console.log(Colors.format("\nOpção Inválida!\n", Colors.fg.red));
                keyPress();
                break;
        }
    }
}

function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: ");
    console.log("Generation Brasil - generation@generation.org");
    console.log("github.com/conteudoGeneration");
    console.log("*****************************************************");
}

function keyPress(): void {
    console.log(Colors.format("\nPressione enter para continuar...", Colors.fg.yellow));
    readlineSync.prompt();
}

main();