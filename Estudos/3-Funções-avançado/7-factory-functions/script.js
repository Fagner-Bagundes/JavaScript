function criaPessoa(nome, sobrenome, idade, altura, peso){
    return {
        nome,
        sobrenome,
        idade,
        altura,
        peso,
        
        falaOi(frase){
            return `a pessoa ${this.nome} ${this.sobrenome} tem ${this.idade} anos e está falando que ${frase} e seu imc é: ${this.IMC}`
        },

        get IMC(){
            const indice = this.peso / (this.altura ** 2)
            return indice.toFixed(2)
        },

        // getter
        get nomeCompleto(){
           return this.nome +` `+  this.sobrenome
        },
        // setter
        set nomeCompleto(valor){
            valor = valor.split(` `);
            this.nome = valor.shift()
            this.sobrenome = valor.slice(0, valor.length)
            
        }

    }
}


let p1 = criaPessoa(`Fagner`, `Ferreira`, 19, 1.65, 58)

let p2 = criaPessoa(`Francisco`, `Santana`, 57, 1.65, 90)

console.log(p1.falaOi(`eu quero é ser dev pleno`));
console.log(`----------------------------------------------------`);
console.log(p1.nomeCompleto);
p1.nomeCompleto = `Nalda Maria Ferreira Bagundes`
console.log(p1.nomeCompleto);


