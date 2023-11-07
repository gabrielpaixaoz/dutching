 function calcular() {
    function formatarCampoInput(input) {
        var valor = input.value.replace(/[^\d,]/g, ''); // Remove caracteres não numéricos, exceto vírgula
        valor = valor.replace(',', '.'); // Substitui vírgula por ponto como separador decimal
        if (valor.length >= 3) {
            input.value = valor.slice(0, -2) + '.' + valor.slice(-2); // Adiciona o ponto decimal
        } 
    }
    
    // Adiciona o evento input aos campos de entrada com type="number"
    var probInputs = document.querySelectorAll('input[class="numbers"]');
    probInputs.forEach(function(input) {
        input.addEventListener('input', function() {
            formatarCampoInput(input);
        });
    });
    function dutching() {
        var totalbet = Number(document.querySelector('input#investimento').value);
        var probInputs = document.querySelectorAll('input[class="numbers"]');
        var prob = [];
        

        probInputs.forEach(function(input) {
            var numero = parseFloat(input.value) || 0; // Define 0 se não for um número válido
            if (numero !== 0) {
                prob.push(numero);
            }
        });
       
        var totalprob = prob.reduce(function(acc, curr) {
            return acc + 1 / curr;
        }, 0);

       

        var bets = prob.map(function(probabilidade) {
            var bet = totalbet / (probabilidade * totalprob);
            return bet.toFixed(2)
        });
       
        
        
        return bets

    }
    function retorno() {
        var totalbet = Number(document.querySelector('input#investimento').value);
        var probInputs = document.querySelectorAll('input[class="numbers"]');
        var prob = [];
    
        probInputs.forEach(function(input) {
            var numero = parseFloat(input.value) || 0;
            if (numero !== 0) {
                prob.push(numero);
            }
        });
    
        var totalprob = prob.reduce(function(acc, curr) {
            return acc + 1 / curr;
        }, 0);
    
        var bets = prob.map(function(probabilidade) {
            var bet = totalbet / (probabilidade * totalprob);
            return bet;
        });
        
       
        // Multiplicar cada item de bets pelo correspondente item em probInputs
        bets = bets.map(function(bet, index) {
            return (bet * prob[index]).toFixed(2);
        });

        bets = bets.map(function(valor){
            return valor || 0;
        });

        if (bets.length === 0){
            bets.push(0);
        }
        

        return bets;
    } 
    
    var totalbet = Number(document.querySelector('input#investimento').value)

    var span = document.querySelector('span#lucro')

    var re = retorno()

    var bets = dutching();

    var lucro = re[0] - totalbet

    var lucrofixed = lucro.toFixed(2)
  
    
    if(lucro <= 0){
        span.style.backgroundColor = "#A85954";
    } else{
        
        span.style.backgroundColor = "#90A955";
    }
    
    
   

        var output_lucro = document.querySelector('span#lucro')

        var output_retorno = document.querySelector('span#retorno')

        
        
        var reload = document.querySelector('button#reload')
        
        
        output_retorno.innerHTML = `${re[0]}`
        
        output_lucro.innerHTML = `${lucrofixed}`
        
        reload.addEventListener("click",function(){
            location.reload();
        })

        
        var voltas = document.querySelectorAll(".voltas")

        voltas.forEach(function(volta){
            volta.innerHTML = `${re[0]}`
        }
        )
        
        var output1 = document.querySelector('span#output1');
        output1.innerHTML = `${bets[0]}`;
        var output2 = document.querySelector('span#output2')
        output2.innerHTML = `${bets[1]}`
        var output3 = document.querySelector('span#output3')
        output3.innerHTML = `${bets[2]}`
        var output4 = document.querySelector('span#output4')
        output4.innerHTML = `${bets[3]}`
        var output5 = document.querySelector('span#output5')
        output5.innerHTML = `${bets[4]}`
        var output6 = document.querySelector('span#output6')
        output6.innerHTML = `${bets[5]}`
        var output7 = document.querySelector('span#output7')
        output7.innerHTML = `${bets[6]}`
        var output8 = document.querySelector('span#output8')
        output8.innerHTML = `${bets[7]}`
        var output9 = document.querySelector('span#output9')
        output9.innerHTML = `${bets[8]}`
        var output10 = document.querySelector('span#output10')
        output10.innerHTML = `${bets[9]}`
        var output11 = document.querySelector('span#output11')
        output11.innerHTML = `${bets[10]}`
        var output12 = document.querySelector('span#output12')
        output12.innerHTML = `${bets[11]}`

        
}


/*function dutching() {
    var totalbet = Number(document.querySelector('input#investimento').value);
    var probInputs = document.querySelectorAll('input[type="number"]');
    var prob = [];

    probInputs.forEach(function(input) {
        var numero = parseFloat(input.value) || 0;
        if (numero !== 0) {
            prob.push(numero);
        }
    });

    var totalprob = prob.reduce(function(acc, curr) {
        return acc + 1 / curr;
    }, 0);

    var bets = prob.map(function(probabilidade) {
        var bet = totalbet / (probabilidade * totalprob);
        return bet;
    });

    // Multiplicar cada item de bets pelo correspondente item em probInputs
    bets = bets.map(function(bet, index) {
        return (bet * prob[index]).toFixed(2);
    });

    return bets;
} 
*/