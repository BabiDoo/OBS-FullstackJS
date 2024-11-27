// Estruturas de repetiçao servem para executar um mesmo bloco de código várias vezes

// O while serve para criar um laço de repetição que será executado enquanto uma
// determinada condição for verdadeira

// o while e todas as outras estruturas de repetião aceitam o break para parar
// a repetião a qualquer momento

// ATENÇAO!! É importante que exista uma forma da condição se tornar falsa ou entao,
// o bloco ficará se repetindo para sempre

// WHILE = ENQUANTO condição FAÇA algo várias vezes
//  while(condição) {
//   //...
//  }

let velocidade = 80;

while (velocidade > 0) {
  alert("O carro está a " + velocidade + " km/h");
  velocidade -= 20;
  alert("Dimunuindo 20km/h");
  if (velocidade === 40) {
    break;
  }
}

alert("O carro parou.");
