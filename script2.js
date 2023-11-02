
function calcular() {
    function formatarCampoInput(input) {
        var valor = input.value.replace(/[^\d,]/g, ''); // Remove caracteres não numéricos, exceto vírgula
        valor = valor.replace(',', '.'); // Substitui vírgula por ponto como separador decimal
        if (valor.length >= 3) {
            input.value = valor.slice(0, -2) + '.' + valor.slice(-2); // Adiciona o ponto decimal
        } 
    }
    
    // Adiciona o evento input aos campos de entrada com type="number"
    var probInputs = document.querySelectorAll('input[type="number"]');
    probInputs.forEach(function(input) {
        input.addEventListener('input', function() {
            formatarCampoInput(input);
        });
    });
    function dutching() {
        var totalbet = Number(document.querySelector('input#investimento').value);
        var probInputs = document.querySelectorAll('input[type="number"]');
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
            return bet.toFixed(2);
        });
       
        
        
        return bets

    }
    function retorno() {
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
    
   
    var re = retorno()
    var bets = dutching();
    
    
    
   


        var output_retorno = document.querySelector('span#retorno')
        var output = document.querySelector('section#output');
        output.innerHTML = `Resultado: ${bets.join(', ')}`;
        output_retorno.innerHTML = `${re[0]}`

        
    
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