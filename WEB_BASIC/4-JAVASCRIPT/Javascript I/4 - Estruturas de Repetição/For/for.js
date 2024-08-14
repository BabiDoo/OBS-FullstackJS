// Existe para abreviar o código em casos que seguem a sua estrutura específica:
// -INICIALIZAÇÃO: EXPRESSÃO EXECUTADA ANTES DE TUUDO
// -CONDIÇÃO: CONDIÇÃO TESTADA ANTES DO BLOCO DE REPETIÇÃO
// -FINALIZAÇÃO: EXPRESSÃO EXECUTADA APÓS O BLOCO DE REPETIÇÃO

// PARA inicialização; condição; finalização FAÇA alguma coisa

// Muito usado para iterar um número fixo de vezes

// for (inicialização;condição;finalização){            --- sao opcionais
//   //..
// }

//inicialização ; condição ; finalização

// for (; indice <= 3; alert("finalizando um bloco de repetição")) {
//   alert("Indice = " + indice);
//   indice++;
// }

let nome = "Babi";
for (let indice = 0; indice < nome.length; indice++) {
  alert(nome[indice]);
}
