function calcularEstoque(estoque, vendas) {
    let unidadesRestantes = {};
    for (let produto in estoque) {
      if (vendas[produto]) {
        unidadesRestantes[produto] = estoque[produto] - vendas[produto];
      } else {
        unidadesRestantes[produto] = estoque[produto];
      }
    }
    return unidadesRestantes;
  }
  let estoque = {
    "Arroz": 10,
    "Feijão": 15,
    "macarrão": 20
  };
  let vendas = {
    "Arroz": 3,
    "Feijão": 7
  };
  let unidadesRestantes = calcularEstoque(estoque, vendas);
  console.log(unidadesRestantes);
  
  