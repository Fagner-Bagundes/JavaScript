function CriaCalculadora() {

        this.display = document.querySelector(`.display`);
        this.btnClear = document.querySelector(`.btn-clear`);

        this.inicia = function(){
            this.clickBotoes();
            this.pressionaEnter();

        };

        this.pressionaEnter = function(){
            this.display.addEventListener(`keyup`, (e) =>{
               if(e.keyCode === 13) {
                this.realizaConta();
               }
            })
        };

        this.realizaConta = function(){
            let conta = this.display.value;
            try {
                conta = eval(conta)
                if(!conta) {
                    alert(`conta incalidade`)
                    return;
                }
                this.display.value = conta;
            } catch(e){
                alert(`Conta inválida`);
                return;
            }
        };

        this.clearDisplay = function(){
            this.display.value = ` `;
        };

        this.apagaUm = function(){
            this.display.value = this.display.value.slice(0, -1)
        };



        this.clickBotoes = function(){
             document.addEventListener(`click`, (e)=>{
                const el = e.target;

                if(el.classList.contains(`btn-num`)){
                this.btnParadisplay(el.value); 
                } 
                
                if(el.classList.contains(`btn-clear`)){
                    this.clearDisplay();
                }

                if( el.classList.contains(`btn-del`)){
                    this.apagaUm();
                }

                if(el.classList.contains(`btn-eq`)){
                    this.realizaConta();
                }

                this.display.focus();
             });
        };

        this.btnParadisplay = function(valor){
          this.display.value += valor;
        };
    };

const calculadora = new CriaCalculadora();
calculadora.inicia();
