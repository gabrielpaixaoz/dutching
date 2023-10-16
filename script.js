function calcularApostaDutching(totalAposta, probabilidades) {
    var totalProbabilidade = 0;
    for (var i = 0; i < probabilidades.length; i++) {
        totalProbabilidade += 1 / probabilidades[i];
    }

    var apostas = [];
    for (var i = 0; i < probabilidades.length; i++) {
        var aposta = totalAposta / (probabilidades[i] * totalProbabilidade);
        apostas.push(aposta.toFixed(2));
    }

    return apostas;
}

// Exemplo de uso
var totalAposta = 76; // Valor total da aposta 
var probabilidades = [0.4, 0.6]; // Probabilidades das seleções

var apostas = calcularApostaDutching(totalAposta, probabilidades);
console.log("Apostas em cada seleção: " + apostas);
