const pessoa = {
    nome: `Fagner`,
    idade: 19,
    endereco: {
        bairro: `Zerão`,
        numero: 76,
        // cep: {
        //     cidade: `Macapá`,
        //     rua: `Dr.Braulino`,
        //     codigo: `47300923823`
        // }
    }
}
// verifica se o parametro com aninhamento existe, e se não existir, retorna undefined e nao um erro
console.log(pessoa?.endereco?.cep?.codigo);
