// let numeros = [1,2,3,5,6]


// let maiorQ4 = numeros.find((valor)=> valor >4)

// console.log(maiorQ4);


let objs = [
    {
        nome: "Faganer",
        endereco: {
            bairro: `Zerão`, 
            rua: `Dr.Braulino`,
            numero: 764
        }
    },
    {
        nome: "Vagner",
        endereco: {
            bairro: `congós`, 
            rua: `Dr.Braulino`,
            numero: 354
        }
    },
    {
        nome: "Magno",
        endereco: {
            bairro: `Zerão`, 
            rua: `Dr.Braulino`,
            numero: 764
        }
    }
]


let pessoa = objs.find((valor)=> valor.nome === "Magno")

let pessoaI = objs.findIndex((valor)=> valor.nome === "Fagner")


console.log(pessoa);
console.log(pessoaI);

