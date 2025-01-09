const pessoa = {
    nome: `Fagner`,
    idade: 19,
    endereco: {
        bairro: `Zerão`,
        numero: 76,
        cep: {
            cidade: `Macapá`,
            rua: `Dr.Braulino`,
            codigo: `47300923823`
        }
    }
}
// verifica se o parametro com aninhamento existe, e se não existir, retorna undefined e nao um erro
console.log(pessoa?.endereco?.cep?.codigo ?? "propriedade inexistente");

try {
    console.log(pessoa.endereco.cep.codigo)
} catch (error) {
    console.log(`propriedade não existe`);
    
}
console.log(`----------------------------------`);


// Acessar arrays:

const lista = [{nome: `Fagner`}, {nome: `Nalda`}]

console.log(lista?.[1]?.nome ?? `valor não encontrado`);
console.log(lista?.[2]?.nome ?? `valor não encontrado`);
console.log(`----------------------------------`);

// acessar metodos:

const pessoa2 = {
    nome: `Fagner`,
    idade: 19,
    endereco: `zerao`,
    // falaOi(){
    //     return this.nome + ` está falando oi`
    // }
};

console.log(pessoa2?.falaOi?.() ?? `metodo inexistente`);

