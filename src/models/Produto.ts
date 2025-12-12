export enum Categoria {
    Eletronico,
    Estetica,
    Perfumaria,
    Proteina
}

export default class Produto {
    private id: string
    private nome: string
    private qtdProduto: number
    private categoria: Categoria

    public constructor(
        id: string, 
        nome: string, 
        qtdProduto: number, 
        categoria: Categoria) {
            this.id = id
            this.nome = nome
            this.qtdProduto = qtdProduto
            this.categoria = categoria
    }
    
    public get getId() : string {
        return this.id
    }

    public set setId(id: string) {
        this.id = id
    }
    
    
    public get getNome() : string {
        return this.nome
    }
    
    
    public set setNome(v : string) {
        this.nome = v;
    }

    
    public get getQtdProduto() : number {
        return this.qtdProduto
    }

    
    public set setQtdProduto(quantidadeDoProduto : number) {
        this.qtdProduto = quantidadeDoProduto;
    }
    
    
    public get getCategoria() : Categoria {
    return this.categoria;
}

    public set setCategoria(v : Categoria) {
    this.categoria = v;
}

}
