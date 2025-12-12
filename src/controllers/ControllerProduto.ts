import Produto, { Categoria } from "../models/Produto";

export default class ControllerProduto {
    private produtos: Array<Produto> = []

    constructor() {}

    public procurarPorCategoria(categoria: Categoria) {}

    public listarProdutos() {}

    public cadastrarProduto(produto: Produto) {}

    public atualizarProduto(id: string) {}

    public deletarProduto(id: string) {}
}
