let separadores = {
    barra(){
        console.log(`------------`);
        
    },
    espaco(){
        console.log(` `);
        
    }
}



const nomes = [ `Fagner`, `Magno`, `Vagner`, `Francisco`, `Nalda`]

// nomes.splice(argumento1, argumento2, elementos...)

/*
argumento1 = onde voce vai começar
argumento2 = quantos elementos você quer remover
elemenstos = elementos que voce quer adicionar, podem ser vários

*/
console.log(`Removendo o primeiro e ultimo elemento:`);
console.log(nomes);
separadores.espaco()
nomes.splice(0,1);
console.log(nomes);
separadores.espaco()
nomes.splice(nomes.length -1, 1)
console.log(nomes);
separadores.barra()

console.log(`Adicionando elementos:`);
separadores.espaco();
nomes.splice(nomes.length -1, 0, `Sabrina`, `Franci`);
console.log(nomes);
separadores.barra()
console.log(`Substituindo elementos`);
nomes.splice(3, 1, `Francinalva`)
console.log(nomes);

separadores.barra();

console.log(`Pegando vários elementes e atribuindo a uma variável:`);
separadores.espaco();
let removidos = nomes.splice(nomes.length -2, 2)
console.log(nomes)
console.log(removidos);










