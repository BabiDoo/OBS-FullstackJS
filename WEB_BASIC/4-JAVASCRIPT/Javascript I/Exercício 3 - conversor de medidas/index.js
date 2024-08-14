let value = prompt("Informe em metros, o valor que deseja converter");

const convertion = prompt(
  "Escolha a opção da unidade de medida deseja converter." +
    "\n1-Milímetro(mm)\n2-Centímetro(cm)\n3-decímetro(dm)\n4-decâmetro(dam)\n5-hectômetro(hm)\n6-quilômetro(km)"
);

switch (convertion) {
  case "1":
    value = value * 10 ** 3;
    alert("Resultado: " + value);
    break;
  case "2":
    value = value * 10 ** 2;
    alert("Resultado: " + value);
    break;
  case "3":
    value = value * 10;
    alert("Resultado: " + value);
    break;
  case "4":
    value = value / 10;
    alert("Resultado: " + value);
    break;
  case "5":
    value = value / 10 ** 2;
    alert("Resultado: " + value);
    break;
  case "6":
    value = value / 10 ** 3;
    alert("Resultado: " + value);
    break;
  default:
    alert("Opção inválida");
}
