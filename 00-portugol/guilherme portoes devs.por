programa {
  funcao inicio() {
    // dados variaveis
    inteiro qtd_estagiarios, qtd_clt, qtd_pj
    inteiro equipe
    // ler daodos
    escreva ("Digite o número de estagiários: ")
    leia(qtd_estagiarios)
    escreva ("Digite o números de CLTs: ")
    leia(qtd_clt)
    escreva ("Digite o números de PJs: ")
    leia(qtd_pj)
    //processar/calcular
    equipe = qtd_estagiarios + qtd_clt + qtd_pj

    //apresentar os resultados
    escreva("A equipe tem " + equipe + " devs")

  }
}