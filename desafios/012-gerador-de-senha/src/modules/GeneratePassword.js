class ElementsOfPassword{
    static newNumber(){
        const numbers = Math.floor(Math.random() * 10)
        return numbers
    }
    static newWord(upper){
        const letras = String.fromCharCode(Math.floor(Math.random() * (90 -65) + 65))
        if (upper === `UpperCase`) return  letras.toLocaleUpperCase()
        return letras.toLocaleLowerCase()
    }
}

export default class GeneratePassword {
    constructor(parameters) {
        

    }

    sla(){
        console.log(ElementsOfPassword.newNumber());
        console.log(ElementsOfPassword.newWord(`UpperCase`));
        console.log(ElementsOfPassword.newWord(`LowerCase`));

        
        
        
    }

}
