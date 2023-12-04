

function investimento(){
    var totalbet = Number(document.querySelector('input#investimento').value)
    var probInputs = document.querySelectorAll('input[class="numbers"]')
    var prob = []
    var Input1 = document.querySelector('input#number1')
    var Output1 = document.querySelector('span#output1')
    var Input2 = document.querySelector('input#number2')
    var Output2 = document.querySelector('span#output2')
    var Input3 = document.querySelector('input#number3')
    var Output3 = document.querySelector('span#output3')
    var Input4 = document.querySelector('input#number4')
    var Output4 = document.querySelector('span#output4')
    var Input5 = document.querySelector('input#number5')
    var Output5 = document.querySelector('span#output5')
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
    
    /*if (retorno_calculo.length === 0){
        retorno_calculo.push("0.00");
    }
    */
    if(Input1.value == 0){
        Output1.innerHTML = ""
    } else{
        Output1.innerHTML = `${prob} ${bets}`


    }
    if(Input2.value == 0){
        Output2.innerHTML = ""
    } else{
        Output2.innerHTML = `${bets[1]}`

    }
    if(Input3.value == 0){
        Output3.innerHTML = ""
    } else{
        Output3.innerHTML = `${bets[2]}`

    }
    if(Input4.value == 0){
        Output4.innerHTML = ""
    } else{
        Output4.innerHTML = `${bets[3]}`

    }
    if(Input5.value == 0){
        Output5.innerHTML = ""
    } else{
        Output5.innerHTML = `${bets[4]}`

    }
    
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






