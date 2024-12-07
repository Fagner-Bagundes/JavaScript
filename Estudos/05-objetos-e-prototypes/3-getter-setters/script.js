// get e setter vão além, é uma maneira de proteger uma propriedade, imagine uma propriedade onde voce pode apenas receber numeros. 

// set(setter) --> usado para setar(modificar) o valor, não retorna nada
// Get(getter) --> usado para obter o valor e validalo


// tendo isso, você não precisa usar no defineProperty o value e writable.


function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    let estoquePrivado = estoque;
    
    // defineProperty:
    Object.defineProperty(this, `estoque`, {
        enumerable: true, 
        configurable: false, 

        get : function(){
            return estoquePrivado
        },

        set: function(valor){
            if (typeof valor !== `number`) {
                throw new TypeError("valor invalido");
                
            }
            estoquePrivado = valor
            
        }


    });
}

let p1 = new Produto(`Camisa`, 20, 3);
console.log(p1);
// para você ver o getter, voce tem que executalo:
console.log(p1.estoque);
// setando um valor graças ao setter:
p1.estoque = 7
console.log(p1.estoque);

// cuidado quando for trabalhar com propriedades de objetos, se vc mandar um this.atributo dentro de um setter, causa um loop infinito, se quiser trabalhar com propriedades de um objeto, propriedades privadas



// função construtora

function  criaProduto(nome, valor, estoque) {
    let estoquePrivado = estoque;
    return {
        nome,
        valor,

        get estoque(){
            return estoquePrivado
        },
        set estoque(valor){
            if(typeof valor !== `number`){
                throw new Error("valor de estoque invalido");  
            } 
            
            estoquePrivado = valor
        }
    }
}

let p2 = criaProduto(`mesa`, 300, 4)
console.log(p2.estoque);
p2.estoque = 8;
console.log(p2.estoque);



const produto = {};
Object.defineProperty(produto, 'preco', {
    
  get() {
    return this._preco;
  },
  set(valor) {
    if (valor < 0) {
      console.log("O preço não pode ser negativo.");
    } else {
      this._preco = valor;
    }
  },
  enumerable: true,
  configurable: true
});

produto.preco = 50;    // define o preço
console.log(produto.preco); // 50
produto.preco = -10;   // Tenta definir um valor inválido
// Saída: "O preço não pode ser negativo."





