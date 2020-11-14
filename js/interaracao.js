const botoesNumericos = document.querySelectorAll('.numerico');
const botoesOp = document.querySelectorAll('.operacao');
const botaoLimpar = document.getElementById('limpar');
const botaoRes = document.getElementById('resultado');
const telinha = document.getElementById('tela');

let valor1 = '';
let valor2 = '';
let op = null;

botoesNumericos.forEach(function(botao){
  botao.addEventListener('click', function(evento) {
    if(op === null) {
      valor1 += botao.value;
    } else {
      valor2 += botao.value;
    }
  })
});

botoesOp.forEach(function(botao){
  botao.addEventListener('click', function(evento) {
    op = botao.value;
  })
});

botaoLimpar.addEventListener('click', function(evento) {
  console.log('CLICOU NO BOTAO  LIMPAR');
});

botaoRes.addEventListener('click', function(evento) {
  // calc(valor1, valor2, op);
});
