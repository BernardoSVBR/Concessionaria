// Seleciona os elementos do DOM que serão usados
const veiculoInput = document.getElementById('veiculo')
const precoInput = document.getElementById('preco')
const botaoCondicao = document.getElementById('botao-condicao')
const condicaoPagamento = document.getElementById('condicao-pagamento')

// Adiciona um listener de evento para o botão de pagamento
botaoCondicao.addEventListener('click', function(event) {
  event.preventDefault()
  
  // Obtém o valor do preço e calcula o valor da entrada e das parcelas
  const preco = parseFloat(precoInput.value)
  const entrada = preco * 0.3
  const parcela = (preco - entrada) / 12;

  // Exibe o resultado na tela
  condicaoPagamento.innerHTML = `
    <p>30% de entrada: R$ ${entrada.toFixed(2)}</p>
    <p>12 parcelas de: R$ ${parcela.toFixed(2)}</p>
  `;
});
