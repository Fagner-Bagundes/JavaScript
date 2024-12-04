class Ecommerce {
    constructor() {
        this.produtos = []
        this.carrinho = []
    }
    registerProcuct(name, price, stock){
        const produto = {name, price, stock}
        this.produtos.push(produto)
    };

    addInCarrinho(nome, quantity){
        const buy = {nome, quantity}
        this.carrinho.push(buy)
    }

    resultado(){
        console.log(`Loja Honux!!`);
        console.log(``);
        console.log(`produtos: `, this.produtos);
        console.log(`Seu Carrinho: `, this.carrinho);
    }
}

const loja = new Ecommerce()

loja.registerProcuct(`Caderno`, 20, 5)
loja.registerProcuct(`Bola`, 10, 4)
loja.registerProcuct(`Monitor`, 60, 2)

loja.addInCarrinho(`Caderno`, 2)
loja.addInCarrinho(`Bola`, 4)
loja.addInCarrinho(`Monitor`, 1)

loja.resultado()