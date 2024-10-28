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
