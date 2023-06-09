//Cria uma função que mostra e esconde a barra lateral

// busca os elementos da class "sidebar-button", atribui a variável button e adiciona um listener para monitorar, quando houver um click ele ativa a função hide
var button = document.querySelector('.sidebar-button').addEventListener("click", hide); 
var box = document.querySelector('.sidebar-box')
function hide(){
    box.classList.toggle('hidden') // remove a class "hidden" do "sidebar-box" assim, retirando as propriedades que foram declaradas no CSS que escondiam a barra lateral.
}