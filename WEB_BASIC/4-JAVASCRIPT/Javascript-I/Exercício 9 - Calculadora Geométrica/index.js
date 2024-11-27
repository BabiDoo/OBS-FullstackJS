function triagulo() {
  const base = prompt("Digite a base");
  const altura = prompt("Digite a altura");
  return (base * altura) / 2;
}

function retangulo() {
  const base = prompt("Digite a base");
  const altura = prompt("Digite a altura");
  return base * altura;
}

function quadrado() {
  const lado = prompt("Digite aqui o lado");
  return lado * lado;
}

function trapezio() {
  const baseMaior = parseFloat(prompt("Digite a base maior"));
  const baseMenor = parseFloat(prompt("Digite a base menor"));

  
  if(baseMaior < baseMenor) {
    alert("A base menor necessita ter um valor menor que a base maior que é: " + baseMaior)
  } else {
    const altura = prompt("Digite a altura");
    return ((baseMaior + baseMenor) * altura) / 2;
  }
  
}

function circulo() {
  raio = prompt("Digite aqui o raio");
  return raio * raio * 3.14;
}

function showMenu() {
  return prompt(
    "Digite a forma geométrica que deseja calcular a área ou escolha SAIR\n 1: TRIÂNGULO\n2: RETÂNGULO\n3: QUADRADO\n4: TRAPÉZIO\n5: CÍRCULO\n6: SAIR"
  );
}

function executar() {
  let option = "";
  do {
    option = showMenu();
    switch (option) {
      case "1":
        resultado = triagulo();
        alert("A área desse triângulo é: " + resultado);
        break;
      case "2":
        resultado = retangulo();
        alert("A área desse retângulo é: " + resultado);
        break;
      case "3":
        resultado = quadrado();
        alert("A área desse quadrado é: " + resultado);
        break;
      case "4":
        resultado = trapezio();
        alert("A área desse trapézio é: " + resultado);
        break;
      case "5":
        resultado = circulo();
        alert("A área desse círculo é: " + resultado);
        break;
      case "6":
        alert("Saindo...");
        break;
      default:
        alert("Opção inválida!");
    }
  } while (menu !== "6");
}

executar();
