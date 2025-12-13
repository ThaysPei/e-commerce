import Produto, { Categoria } from "../models/Produto";

export default class ControllerProduto {
    private readonly produtos: Array<Produto> = []

    constructor(){
        this.produtos.push(
            new Produto("1", "Notebook", 12, Categoria.Eletronico),
            new Produto("2", "Perfume Dior", 5, Categoria.Perfumaria)
        );
    }

    public procurarPorCategoria(categoria: Categoria) {
        const filtrados = this.produtos.filter(p => p.getCategoria === categoria);

        if (filtrados.length === 0) {
            console.log("\nNenhum produto encontrado nessa categoria.");
            return;
        }

        console.log("\n--- Produtos por Categoria ---");
        filtrados.forEach(p => console.log(`${p.getNome} - Qtd: ${p.getQtdProduto}`));
    }

    public listarProdutos() {
    if (this.produtos.length === 0) {
        console.log("\nNenhum produto cadastrado!");
        return;
    }

    console.log("\n--- Lista de Produtos ---");

    this.produtos.forEach((p) => {
        console.log(
            `ID: ${p.getId} | Nome: ${p.getNome} | Qtd: ${p.getQtdProduto} | Categoria: ${Categoria[p.getCategoria]}`
        );
    });
}
    public cadastrarProduto(produto: Produto) {
        this.produtos.push(produto);
        console.log("\nProduto cadastrado com sucesso!");
    }

   public atualizarProduto(id: string, novoNome: string) {
        const produto = this.produtos.find(p => p.getId === id);

        if (!produto) {
            console.log("\nProduto não encontrado!");
            return;
        }

        produto.setNome = novoNome;
        console.log("\nProduto atualizado com sucesso!");
    }

        public deletarProduto(id: string) {
        const idx = this.produtos.findIndex(p => p.getId === id);

        if (idx === -1) {
            console.log("\nProduto não encontrado!");
            return;
        }

        this.produtos.splice(idx, 1);
        console.log("\nProduto removido com sucesso!");
    }
}


