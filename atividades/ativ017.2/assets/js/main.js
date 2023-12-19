function Calculadora() {
    this.display = document.querySelector(`.display`);

    this.capturaClicks = () => {
        document.addEventListener(`click`, event => {
            const el = event.target;

            if (el.classList.contains(`btn-clear`)){
                this.clear();
            };

            if (el.classList.contains(`btn-del`)){
                this.del();
            };

            if (el.classList.contains(`btn-eq`)){
                this.resultado();
            };

            if (el.classList.contains(`btn-num`)){
                this.addNumDisplay(el)
            };
            this.display.focus();
    });
    };

    this.del = (e) => {
        this.display.value = this.display.value.slice(0, -1);
    }

    this.clear = () => {
        this.display.value = ` `;
    };

    this.resultado = () =>{
        let conta = this.display.value;
        try {
            conta = eval(conta);
            if(!conta){
                alert(`conta inválida`)
                return;
            }
            this.display.value = conta;
           
        } catch (e) {
            alert(`conta inválida`);
            console.log(conta);
            return;
        }
    };

    this.addNumDisplay = el => {
        this.display.value += el.value;
    };

    this.enter = () => {
        this.display.addEventListener(`keyup`, (e) =>{
            if (e.key === `Enter`){
                this.resultado();
            }
        })
    };

    this.inicia = () => {
        this.capturaClicks();
        this.enter();
    };
}

const calculadora = new Calculadora();
calculadora.inicia();