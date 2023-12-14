// objetos em funcões
// objetos podem ser criados dentro de funções
// a palavra this. é usando quando se quer pegar um velhor de um objeto dentro de uma função dentro do mesmo objeto  


function criaPessoa(nome, sobrenome, alt, p){
    return {
        nome: nome,
        sobrenome: sobrenome,
        altura: alt,
        peso : p,

        // getter
        get nomeCompleto( ){
            return `${this.nome} ${this.sobrenome}`
        },

        // setter
            set nomeCompleto(valor){
                valor = valor.split(` `)
                console.log(valor);
                this.nome = valor.shift();
            },

        imc(){
            const indice = this.peso / ( this.altura **2)
            return indice.toFixed(2);
        }
    }
}
const p1 = criaPessoa(`Fagner`, `Ferreira`, 1.65, 56);
p1.nomeCompleto = `Maria Oliveira Silva`
console.log(p1.nomeCompleto);