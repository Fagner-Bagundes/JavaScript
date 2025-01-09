export const nome = `Luiz`
export const sobrebrenome = `Mmiranda`
export const idade = 30;

export function soma(x,y){
    return x + y
}

export class Pessoa {
    constructor(nome, sob) {
        this.nome = nome;
        this.sobrebrenome = sob
    }
}


export default (x,y) => x*y
