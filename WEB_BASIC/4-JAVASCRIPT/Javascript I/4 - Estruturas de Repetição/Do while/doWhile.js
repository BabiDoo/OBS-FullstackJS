// Do while é parecido com o while, porém garante que o bloco de código seja executado
// uma vez, mesmo que a condição seja falsa

// No do while a primeira verificação da condição só acontece depois que o bloco foi executado uma vez

// FAÇA alguma coisa ENQUANTO condição

// do {
//   //...
// } while(condição)

let velocidade = 60;

do {
  alert("A velocidade do veículo é " + velocidade + "km/h");
  velocidade -= 20;
} while (velocidade > 0);

alert("velocidade final: " + velocidade + "km/h. Veículo parado");
