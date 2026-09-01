programa {
  funcao inicio() {

    inteiro salario_mensal, dias_trabalhado, salario_dias

    escreva("qual o valor do seu salário mensal?:R$ ")
    leia(salario_mensal)
    escreva("quantos dias trabalhado no mês?:R$ ")
    leia(dias_trabalhado)
    salario_dias = salario_mensal / dias_trabalhado

    escreva("valor do salário por dia é:R$ " + salario_dias)
  }
}
