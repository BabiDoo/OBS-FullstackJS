const cartas = [];

do {
  menu = prompt(
    "Essas são as cartas atuais: \n" +
      cartas +
      "\nEscolha uma opção:\n1: Adicionar uma carta\n2: Puxar uma carta\n3: SAIR"
  );
  switch (menu) {
    case "1":
      newCard = prompt("Digite a carta que deseja adicionar");
      cartas.unshift(newCard);
      break;
    case "2":
      outCard = cartas.shift();
      alert("A carta retirada foi: " + outCard);
      break;
    case "3":
      alert("Saindo...");
      break;
    default:
      alert("Digite uma opção válida");
      break;
  }
} while (menu !== "3");
