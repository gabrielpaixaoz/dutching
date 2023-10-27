function calcular() {
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

        return bets;
    }

    var bets = dutching();
    if (bets) {
        var output = document.querySelector('section#output');
        output.innerHTML = `Resultado: ${bets.join(', ')}`;
    }
}
