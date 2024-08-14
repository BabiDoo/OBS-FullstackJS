const x = prompt("Digite aqui um número");
const y = prompt("Digite aqui outro número");
const xn = parseFloat(x);
const yn = parseFloat(y);

alert(
  "As 4 operações com esses números:\n" +
    "soma: " +
    (xn + yn) +
    "\n" +
    "subtração: " +
    (xn - yn) +
    " ou: " +
    (yn - xn) +
    "\n" +
    "multiplição: " +
    xn * yn +
    "\n" +
    "divisão: " +
    x / y +
    " ou: " +
    y / x
);
