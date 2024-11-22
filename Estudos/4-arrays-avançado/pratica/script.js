let pessoas = [
    { nome: `Fagner`, idade: 18},
    { nome: `Franci`, idade: 35},
    { nome: `Magno`, idade: 32}
]


pessoas.map((valor, i) =>{
    valor.cidade = `Macapá`
    console.log(valor);  
})