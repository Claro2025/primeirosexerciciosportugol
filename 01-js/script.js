 
function campeonato(){
 let vitorias, empates
 let pontos

 vitorias = Number(prompt("Digite números de vitórias: "))
 empates = Number(prompt("Digite números de empates"))

 pontos = vitorias *3 + empates

 alert ("resultos de pontos do seu time é: " + pontos + " pontos")
 }


function calcado(){
 let calcado, valor
 let valeTroca

 calcado = Number(prompt("DIgite a quantidade de pares de calçados: "))
 valor = Number(prompt("Digite os valores dos pares de calçados: "))

 valeTroca = calcado * valor

 alert ("O valor do vale troca é de: R$" + valeTroca + " reais")
}


function portoes(){
 let clt, estagiario, pj
 let totalFuncionario

 clt = Number(prompt("Digite a quantidade de devs clt: "))
 estagiario = Number(prompt("Digite a quantidade de estagiários: "))
 pj = Number(prompt("Digite a quantidade de devs pj: "))

 totalFuncionario = clt + estagiario + pj

 alert ("A quantidade de colaboradores devs é de: " + totalFuncionario + " colaboradores devs")
}


function laranja(){
 let inicial, final
 let venda

 inicial = Number(prompt("Digite a quantidade de laranja inicial: "))
 final = Number(prompt("Digite a quantidade de laranja final: "))

 venda = inicial - final

 alert ("Quantidade de laranjas vendidas é de: " + venda + " laranjas")
}


function igreja(){
 let custoTotal, dizimo
 let debito

 custoTotal = Number(prompt("Digite o total de custos mensal: R$  "))
 dizimo = Number(prompt("Digite o valor arrecadado no dizimo: R$  "))

 debito = custoTotal - dizimo

 alert ("Valor restande para pagamento despesas mensal é de: R$  " + debito + " reais")
}


function salario(){
 let sm, dt, ss
 let salarioDia

 sm = Number(prompt("Digite valor total salário mensal: R$  "))
 dt = Number(prompt("Digite a quantidade de dias trabalhados:  "))

 salarioDia = sm / dt

 alert ("Valor do dia trabalhado é de: R$  " + salarioDia + " reais")

 ss = salarioDia * 5

 alert ("o valor do salário semanal é de: R$" + ss + " Reais")
}




// }
// function frete(){
// let peso, distancia, volume
// let valorFrente

// peso = Number(prompt("Digite o peso do produto: "))
// distancia = Number(prompt("Digite a distancia da entrega: "))
// volume = Number(prompt("Digite o tamanho do volume: "))

// valorFrente = 15+(2*peso)+(0.05*distancia)+(10*volume)

// alert(" Valor do frente é de: R$" + valorFrente + " Reais" )

// }
