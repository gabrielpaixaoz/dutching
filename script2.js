function calcular(){


function dutching(totalbet,prob){
    var totalbet = Number(document.querySelector('input#investimento').value)
    var probInputs = document.querySelector('.numbers')
    var prob = [];
    probInputs.forEach(function(input) {
        prob.push(Number(input.value)); 
    });
    var  totalprob  = 0;
    
    for(var i = 0; i < prob.length; i++){
        totalprob += 1 / prob[i];
    }

    var bets = [];
    
    for(var i = 0; i < prob.length; i++){
       var bet = totalbet / (prob[i] * totalprob);
        bets.push(bet.toFixed(2))
       
    }
    return bets;
   
    
    
}





var bets = dutching(totalbet,prob);
var output = document.querySelector('section#output')
output.innerHTML = `Resultado: ${bets.join(', ')}`;
}




/*
function calcular() {
    function dutching(prob) {
        var totalbet = Number(document.querySelector('input#investimento').value);
        var probInputs = document.querySelectorAll('.numbers');
        var prob = [];
        probInputs.forEach(function(input) {
            prob.push(Number(input.value));
        });
        var totalprob = 0;
        
        for (var i = 0; i < prob.length; i++) {
            totalprob += 1 / prob[i];
        }

        var bets = [];
        
        for (var i = 0; i < prob.length; i++) {
            var bet = totalbet / (prob[i] * totalprob);
            bets.push(bet.toFixed(2));
        }
        return bets;
    }

    var bets = dutching();
    var output = document.querySelector('section#output');
    output.innerHTML = `Resultados: ${bets.join(', ')}`;
}
*/