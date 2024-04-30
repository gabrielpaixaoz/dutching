let valorInvestido = 100
let odds = [3,3.8,3.5]
let probabilidadeTotal = 0
let probabilidades = odds.map((odd) => {
    return 1 / odd
})
let investimentos= []
let retorno = []
let lucro = 0
probabilidades.forEach((probabilidade) =>{
    probabilidadeTotal += probabilidade
})



for(var i = 0; i < odds.length; i++){
    investimentos[i] = (valorInvestido/odds[i])/probabilidadeTotal
}


for(var i = 0; i < odds.length; i++){
    retorno[i] = investimentos[i] * odds[i]
}



lucro = retorno[0] - valorInvestido

console.log(valorInvestido)
console.log(odds)
console.log(retorno)
console.log(investimentos)
console.log(lucro)
