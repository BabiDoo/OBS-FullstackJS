const number = prompt("Digite aqui um número para saber a tabuada");
let result = "Resultado: \n";

for (let i = 1; i <= 20; i++) {
  result += number + " x " + i + " = " + number * i + "\n";
}

alert(result);
