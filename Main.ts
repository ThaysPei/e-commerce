import readlinesync = require('readline-sync');
import Produto, { Categoria } from './src/models/Produto';
import ControllerProduto from './src/controllers/ControllerProduto';

const UI = () => {
    console.log("*****************************************************");
    console.log("                                                     ");
    console.log("                 E-COMMERCE CLICK BOX                ");
    console.log("                                                     ");
    console.log("*****************************************************");
    console.log("                                                     ");
    console.log("            1 - Listar produtos                      ");
    console.log("            2 - Adicionar ao carrinho                ");
    console.log("            3 - Remover do carrinho                  ");
    console.log("            4 - Ver carrinho                         ");
    console.log("            5 - Finalizar compra                     ");
    console.log("            6 - Sair                                 ");
    console.log("                                                     ");
    console.log("*****************************************************");
    console.log("                                                     ");
}

export function main(){
    const p1 = new Produto("1", "batata", 356, Categoria.Proteina)
    const controllerProduto = new ControllerProduto()
}
main(); 