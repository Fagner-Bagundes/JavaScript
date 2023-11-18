function escopo() {

const formulario = document.querySelector(`.formulario`)
const resposta = document.querySelector(`.resposta`)
function recebeEvento(evento){

    const dados = [];
    
    evento.preventDefault();
    const peso = formulario.querySelector(`#idpeso`);
    const altura = formulario.querySelector(`#idaltura`);

    dados.push( {
        peso: peso.value,
        altura: altura.value
    })
    console.log(dados);

    const resultado = peso.value / (altura.value * altura.value);

    console.log(resultado);

    if (resultado < 18.5) {
        resposta.innerHTML = `você tá a baixo do peso. tá passando fome? tá só o palitoKKKKK`
    }
    else if (resultado>= 18.5 && resultado <= 24.9) {
        resposta.innerHTML= ` Você tá no peso ideal, agora só falta parar de dar esse cu aikkkk`;
    }
    else if (resultado >= 25 && resultado <= 29.9) {
        resposta.innerHTML= `Você está com sobrepeso. Tá gordo man, bolotinhakkk`;
    }
    else if (resultado >= 30 && resultado <= 34.9) {
        resposta.innerHTML= `Você tá com obesidade. tu tá muito gordo veio, para de comer manokkkk`;
    }
    else if (resultado >=35 && resultado <= 39.9){
        resposta.innerHTML= `Você tá com obesidade severa velho, para de comer mano:(`;

    }
    else if (resultado > 40) {
        resposta.innerHTML= `Tá comendo toda a comida do mundo seu fdp? poha vei, tu vai morrer mano. pessoal quer comer tbm carakkk. Medo.`;
    }
    else{
        resposta.innerHTML = `Você tem que colocar alguma coisa seu gay, acha que tô aqui pra brincadeira??`;
        
    }
}

addEventListener(`submit`, recebeEvento)

};



escopo();