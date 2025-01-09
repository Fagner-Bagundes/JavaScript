function RetornaFuncao(nome) {
    return function() {
        return nome;
    }
}

const funcao = RetornaFuncao(`Fagner`);
const funcao2 = RetornaFuncao(`Magno`);

console.log(funcao(), funcao2());
