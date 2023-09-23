// Script para aumentar a fonte
function aumentarFonte() {
    var corpo = document.querySelector('body');
    var tamanhoFonte = window.getComputedStyle(corpo).getPropertyValue('font-size');
    var novoTamanho = parseInt(tamanhoFonte) + 2;
    corpo.style.fontSize = novoTamanho + 'px';
}

// Script para aumentar o contraste
function aumentarContraste() {
    var corpo = document.querySelector('body');
    corpo.classList.toggle('alto-contraste');
}
function diminuirFonte() {
    var corpo = document.querySelector('body');
    var tamanhoFonte = window.getComputedStyle(corpo).getPropertyValue('font-size');
    var novoTamanho = parseInt(tamanhoFonte) - 2;
    corpo.style.fontSize = novoTamanho + 'px';
}
  //coloquei a forma que o senhor colocou