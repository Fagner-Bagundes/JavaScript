const heroi = {};
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

})


console.log(heroi.habilidades);

console.log(`  `);
heroi.habilidades = `Inteligencia, raios de laser, velocidade`
console.log(heroi.habilidades);

function Lutador(arteMarciel, pontoForte, estiloDeLuta) {
    let skills = [`ágil`, `poderoso`, `rápido`]
    this.arteMarciel = arteMarciel;
    this.pontoForte = pontoForte;
    this.estiloDeLuta = estiloDeLuta;

    Object.defineProperty(this, `skills`, {
        get : function(){
            return skills
        },
        enumerable: true,
        set : function(newSkills){
            skills = newSkills.split(` `)
        }
    })

    
}

const lutador1 = new Lutador(`JiuJistu`,`técnica`, `no chão` )
console.log(lutador1);
console.log(lutador1.skills);
lutador1.skills = `Fraco, Buxa, lento, hiperbólico`
console.log(lutador1.skills);

