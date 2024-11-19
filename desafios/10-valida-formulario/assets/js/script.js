class ValidaFormulario {
    constructor() {
        this.inputs = document.querySelectorAll(`.input`)
        this.form = document.querySelector(`.formulario`)
        this.nome = document.querySelector(`#nome`)
        this.sobrenome = document.querySelector(`#sobrenome`)
        this.cpf = document.querySelector(`#CPF`)
        this.usuario = document.querySelector(`#usuario`)
        this.senha = document.querySelector(`#senha`)
        this.repSenha = document.querySelector(`#repetir-senha`)
        this.btn = document.querySelector(`#btn`)
        this.inicia();

    }
    inicia() {
        this.pegaSubmit()
    }

    naoPreenchidos() {
        let contador = 0;
        for (let i = 0; i <= 5; i++) {
            if (!this.inputs[i].value) {
                ++contador
            }
            if (contador > 5) {
                this.mostraErros()
            } else {
                this.removeErros(true);
            }
        }
    }

    validaNome(){
        let contemNumESimb = /[0-9!@#\$%\^\&*\)\(+=._-]/.test(this.nome.value)

        if (contemNumESimb) {
            let nomeError = this.criaDivs(false, true)
            nomeError.textContent = `Só é permitido letras no nome`
            nomeError.classList.add(`nomeError`)
            this.nome.insertAdjacentElement("afterend", nomeError)

            
        } else{
            this.removeErros(false, true)
        }
    }

    verificaPreenchidos() {
        this.naoPreenchidos();
        this.validaNome()
    }

    criaDivs(erro) {
        if (erro) {
            const novaDiv = document.createElement(`div`)
            novaDiv.style.color = `red`;
            return novaDiv
        }
    }

    mostraErros() {
        let erros = document.querySelectorAll(`.erros`)
        for (let i = 0; i <= 5; i++) {
            if (erros[i]) {
                erros[i].remove()
            }
            this.inputs[i].insertAdjacentElement("afterend", this.criaDivs(true))
        }
    }

    removeErros(erros, erro) {
        if (erros) {
            let erros = document.querySelectorAll(`.erros`)
            for (let i = 0; i <= 5; i++) {
                if (erros[i]) {
                    erros[i].remove()
                }
            }
        }
        if (erro) {
            let nomeErrorInput = document.querySelector(`.nomeError`)
            if (nomeErrorInput) {
                nomeErrorInput.remove()
            }
        }

    }

   

    pegaSubmit() {
        this.form.addEventListener(`submit`, (e) => {
            e.preventDefault();
            this.verificaPreenchidos();
        })
    }
}

const valida1 = new ValidaFormulario()

