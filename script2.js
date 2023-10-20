function dutching(totalbet,prob){
    
    var bet = dutching(totalbet,prob);
   var  totalprob  = 0;
    
    for(var i = 0; i < prob.length; i++){
        totalprob += 1 / prob[i];
    }

    var bets = [];
    
    for(var i = 0; i < prob.length; i++){
       var bet = totalbet / (prob[i] * totalprob);
        bets.push(bet.toFixed(2))
       
    }
    var output = document.querySelector('section#output');
    output.innerHTML = `${bets}`
    
    
}
var totalbet= Number(document.querySelector('input#investimento').value)
var prob = Number(document.querySelector('input#number1').value)







