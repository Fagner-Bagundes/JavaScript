const ProductsInput = document.querySelector(`.produtos`)
const carrinhosInput = document.querySelector(`.carrinho`)

function criaEstilos(div) {
    div.style.fontSize = `1em`
    div.style.padding = `10px`
    div.style.textAlign = `start`
    div.style.width = `90%`
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

function AdicionaContudo(content) {
    console.log(content);

    produtoElement.innerText = `${content.name}: ${content.price} ------- Estoque: ${content.stock}`
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
        this.produtos.map((valor, i)=>{
            if (name === valor.name) {
                if (quantity > valor.stock) {
                    alert(`não existe produto suficiente para essa compra!`)
                }else{
                    this.carrinho.push(buy)
                    this.produtos[i].stock -=1;
                    AdicionaContudo(this.produtos[i])

                    adicionaDiv(carrinhosInput,`carrinho-product`,buy)
                }
            }
        })

    }

}

const loja = new Ecommerce()

const carrinhoElement = document.querySelectorAll(`.carrinho-product`)



loja.registerProcuct(`Caderno`, 20, 5)
loja.registerProcuct(`Bola`, 10, 4)
loja.registerProcuct(`Monitor`, 60, 2)


// loja.addInCarrinho(`Bola`, 4)
// loja.addInCarrinho(`Bola`, 2)
// loja.addInCarrinho(`Monitor`, 1)

