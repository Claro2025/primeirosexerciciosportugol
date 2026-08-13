programa {
  funcao inicio() {
       
       inteiro vitorias, empates, pontos
       cadeia time
       
        // receber valor para esta daods
    escreva("nome do time: ")
    leia(time)
    escreva("Digite o números de vitórias: ")
    leia(vitorias)
    escreva("Digite o números de empates: ")
    leia(empates)
    // processamento / calculo
    pontos= vitorias*3 + empates
    // apresentação dos resultados - saída
    //escreva("Seu time tem " + pontos + "pontos")
    escreva(time + ":"+ pontos)
    
  }
}
