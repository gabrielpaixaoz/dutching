let valorInvestido = 100
let odds = [3,3.8,3.5]
let probabilidadeTotal = 0
let probabilidades = odds.map((odd) => {
    return 1 / odd
})
let investimento = []

probabilidades.forEach((probabilidade) =>{
    probabilidadeTotal += probabilidade
})



for(var i = 0; i < odds.length; i++){
    investimento[i] = (valorInvestido/odds[i])/probabilidadeTotal
}





console.log(investimento)
