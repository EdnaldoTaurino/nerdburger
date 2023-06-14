var total = 0;
var totalElement = document.getElementById('total');
var sacola = document.getElementById('itens-sacola');

function tamanho(item, preco) {
  var tamanho = prompt('Escolha o tamanho: 1 litro ou 2 litros');
  if (tamanho === '1' || tamanho === '1 litro') {
    adicionarItem(item + ' (' + tamanho + ' litro)', preco);
  } else if (tamanho === '2' || tamanho === '2 litros'){
    adicionarItem(item + ' ('+ tamanho +' litros)', preco * 2);
  } else {
    alert('Opção inválida. Tente novamente.');
  }
}

function sucos (item, preco){
  var escolha = prompt('Escolha o sabor 1- MORANGO, 2 - KIWI OU 3 - LARANJA');               // toLowerCase(); // toLowerCase() para deixar textos em minusculo
  if (escolha === '1'){
    adicionarItem('Suco de Morango', preco);
    } else if (escolha === '2'){
      adicionarItem('Suco de Kiwi', preco);
    } else if(escolha === '3'){
      adicionarItem('Suco de Laranja', preco);
    } else {
      alert('Opção inválida! Tente novamente.');
    }
}

function adicionarItem(item, preco) {
  var novoItem = document.createElement('li');
  novoItem.innerText = item;
  novoItem.className = 'sacola-item';
  novoItem.onclick = function() {
    sacola.removeChild(novoItem);
    total -= preco;
    atualizarTotal();
  };
  sacola.appendChild(novoItem);
  total += preco;
  atualizarTotal();
}

function atualizarTotal() {
  totalElement.innerText = 'Total: R$' + total.toFixed(2);
}

function fazerPedido() {
  if (total > 0) {
    if (confirm('Confirmar o pedido? Clique em OK ou CANCELAR para voltar')){ // confirm cria a caixa de confirmaçaõ do pedido 
      alert('Pedido realizado! Total: R$' + total.toFixed(2)); // .toFixed (2) especifica o número de casas decimais desejado.
      window.location.href = 'obrigado.html'; // Redireciona para a página de "obrigado.html"
    }
  } else {
    alert('A sacola está vazia! Adicione itens antes de fazer o pedido.');
  }
}

function exibirImagem(src) {
  var imagemPopup = document.getElementById('imagem-popup');
  var imagemPopupImg = document.getElementById('imagem-popup-img');
  imagemPopup.style.display = 'flex';
  imagemPopupImg.src = src;
}

function fecharImagem() {
  var imagemPopup = document.getElementById('imagem-popup');
  var imagemPopupImg = document.getElementById('imagem-popup-img');
  imagemPopup.style.display = 'none';
  imagemPopupImg.src = '';
}