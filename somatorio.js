const readline = require('readline');

// Cria uma interface de leitura.
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Função que recebe um número inteiro positivo e retorna o somatório
// de todos os valores inteiros divisíveis por 3 ou 5 abaixo desse número.
function somatorioDivisiveis(numero) {
  let somatorio = 0;

  for (let i = 0; i < numero; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      somatorio += i;
    }
  }

  return somatorio;
}

// Solicita ao usuário que insira um número.
rl.question('Digite um número inteiro positivo: ', (numero) => {
  // Converte a entrada do usuário para inteiro.
  numero = parseInt(numero);

  // Chama a função e armazena o resultado.
  let resultado = somatorioDivisiveis(numero);

  // Imprime o resultado.
  console.log(`O somatório dos valores divisíveis por 3 ou 5 abaixo de ${numero} é: ${resultado}`);

  // Fecha a interface de leitura.
  rl.close();
});