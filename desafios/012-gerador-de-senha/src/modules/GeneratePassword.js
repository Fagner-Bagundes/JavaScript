
class ElementsOfPassword{
    static Number(N = 10){return Math.floor(Math.random() * N)}
    
    static WordUp(){
        const letras = String.fromCharCode(Math.floor(Math.random() * (90 -65) + 65))
        return   letras.toLocaleUpperCase()
    }
    static WordL(){
        const letras = String.fromCharCode(Math.floor(Math.random() * (90 -65) + 65))
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
            this.geraSenha(ElementsOfPassword)

        })
    };

    geraSenha(el){
        let senhaArray = [el.Number, el.WordUp, el.WordL, el.Simbol]
        let senha =``;
        if (this.limit.value) {
            for (let i = 0; i < this.limit.value; i++) {senha += senhaArray[el.Number(4)]();}         
            console.log(senha)
        }
   
        
        
        
    };
}
