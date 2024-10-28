let pontuacao = 150
let nivel;

if (pontuacao === 200) {
    nivel = `Nível ouro`
}else if(pontuacao === 150 || pontuacao === 100){
    nivel = `Nível Prata`
} else {
    nivel = `Nível Bronze`
}

console.log(nivel)





let notaAluno = {
    matematica: 3,
    portugues: 3,
    fisica: 3,
    artes: 3,
}

function mediaCalc(){
    let soma = (notaAluno.matematica + notaAluno.portugues + notaAluno.fisica + notaAluno.artes) / 4;
    return soma;
    
};

let mediaAluno = mediaCalc();
let estadoAluno;
const mediaAprovado = 6;
const mediaReprovado = 3;






if (mediaAluno >= mediaAprovado){
    estadoAluno = `Aluno Aprovado`
} else if(mediaAluno > mediaReprovado && mediaAluno < mediaAprovado){
    estadoAluno = `Aluno em recuperação`    
}else{
    estadoAluno = `Aluno Reprovado`
}

console.log(`Nome do Aluno: Fagner Ferreira`)
console.log(`Media do Aluno: ${mediaAluno}`);
console.log(`O aluno está: `,estadoAluno)