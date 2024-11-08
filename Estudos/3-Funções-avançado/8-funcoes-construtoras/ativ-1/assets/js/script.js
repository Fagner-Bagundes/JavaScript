 function Calculadora() {
        this.display = document.querySelector(`.display`);

        this.inicia = ()=>{
            this.cliqueBotoes()
            this.prescionaEnter()
        };

        this.prescionaEnter = ()=>{
            this.display.addEventListener(`keyup`, (tecla)=>{
                
                if(tecla.code == `Enter`){
                    this.realizaConta()
                }
            })
        };

        this.realizaConta = ()=>{
            let conta = this.display.value;

            try {
                conta = eval(conta)

                if(!conta){
                    alert(`Conta inválida`)
                    this.clearDisplay()
                    return
                }

                this.display.value = conta;
            } catch(e){
                alert(`Conta invalida`)
                this.clearDisplay()

            }
        };

        this.clearDisplay = ()=>{
            this.display.value = ``;
        };


        this.ApagaUm = ()=>{
            let fatia = this.display.value.slice(0, -1)
            this.display.value = fatia
        };

        this.cliqueBotoes = ()=>{
            document.addEventListener(`click`, (e)=>{
                const el = e.target;

                if (el.classList.contains(`btn-num`)) {
                    this.btnParaDisplay(el.innerText)
                }
                
                if(el.classList.contains(`btn-clear`)){
                    this.clearDisplay()
                };

                if(el.classList.contains(`btn-del`)){
                    this.ApagaUm();
                };

                if (el.classList.contains(`btn-eq`)) {
                    this.realizaConta();
                    
                }
            })
        };

        this.btnParaDisplay = (valor)=>{
            this.display.value += valor;
            
        }


    };
 

const calculadora = new Calculadora();
calculadora.inicia()