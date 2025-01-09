class JogoAdivinhacao {
    static numeroSecreto = null; // Variável estática para armazenar o número secreto
  
    constructor(minimo = 1, maximo = 100) {
      // Gera o número secreto apenas se ele ainda não foi gerado
      if (JogoAdivinhacao.numeroSecreto === null) {
        JogoAdivinhacao.numeroSecreto = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
      }
      this.minimo = minimo;
      this.maximo = maximo;
      this.tentativas = 0;
      console.log(JogoAdivinhacao.numeroSecreto);
      
    }
  
    fazerPalpite(palpite) {
      this.tentativas++;
      if (palpite === JogoAdivinhacao.numeroSecreto) {
        JogoAdivinhacao.numeroSecreto = null;  // Quando acertar, reinicia o número secreto
        return `Parabéns! Você acertou o número em ${this.tentativas} tentativa(s). O número secreto era ${JogoAdivinhacao.numeroSecreto}.`;
      } else if (palpite < JogoAdivinhacao.numeroSecreto) {
        return "O número secreto é maior!";
      } else {
        return "O número secreto é menor!";
      }
    }
  
    reiniciar() {
      // Reinicia o jogo apenas se o jogador acertar o número
      if (JogoAdivinhacao.numeroSecreto === null) {
        this.tentativas = 0;
        // O número secreto será gerado novamente
        JogoAdivinhacao.numeroSecreto = Math.floor(Math.random() * (this.maximo - this.minimo + 1)) + this.minimo;
      }
    }
  }
  
  // Exemplo de uso:
  const jogo = new JogoAdivinhacao();
  
  console.log(jogo.fazerPalpite(50)); // Exemplo de um palpite
  console.log(jogo.fazerPalpite(75)); // Outro palpite
  