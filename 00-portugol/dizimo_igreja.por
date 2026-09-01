programa {
  funcao inicio() {

     //dados variáveis
  inteiro custo_mensal, ofertas_recebida, custo_restantes
  //leitura de dados
  escreva("qual o custo mensal da igreja?:R$  ")
  leia(custo_mensal)
  escreva("quanto de oferta foi arrecada pela igreja?:R$  ")
  leia(ofertas_recebida)
  //processamento
  custo_restantes = custo_mensal - ofertas_recebida
  // spresente o resultado
  escreva("Restante de custo a ser pago R$:" + custo_restantes)

    
  }
}