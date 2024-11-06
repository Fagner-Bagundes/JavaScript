function criaPessoa(nome, sobrenome, idade){
    return {
        nome,
        sobrenome,
        idade,
        
        
        falaOi(frase){
            return `a pessoa ${this.nome} ${this.sobrenome} tem ${this.idade} anos e está falando que ${frase}`
        }
    }
}


let p1 = criaPessoa(`Fagner`, `Ferreira`, 19)
let p2 = criaPessoa(`Francisco`, `Santana`, 57)

console.log(p1.falaOi(`eu quero é ser dev pleno`), p2.falaOi(`o trump é maligno`));
