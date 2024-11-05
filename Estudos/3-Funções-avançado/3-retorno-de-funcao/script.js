// Return
// retorna um valor
// encerra a função


function soma(a, b){
   return a * b;
   console.log(`não aparecerei`);
   
}

let resultado = soma(9,9)
console.log(resultado);

function criaPessoa(nome, sobrenome) {
    return {
        nome: nome, 
        sobrenome: sobrenome
    }
}

const p1 = criaPessoa(`Fagner`, `Ferreira`)
console.log(p1);




function criaMultiplicador(multiplicador){
     let multiplica = (numero)=>{
        return numero * multiplicador
    }
    return multiplica;
}

let duplica = criaMultiplicador(2)

console.log(duplica(5));
