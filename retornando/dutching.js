let valorInvestido = 100
let odds = [3,3.8,3.5]
let probabilidadeTotal = 0
let probabilidades = odds.map((odd) => {
    return 1 / odd
})
let investimento = []
let retorno = []

probabilidades.forEach((probabilidade) =>{
    probabilidadeTotal += probabilidade
})



for(var i = 0; i < odds.length; i++){
    investimento[i] = (valorInvestido/odds[i])/probabilidadeTotal
}


for(var i = 0; i < odds.length; i++){
    retorno[i] = investimento[i] * odds[i]
}


console.log(valorInvestido)
console.log(odds)
console.log(retorno)
console.log(investimento)
