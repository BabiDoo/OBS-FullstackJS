let pacients = [];

do {
  let list = "";
  for (i = 0; i < pacients.length; i++) {
    list += i + 1 + "º" + pacients[i] + "\n";
  }
  menu = prompt(
    "Pacientes:\n" +
      list +
      "DIGITE A OPÇÃO DESEJADA:\n1: Adicionar novo paciente\n2: Consultar paciente\n3: SAIR"
  );
  switch (menu) {
    case "1":
      let newPacient = prompt("Digite aqui o nome do novo paciente");
      pacients.push(newPacient);
      break;
    case "2":
      let consultPacient = pacients.shift();
      alert("O paciente para consulta é " + consultPacient);
      break;
    case "3":
      alert("saindo...");
      break;
    default:
      alert("digite uma opção válida");
      break;
  }
} while (menu !== "3");
