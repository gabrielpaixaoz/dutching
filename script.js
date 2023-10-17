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
var totalAposta = 10; // Valor total da aposta 
var probabilidades = [2.37,5,54]; // Probabilidades das seleções

var apostas = calcularApostaDutching(totalAposta, probabilidades);
console.log("Apostas em cada seleção: " + apostas);


/*Neste código JavaScript, a variável probabilidades é uma matriz (ou array) que contém as probabilidades associadas a diferentes seleções em uma aposta dutching. Vou explicar a funcionalidade de probabilidades[i] e probabilidades.length separadamente:

probabilidades[i]:

probabilidades é um array que armazena as probabilidades de várias seleções.
i é uma variável que representa o índice atual durante a execução do loop.
probabilidades[i] acessa o valor no array probabilidades no índice i. Em outras palavras, quando o loop está na iteração i, probabilidades[i] é o valor da probabilidade para a seleção no índice i.
No contexto do código fornecido:

Quando i é 0, probabilidades[i] é 2.37.
Quando i é 1, probabilidades[i] é 5.
Quando i é 2, probabilidades[i] é 54.
probabilidades.length:

probabilidades.length é uma propriedade dos arrays em JavaScript que retorna o número de elementos (ou comprimento) no array probabilidades.
No código fornecido, probabilidades.length é 3, porque há três elementos no array probabilidades.
Juntando essas informações com o restante do código:

probabilidades[i] é usado para acessar as probabilidades de cada seleção durante as iterações do loop.
probabilidades.length é usado como a condição para o loop for, garantindo que o loop seja executado para cada elemento no array probabilidades.
Espero que isso ajude a esclarecer a funcionalidade dessas partes do código! Se você tiver mais perguntas ou precisar de mais alguma explicação, sinta-se à vontade para perguntar. */