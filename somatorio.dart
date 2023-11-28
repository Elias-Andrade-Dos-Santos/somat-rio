import 'dart:io';

int somatorioDivisiveis(int numero) {
  // Inicializa a variável de somatório.
  int somatorio = 0;

  // Loop que itera de 0 até (numero - 1).
  for (int i = 0; i < numero; i++) {
    // Verifica se o número atual (i) é divisível por 3 ou 5.
    if (i % 3 == 0 || i % 5 == 0) {
      // Se for divisível, adiciona ao somatório.
      somatorio += i;
    }
  }

// Retorna o resultado final.
  return somatorio;
}

void main() {
  // Solicita ao usuário que insira um número.
  stdout.write("Digite um número inteiro positivo: ");
  // Lê a entrada do usuário e converte para inteiro.
  int numero = int.parse(stdin.readLineSync()!);

  // Chama a função e armazena o resultado.
  int resultado = somatorioDivisiveis(numero);

  // Imprime o resultado.
  print(
      "O somatório dos valores divisíveis por 3 ou 5 abaixo de $numero é: $resultado");
}
