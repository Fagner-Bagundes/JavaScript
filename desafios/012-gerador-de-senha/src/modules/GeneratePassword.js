
class ElementsOfPassword{
    static Number(N = 10){return Math.floor(Math.random() * N)}
    
    static Word(upper){
        const letras = String.fromCharCode(Math.floor(Math.random() * (90 -65) + 65))
        if (upper === `UpperCase`) return  letras.toLocaleUpperCase()
        return letras.toLocaleLowerCase()
    }
    static Simbol(){
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
        this.limit = (document.querySelector(`#password-lengh`))
        this.btn = document.querySelector(`.btn`)

    }
    novaSenha(){
        this.btn.addEventListener(`click`, (event)=>{
            const botao = event.target
            this.geraSenha(ElementsOfPassword)
            // console.log(ElementsOfPassword.newNumber());
            // console.log(ElementsOfPassword.newWord(`UpperCase`));
            // console.log(ElementsOfPassword.newWord(`LowerCase`));
            // console.log(ElementsOfPassword.newSimbol());

        })
    };

    geraSenha(el){
        let senhaArray = [el.Number(), el.Word(`UpperCase`), el.Word(), el.Simbol()]
        let senha = ``;
        if (this.limit.value) {
            for (let i = 0; i < this.limit.value; i++) {
                console.log(senhaArray[el.Number(4)]);
                 
                // console.log(senha)
            }         
        }
   
        
        
        
    };
}
