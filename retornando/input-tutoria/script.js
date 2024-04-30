function coletarItens() {
    var formulario = document.getElementById("meuFormulario");
    var inputs = formulario.elements["itens[]"];
    var valores = [];
  
    for (var i = 0; i < inputs.length; i++) {
      valores.push(inputs[i].value);
    }
  
    console.log(valores);
  }
  
