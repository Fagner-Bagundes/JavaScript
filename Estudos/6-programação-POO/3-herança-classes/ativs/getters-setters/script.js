class Produto {
    #_preco
    constructor(preco) {
        this.#_preco = preco
    }
    get preco(){
        return this.#_preco 
    }
    set preco(valor){
        if (!valor || valor<0) {
            console.error(`Error`);
            return
        }
        this.#_preco = valor
    }
}

class Livro extends Produto {
    constructor(preco, titulo) {
        super(preco);
        this.titulo = titulo
    }
    mostraLivro(){
        console.log(`Nome: `, this.titulo);
        console.log(`Preço: `, this.preco);
    }
}

const livro1 = new Livro(20, `Mitologia Nordica`)

livro1.mostraLivro()
livro1.preco = 10
livro1.mostraLivro()
livro1.preco = 50
livro1.mostraLivro()