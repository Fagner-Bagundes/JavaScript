
class ElementsOfPassword{
    static newNumber(){return Math.floor(Math.random() * 10)}
    
    static newWord(upper){
        const letras = String.fromCharCode(Math.floor(Math.random() * (90 -65) + 65))
        if (upper === `UpperCase`) return  letras.toLocaleUpperCase()
        return letras.toLocaleLowerCase()
    }
    static newSimbol(){
        const simbolsArray = [
            '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/',
            ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`',
            '{', '|', '}', '~'
          ]
        const simbols = (Math.floor(Math.random() * 31))
        return simbolsArray[simbols]
    }
}

export default class GeneratePassword {
    constructor(){
        this.limit = (document.querySelector(`#password-lengh`)).value
    }
    sla(){
        console.log(this.limit);
        
        console.log(ElementsOfPassword.newNumber());
        console.log(ElementsOfPassword.newWord(`UpperCase`));
        console.log(ElementsOfPassword.newWord(`LowerCase`));
        console.log(ElementsOfPassword.newSimbol());


        
    }

}
