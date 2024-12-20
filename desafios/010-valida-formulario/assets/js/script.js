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
        this.dadosAprovados = 0; 
        this.pegaSubmit(); 
    };

    pegaSubmit() {
        this.form.addEventListener(`submit`, (e) => {
            e.preventDefault();
            this.validaNome()
            this.validaSobrenome()
            this.validaCPF();
            this.validaUsuario();
            this.validaSenha();
            this.validaRepSenha();
            this.enviaFormulario()
        })

    };

    validaNome(){
        if (!this.ErrrorInputVazio(this.nome, `nome`)) {
            let contemNumESimb = /[0-9!@#\$%\^\&*\)\(+=._-]/.test(this.nome.value)
            if (contemNumESimb) {
                this.criaErros(`errorName`, this.nome, `nome`);
            }else{
                this.mudaEstilos(this.nome, true)
            } 
        }
        
 
    };

    validaSobrenome(){
        if (!this.ErrrorInputVazio(this.sobrenome, `sobrenome`)) {
            let contemNumESimb = /[0-9!@#\$%\^\&*\)\(+=._-]/.test(this.sobrenome.value)
            if (contemNumESimb) {
                this.criaErros(`errorName`, this.sobrenome, `sobrenome`);
            }else{
                this.mudaEstilos(this.sobrenome, true)
            }    
        }
    };

    validaCPF(){
        if (!this.ErrrorInputVazio(this.cpf, `cpf`)) {
            const novoCpf = this.cpf.value;
            const cpfValidado = new ValidadeCPF(novoCpf)
            if (!cpfValidado.validar()) {
                this.criaErros(`cpfError`, this.cpf, `cpf`)
            } else{
                this.mudaEstilos(this.cpf, true)
            } 
        }
        
    };

    validaUsuario(){
        if (!this.ErrrorInputVazio(this.usuario, `usuario`)) {
            let contemSimbolos = /[^\w\s]/.test(this.usuario.value);
            
            if (contemSimbolos) {
                this.criaErros(`usuariosSimbulos`, this.usuario, `usuario`)
                return
            }
            if(this.usuario.value.length > 12){
                this.criaErros(`caracteresLimites`, this.usuario, `usuario`)
                return
            }
            if(this.usuario.value.length < 3){
                this.criaErros(`usuarioInsuficiente`, this.usuario, `usuario`)
                return
            }
            this.mudaEstilos(this.usuario, true)
        }
    };

    validaSenha(){
        if(!this.ErrrorInputVazio(this.senha, `senha`)){
            if(this.senha.value.length > 12){
                this.criaErros(`caracteresLimites`, this.senha, `senha`)
            } else{
                this.mudaEstilos(this.senha, true)
            } 
        }

    };

    validaRepSenha(){
        if (!this.ErrrorInputVazio(this.repSenha, `repSenha`)) {
            let senha = Array.from(this.senha.value)
            let repSenha = Array.from(this.repSenha.value)
            for(let i in senha){
                if (senha[i] !== repSenha[i] || repSenha.length > senha.length)  {
                    this.criaErros(`senhaDiferente`, this.repSenha, `repSenha`)
                    return
                    
                }else{
                    this.mudaEstilos(this.repSenha, true)
                } 
            }   
        }
       
    };
    
    adicionaDivs(erro, classe, name){
        erro.classList = `erro-${name}`
        classe.insertAdjacentElement('afterend', erro)
    };
    
    criaErros(erro, classe, name){
        this.mudaEstilos(classe, false)
        if (erro === `errorName`) {
            let error = this.criaDivs()
            error.textContent = `Digite apenas letras no campo!`
            this.adicionaDivs(error, classe, name)
        }

        if (erro === `cpfError`) {
            this.removeErros(name)
            let error = this.criaDivs()
            error.textContent = `Cpf inválido!`
            this.adicionaDivs(error, classe, name)
        }

        if (erro === `usuariosSimbulos`) {
            this.removeErros(name)
            let error = this.criaDivs()
            error.textContent = `Digite apenas letras ou numeros`
            this.adicionaDivs(error, classe, name)
        }

        if (erro === `caracteresLimites`) {
            this.removeErros(name)
            let error = this.criaDivs()
            error.textContent = `${name} deve ter no máximo 12 caracteres`
            this.adicionaDivs(error, classe, name)
        }

        if (erro === `usuarioInsuficiente`){
            this.removeErros(name)
            let error = this.criaDivs()
            error.textContent = `Usuário deve ter no mínimo 3 caracteres`
            this.adicionaDivs(error, classe, name)
        }

        if (erro === `senhaDiferente`) {
            this.removeErros(name)
            let error = this.criaDivs()
            error.textContent = `A senha está diferente!`
            this.adicionaDivs(error, classe, name)
        }

    };

    ErrrorInputVazio(classe, name){
        this.mudaEstilos(classe,false)
        if (!classe.value) {
            this.removeErros(name)
            let error = this.criaDivs();
            error.textContent = `Digite algo no campo`;
            error.classList = `erro-${name}`
            classe.insertAdjacentElement('afterend', error)
            return true   
        } else{
            this.removeErros(name)
            return false
        }
    };

    criaDivs() {
            const novaDiv = document.createElement(`div`)
            novaDiv.style.color = `red`;
            return novaDiv
    };

    removeErros(name) {
            let Error = document.querySelector(`.erro-${name}`)
            if(Error){
                Error.remove()
            }
    };
        
    mudaEstilos(classe, valido){
        if (valido) {
            classe.classList.add(`valido`)   
        } else{
            if (classe) {
                classe.classList.remove(`valido`)
            }
        }
    };

    enviaFormulario(){
        let envia = 0;
        this.inputs.forEach((valor)=>{
            if (!valor.classList.contains(`valido`)) {
                envia--              
            }else{
                envia++
            }
        })
        if (envia >= 6) {
            setTimeout(() => {
                alert(`Formulário Enviado`)
                this.limpaFormulario(true)
            }, 500);
        }
    };

    limpaFormulario(){
        this.inputs.forEach((valor, i)=>{
            console.log(i, `: `,valor);
            if (valor.classList.contains(`valido`)) {
                valor.value = ``
                valor.classList.remove(`valido`)
            }
        })
    };
};
const valida1 = new ValidaFormulario();

