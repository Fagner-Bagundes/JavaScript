function retornaaFuncao() {
    const nome = `Luiz`;
    return function (){
        return nome;
    };
};

const funcao = retornaaFuncao();
console.dir(funcao);