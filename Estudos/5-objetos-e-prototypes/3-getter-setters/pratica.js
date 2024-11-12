const heroi = {};
let habilidades =  [`velocidade`, `magnetismo`, `desenrolo`]
Object.defineProperties(heroi, {
    nome: {
        value: `SuperShoki`,
        enumerable: true
    },
    poder: {
        value: `elétrico`,
        writable: false,
        enumerable: true,
        configurable: false,
    },
    
    habilidades: {
       get(){
         return habilidades
       },
       set(valor){
        valor = valor.split(` `)
        habilidades = valor
    
       }
    }
})


console.log(heroi.habilidades);

console.log(`  `);
heroi.habilidades = `Inteligencia, raios de laser, velocidade`
console.log(heroi.habilidades);

