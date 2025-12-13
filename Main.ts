import readlinesync = require('readline-sync');
import Produto, { Categoria } from './src/models/Produto';
import ControllerProduto from './src/controllers/ControllerProduto';

const UI = () => {
    console.clear()
    console.log("*****************************************************");
    console.log("                                                     ");
    console.log("                 E-COMMERCE CLICK BOX                ");
    console.log("                                                     ");
    console.log("*****************************************************");
    console.log("                                                     ");
    console.log("            1 - Listar produtos                      ");
    console.log("            2 - Cadastrar produtos                   ");
    console.log("            3 - Buscar por categoria                 ");
    console.log("            4 - Atualizar produto                    ");
    console.log("            5 - Deletar produto                      ");
    console.log("            6 - Sair                                 ");
    console.log("                                                     ");
    console.log("*****************************************************");
    console.log("                                                     ");
};

export function main() {
    const p1 = new Produto("1", "batata", 356, Categoria.Proteina);
    const controllerProduto = new ControllerProduto();
    

    while (true) {
        UI();
        const opc = Number(readlinesync.question("Escolha uma opcao: "));

        switch (opc) {

            case 1:
                controllerProduto.listarProdutos();
                break;

            case 2:
                console.log("\n--- Cadastro de Produto ---");
                const id = readlinesync.question("ID: ");
                const nome = readlinesync.question("Nome: ");
                const qtd = Number(readlinesync.question("Quantidade: "));

                console.log("\nCategorias:");
                console.log("0 - Eletronico\n1 - Estetica\n2 - Perfumaria\n3 - Proteina");
                const cat = Number(readlinesync.question("Categoria: ")) as Categoria;

                const novoProduto = new Produto(id, nome, qtd, cat);
                controllerProduto.cadastrarProduto(novoProduto);
                break;

            case 3:
                console.log("\n--- Buscar por Categoria ---");
                console.log("0 - Eletronico\n1 - Estetica\n2 - Perfumaria\n3 - Proteina");
                const categoriaBusca = Number(readlinesync.question("Categoria: ")) as Categoria;

                controllerProduto.procurarPorCategoria(categoriaBusca);
                break;

            case 4:
                console.log("\n--- Atualizar Produto ---");
                const idUpdate = readlinesync.question("ID do produto: ");
                const novoNome = readlinesync.question("Novo nome: ");
                controllerProduto.atualizarProduto(idUpdate, novoNome);
                break;

            case 5:
                console.log("\n--- Deletar Produto ---");
                const idDelete = readlinesync.question("ID do produto: ");
                controllerProduto.deletarProduto(idDelete);
                break;

            case 6:
                console.log("\nSaindo...");
                return;

            default:
                console.log("\nOpcao invalida!");
        }

        console.log("\nPressione ENTER para continuar...");
        readlinesync.question("");
    }
}

main();




