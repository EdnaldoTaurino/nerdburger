var total = 0;
var totalElement = document.getElementById('total');
var sacola = document.getElementById('itens-sacola');

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
    alert('Pedido realizado! Total: R$' + total.toFixed(2));
  } else {
    alert('A sacola está vazia. Adicione itens antes de fazer o pedido.');
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
