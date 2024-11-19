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
        console.log(this.form);
        console.log(this.inputs);
        console.log(this.nome);
        console.log(this.cpf);
        console.log(this.usuario);
        console.log(this.senha);
        console.log(this.repSenha);
        
        
        
        
    }
}

const valida1 = new ValidaFormulario()

