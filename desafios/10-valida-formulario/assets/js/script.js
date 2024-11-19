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
            this.criaErros(`errorName`, this.nome, `nome`);
        }
    }

    validaSobrenome(){
        this.ErrrorInputVazio(this.sobrenome, `sobrenome`)
        let contemNumESimb = /[0-9!@#\$%\^\&*\)\(+=._-]/.test(this.sobrenome.value)
        if (contemNumESimb) {
            this.criaErros(`errorName`, this.sobrenome, `sobrenome`);
        }
    }

    validaCPF(){
        if (!this.ErrrorInputVazio(this.cpf, `cpf`)) {
            const novoCpf = this.cpf.value;
            const cpfValidado = new ValidadeCPF(novoCpf)
            if (!cpfValidado.validar()) {
                this.criaErros(`cpfError`, this.cpf, `cpf`)
            } 
        }
        
    }

    validaUsuario(){
        if (!this.ErrrorInputVazio(this.usuario, `usuario`)) {
            let contemSimbolos = /[^\w\s]/.test(this.usuario.value);
            
            if (contemSimbolos) {
                this.criaErros(`usuariosSimbulos`, this.usuario, `usuario`)
            }

            if(this.usuario.value.length > 12){
                this.criaErros(`caracteresLimites`, this.usuario, `usuario`)
            }
            if(this.usuario.value.length < 3){
                this.criaErros(`usuarioInsuficiente`, this.usuario, `usuario`)
            }

        }
    }

    validaSenha(){
        if(!this.ErrrorInputVazio(this.senha, `senha`)){
            if(this.senha.value.length > 12){
                this.criaErros(`caracteresLimites`, this.senha, `senha`)
            }
        }

    }

    validaRepSenha(){
        this.ErrrorInputVazio(this.repSenha, `repSenha`)
    }

    criaErros(erro, classe, name){
        if (erro === `errorName`) {
            let error = this.criaDivs()
            error.textContent = `digite apenas letras no campo`
            error.classList = `erro-${name}`
            classe.insertAdjacentElement('afterend', error)
        }

        if (erro === `cpfError`) {
            this.removeErros(name)
            let error = this.criaDivs()
            error.textContent = `Cpf invalido`
            error.classList = `erro-${name}`
            classe.insertAdjacentElement('afterend', error)
        }

        if (erro === `usuariosSimbulos`) {
            this.removeErros(name)
            let error = this.criaDivs()
            error.textContent = `Digite apenas letras ou numeros`
            error.classList = `erro-${name}`
            classe.insertAdjacentElement('afterend', error)
        }

        if (erro === `caracteresLimites`) {
            this.removeErros(name)
            let error = this.criaDivs()
            error.textContent = `${name} deve ter no máximo 12 caracteres`
            error.classList = `erro-${name}`
            classe.insertAdjacentElement('afterend', error)
        }

        if (erro === `usuarioInsuficiente`){
            this.removeErros(name)
            let error = this.criaDivs()
            error.textContent = `Usuário deve ter no mínimo 3 caracteres`
            error.classList = `erro-${name}`
            classe.insertAdjacentElement('afterend', error)
        }



    }

    ErrrorInputVazio(nome, classe){
        if (!nome.value) {
            this.removeErros(classe)
            let error = this.criaDivs();
            error.textContent = `Digite algo no campo`;
            error.classList = `erro-${classe}`
            nome.insertAdjacentElement('afterend', error)
            return true   
        } else{
            this.removeErros(classe)
            return false
        }
    }



    criaDivs() {
            const novaDiv = document.createElement(`div`)
            novaDiv.style.color = `red`;
            return novaDiv
        
    }

    removeErros(classe) {
            let Error = document.querySelector(`.erro-${classe}`)
            if(Error){
                Error.remove()
            }
        }
}

const valida1 = new ValidaFormulario()

