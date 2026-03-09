import readlineSync from "readline-sync";
import { Colors } from "./util/Colors";

function keyPress(): void {
    console.log(
        Colors.format("\nPressione Enter para continuar...", Colors.fg.yellow)
    );
    readlineSync.question("");
}

function logo(): void {
    const amareloNoPreto = Colors.bg.black + Colors.fg.yellow;

    console.log(amareloNoPreto + "************************************************************");
    console.log("                                                            ");
    console.log("                    BANCO DO BRAZIL COM Z                   ");
    console.log("                                                            ");
    console.log("************************************************************");
    console.log("                                                            ");
    console.log("           1 - Criar Conta                                  ");
    console.log("           2 - Listar todas as Contas                       ");
    console.log("           3 - Buscar Conta por Numero                      ");
    console.log("           4 - Atualizar Dados da Conta                     ");
    console.log("           5 - Apagar Conta                                 ");
    console.log("           6 - Sacar                                        ");
    console.log("           7 - Depositar                                    ");
    console.log("           8 - Transferir valores entre Contas              ");
    console.log("           9 - Sair                                         ");
    console.log("                                                            ");
    console.log("************************************************************");
    console.log(Colors.reset);
}

let opcao: number;

while (true) {
    logo();

    console.log(
        Colors.format("Entre com a opção desejada: ", Colors.fg.yellow)
    );
    opcao = readlineSync.questionInt("");

    if (opcao === 9) {
        console.log(
            Colors.format("\nBanco do Brazil com Z - O seu futuro começa aqui!", Colors.fg.green)
        );
        console.log(Colors.format("Volte sempre!\n", Colors.fg.green));
        process.exit(0);
    }

    switch (opcao) {
        case 1:
            console.log(Colors.format("\nCriar Conta\n", Colors.fg.cyan));
            keyPress();
            break;

        case 2:
            console.log(Colors.format("\nListar todas as Contas\n", Colors.fg.cyan));
            keyPress();
            break;

        case 3:
            console.log(Colors.format("\nBuscar Conta por Numero\n", Colors.fg.cyan));
            keyPress();
            break;

        case 4:
            console.log(Colors.format("\nAtualizar Dados da Conta\n", Colors.fg.cyan));
            keyPress();
            break;

        case 5:
            console.log(Colors.format("\nApagar Conta\n", Colors.fg.cyan));
            keyPress();
            break;

        case 6:
            console.log(Colors.format("\nSacar\n", Colors.fg.cyan));
            keyPress();
            break;

        case 7:
            console.log(Colors.format("\nDepositar\n", Colors.fg.cyan));
            keyPress();
            break;

        case 8:
            console.log(
                Colors.format("\nTransferir valores entre Contas\n", Colors.fg.cyan)
            );
            keyPress();
            break;

        default:
            console.log(Colors.format("\nOpção Inválida!\n", Colors.fg.red));
            keyPress();
            break;
    }
}