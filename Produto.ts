import readlinesync = require('readline-sync');

export function main(){

let opcao: number;

    while(true){


        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("                 E - COMMERCE                        ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Listar produtos                      ");
        console.log("            2 - Adicionar ao carrinho                ");
        console.log("            3 - Remover do carrinho                  ");
        console.log("            4 - Ver carrinho                         ");
        console.log("            5 - Finalizar compra                     ");
        console.log("            9 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

         if (opcao == 9) {
            console.log("\nBanco do Brazil com Z - O seu Futuro começa aqui!");
            sobre();
            process.exit(0);
         }
    
        switch(opcao){
            case 1:
                console.log("Aqui vão os cases")

            break;
            keyPress();
            case 2:
                console.log("Aqui vão os cases");


            case 3:
            console.log("Aqui vão os cases");

            break;
            keyPress();
            case 4:
            console.log("Aqui vão os cases");

            break;
            keyPress();


            default:
                console.log("Digite uma opção válida: ")
         
            break;
            keyPress();
        }
    
/* Função com os dados da pessoa desenvolvedora */
function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: Thays Peixoto da Silva");
    console.log("Generation Brasil - thabysilva12@gmail.com");
    console.log("https://github.com/ThaysPei");
    console.log("*****************************************************");
}

function keyPress(): void {
    console.log("");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}
    
main(); 