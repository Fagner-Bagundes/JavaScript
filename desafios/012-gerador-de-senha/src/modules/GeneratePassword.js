
class ElementsOfPassword {
    static Number(N = 10) { return Math.floor(Math.random() * N) }

    static WordUp() {
        const letras = String.fromCharCode(Math.floor(Math.random() * (90 - 65) + 65))
        return letras.toLocaleUpperCase()
    }
    static WordL() {
        const letras = String.fromCharCode(Math.floor(Math.random() * (90 - 65) + 65))
        return letras.toLocaleLowerCase()
    }
    static Simbol() {
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
    constructor() {
        this.limit = (document.querySelector(`#password-lengh`))
        this.btn = document.querySelector(`.btn`)
        this.PasswordInput = document.querySelector(`.generated-password`)
        // checkboxers
        this.numbersCheckbox = document.querySelector(`#numbers-checkbox`)
        this.minusculasCheckbox = document.querySelector(`#minusculas-checkbox`)
        this.maiusculasCheckbox = document.querySelector(`#maiusculas-checkbox`)
        this.simbolsCheckbox = document.querySelector(`#simbulos-checkbox`)
        this.error = document.querySelector(`.error`)
        // lista de geradores de elementos
        this.senhaArray = []
        

    }

    verificaCheckbox(el) {
        if (this.numbersCheckbox.checked) this.senhaArray.push(el.Number)
        if (this.maiusculasCheckbox.checked) this.senhaArray.push(el.WordUp)
        if (this.minusculasCheckbox.checked) this.senhaArray.push(el.WordL)
        if (this.simbolsCheckbox.checked) this.senhaArray.push(el.Simbol)

        this.PasswordComplet(ElementsOfPassword)
        this.senhaArray = []

    }

    geraNovaSenha() {
        this.btn.addEventListener(`click`, (event) => {
            if () {
                
            }
            this.verificaCheckbox(ElementsOfPassword)

        })
    };

    PasswordComplet(el) {
        // let senhaArray = [el.Number, el.WordUp, el.WordL, el.Simbol]
        let senha = ``;
        if (this.limit.value) {
            const rand = this.senhaArray.length
            try {
                for (let i = 0; i < this.limit.value; i++) { senha += this.senhaArray[el.Number(rand)](); }
                this.PasswordInput.innerHTML = senha
                this.error.classList.add(`remove`)
            } catch (e) {
                this.error.innerHTML = `Selecione algum opção para gerar a senha`
            }
        }

    };
}
