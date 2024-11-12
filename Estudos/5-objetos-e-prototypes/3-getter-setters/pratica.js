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
    habilidades: {
        value: [`alto Qi`, `desenrolo`, `magnetismo`],
        writable: true,
        enumerable: true,
        configurable: true
    }
})


console.log(heroi);
