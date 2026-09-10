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

 

 function balanca(){
 let pesoBruto, tara
 let pesoCarga

 pesoBruto = Number(prompt("Digite o peso bruto do produto: "))
 tara = Number(prompt("Digite o peso da tara: "))
 
 pesoCarga = pesoBruto - tara

 alert(" O peso da carga é de: " + pesoCarga + " kg" )

 }


 function candidato(){
 let candidato
 let chance

 candidato = Number(prompt("Número de vezes que usou o celular: "))

 chance = (0.1 / (1 + 500 * candidato)) * 100

 alert("Chance de aprovação: " + chance.toFixed(4).replace(".", ",") + "%")

 }

  
 function frete(){
 let peso, distancia, volume
 let valorFrente

 peso = Number(prompt("Digite o peso do produto: "))
 distancia = Number(prompt("Digite a distancia da entrega: "))
 volume = Number(prompt("Digite o tamanho do volume: "))

 valorFrente = 15+(2*peso)+(0.05*distancia)+(10*volume)

 alert(" Valor do frente é de: R$ " + valorFrente.toFixed(2).replace(".", ",") + " Reais" )

 }
 function lucro(){

 let bruto, premiacoes, presentes, comissoes
 let lucro   

 bruto = Number(prompt("Digite o faturamento bruto: R$ "))
 premiacoes = Number(prompt("Digite o valor das premiações: R$ "))
 presentes = Number(prompt("Digite o valor dos presentes e agrados: R$ "))
 comissoes = Number(prompt("Digite o valor das comissões: R$ "))

lucro = bruto - premiacoes - presentes - comissoes

alert("O lucro da Dona Bete foi de R$ " + lucro.toFixed(2).replace(".", ","))
 }


 function capitao(){
    let  suprimentos, ingressos, itens
    let faturamento_total, lucro, lucro_percentual
 suprimentos = Number(prompt("Quanto foi gasto em suprimentos e mercadorias: R$ "))
 ingressos = Number(prompt("Faturamento com venda de ingressos: R$ "))
 itens = Number(prompt("Faturamento com venda de itens: R$ "))

faturamento_total = ingressos + itens
lucro = faturamento_total - suprimentos
lucro_percentual = (lucro / faturamento_total) * 100

alert("Lucro obtido: R$ " + lucro.toFixed(2).replace(".", ","))
alert("Lucro percentual: " + lucro_percentual.toFixed(2).replace(".", ",") + "%")

 }
  


//  EXERCICIO IF ELSE

 function idade(){
    let idade 

    idade = Number(prompt("Digite a idade do aluno: "))

    if (idade >= 18){
        alert("Aluno é maior de idade")
    } else {
        alert("Aluno não é maior de idade")
    }
 }


 function senha(){
    let senha

    senha = Number(prompt("Digite a senha: "))
    
    if (senha == 1234){
        alert("Acesso permitido")
 } else {
        alert("Acesso negado")
    }
 }


 function adivinha(){
    let numero = Math.ceil(Math.random() * 10);
// Gera um número aleatório de 1 até 10

let palpite = Number(prompt("Adivinhe o número entre 1 e 10:"));

if (palpite === numero) {
    alert("🎉 Parabéns! Você acertou!")
} else {
    alert("❌ Você errou!");
    alert("O número era: " + numero);
 }
}
