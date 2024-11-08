 function criaCalculadora(params) {
    return {
        display: document.querySelector(`.display`),

        inicia(){
            this.cliqueBotoes()
        },

        realizaConta(){
            let conta = this.display.value();

            try {
                
            } catch(e){

            }
        },

        clearDisplay(){
            this.display.value = ``;
        },


        ApagaUm(){
            let fatia = this.display.value.slice(0, -1)
            this.display.value = fatia
        },

        cliqueBotoes(){
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
        },

        btnParaDisplay(valor){
            this.display.value += valor;
            
        }


    };
 }

const calculadora = criaCalculadora();
calculadora.inicia()