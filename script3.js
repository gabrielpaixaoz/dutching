

function investimento(){
    var totalbet = Number(document.querySelector('input#investimento').value)
    var probInputs = document.querySelectorAll('input[class="numbers"]')
    var prob = []

    probInputs.forEach(function(input){
        var numero = parseFloat(input.value) || 0;
        if(numero !== 0 ){
            prob.push(numero);
        }
    });

    var totalprob = prob.reduce(function(acc,curr){
        return acc + 1 / curr
    }, 0);
    
    var bets = prob.map(function(probabilidade){
        var bet = totalbet / (probabilidade * totalprob);
        return bet.toFixed(2)
    })
    return bets
    
}


function probabilidades(){
    var probInputs = document.querySelectorAll('input[class="numbers"]')
    var prob = []

    probInputs.forEach(function(input){
        var numero = parseFloat(input.value) || 0;
        if(numero !== 0 ){
            prob.push(numero);
        }
    });

    return prob
}

function calcular(){
    var totalbet = Number(document.querySelector('input#investimento').value)
    var lucro = document.querySelector('span#lucro')
    var retorno = document.querySelector('span#retorno')
    var bets = investimento();
    var prob = probabilidades();
    retorno_calculo = bets.map(function(bet, index) {
        return (bet * prob[index]).toFixed(2);
    });

    var lucro_calculo = isNaN(retorno_calculo[0]) ? 0 : retorno_calculo[0] - totalbet
    var lucrofix = lucro_calculo.toFixed(2)

    

    if(lucrofix <= 0){
        lucro.style.backgroundColor = "#A85954";

    }else {
        lucro.style.backgroundColor = "#90A955";

    }
    if (retorno_calculo.length === 0){
        retorno_calculo.push("0.00");
    }
    
    


    lucro.innerHTML = `${lucrofix}`
    retorno.innerHTML = `${retorno_calculo[0]}`

    return retorno_calculo
    
}


function teste1(){

    var numeroinput1 = document.querySelector('input#number1')
    
    
        var output1 = document.querySelector('span#output1')
        var volta1 = document.querySelector('span#volta1')
        
        bets = investimento();
        retorno = calcular()
        
        if(numeroinput1.value.length === 0){
            output1.innerHTML = ""
            volta1.innerHTML = ""
        }else{
            output1.innerHTML = `${bets[0]}`
            volta1.innerHTML = `${retorno[0]}`
        }
        
}


function teste2(){

    var numeroinput2 = document.querySelector('input#number1')
    
    
        var output2 = document.querySelector('span#output2')
        var volta2 = document.querySelector('span#volta2')
        
        bets = investimento();
        retorno = calcular()
        
        if(numeroinput2.value.length === 0){
            output2.innerHTML = ""
            volta2.innerHTML = ""
        }else{
            output2.innerHTML = `${bets[1]}`
            volta2.innerHTML = `${retorno[1]}`
        }
        
}



