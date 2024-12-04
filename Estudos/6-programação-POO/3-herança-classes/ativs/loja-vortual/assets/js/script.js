const ProductsInput = document.querySelector(`.produtos`)
const carrinhosInput = document.querySelector(`.carrinho`)

function criaEstilos(div) {
    div.style.fontSize = `1em`
    div.style.padding = `10px`
    div.style.textAlign = `start`
    div.style.width = `50%`
}
function criaDiv(classe, content) {
    const div = document.createElement(`div`)
    div.classList.add(classe)
    if (classe === `produto`) {
        div.textContent = `${content.name}: ${content.price} ------- Estoque: ${content.stock}`
        criaEstilos(div)
    }else{
        div.classList.add(classe)
        div.textContent = `${content.name}: ${content.quantity}`
        criaEstilos(div)
    }
    return div
}

function adicionaDiv(div, classe, content) {
    div.insertAdjacentElement(`afterend`, criaDiv(classe, content))
}



class Ecommerce {
    constructor() {
        this.produtos = []
        this.carrinho = []
    }
    registerProcuct(name, price, stock){
        const produto = {name, price, stock}
        this.produtos.push(produto)
        adicionaDiv(ProductsInput,`produto`,produto)
    };

    addInCarrinho(name, quantity){
        const buy = {name, quantity}
        this.carrinho.push(buy)
        adicionaDiv(carrinhosInput,`carrinho-product`,buy)
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