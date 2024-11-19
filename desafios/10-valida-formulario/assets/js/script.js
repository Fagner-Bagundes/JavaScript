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
        this.pegaSubmit();
        
    }

    pegaSubmit() {
        this.form.addEventListener(`submit`, (e) => {
            e.preventDefault();
            this.verificaPreenchidos();
        })
    }

    verificaPreenchidos() {
        this.validaNome()
        this.validaSobrenome()
        this.validaCPF();
        this.validaUsuario();
        this.validaSenha();
        this.validaRepSenha();
    }

    validaNome(){
        this.ErrrorInputVazio(this.nome, `nome`)

        let contemNumESimb = /[0-9!@#\$%\^\&*\)\(+=._-]/.test(this.nome.value)
        if (contemNumESimb) {
            this.erro()
        }
    }

    validaSobrenome(){
        this.ErrrorInputVazio(this.sobrenome, `sobrenome`)
    }

    validaCPF(){
        this.ErrrorInputVazio(this.cpf, `cpf`)
    }

    validaUsuario(){
        this.ErrrorInputVazio(this.usuario, `usuario`)
    }

    validaSenha(){
        this.ErrrorInputVazio(this.senha, `senha`)
    }

    validaRepSenha(){
        this.ErrrorInputVazio(this.repSenha, `repSenha`)
    }

    
    erro(){
        let error = this.criaDivs()
        error.textContent = `digite apenas letras no campo`
    }

    ErrrorInputVazio(nome, classe){
        if (!nome.value) {
            this.removeErros(classe)
            let error = this.criaDivs();
            error.textContent = `Digite algo no campo`;
            error.classList = `erroVazio-${classe}`
            nome.insertAdjacentElement('afterend', error)   
        } else{
            this.removeErros(classe)
        }
    }

    criaDivs() {
            const novaDiv = document.createElement(`div`)
            novaDiv.style.color = `red`;
            return novaDiv
        
    }

    removeErros(classe) {
            let Error = document.querySelector(`.erroVazio-${classe}`)
            if(Error){
                Error.remove()
            }
        }
}

const valida1 = new ValidaFormulario()

