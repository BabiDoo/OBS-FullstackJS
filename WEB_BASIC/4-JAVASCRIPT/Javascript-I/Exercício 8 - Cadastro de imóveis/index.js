let properties = 0;
let listOfProperties = [];
let menu = "";

do {
  menu = prompt(
    "QUANTIDADE DE IMÍVEIS CADASTRADOS: " +
      properties +
      "\nEscolha uma opção:\n1 - Salvar um NOVO imóvel\n2 - Mostrar imóveis SALVOS\n3 - SAIR"
  );
  switch (menu) {
    case "1":
      const newProperti = {};
      newProperti.name = prompt(
        "Digite aqui o nome do imóvel"
      );
      newProperti.owner = prompt(
        "Digite aqui o nome do proprietário do imóvel"
      );
      newProperti.bedroomsQnt = prompt(
        "Digite aqui a quantidade de quartos do imóvel"
      );
      newProperti.bathroomsQnt = prompt(
        "Digite aqui a quantidade de banheiros do imóvel"
      );
      newProperti.garage = prompt("O imóvel tem garagem?\nDigite SIM ou NÃO");
      listOfProperties.push(newProperti);
      properties++;
      break;
    case "2":
      for (let i = 0; i < listOfProperties.length; i++) {
        alert(
          listOfProperties[i].name+": \n" +
          "Nome do proprietário: " +
            listOfProperties[i].owner +
            "\nQuantidades de quartos: " +
            listOfProperties[i].bedroomsQnt +
            "\n Quantidade de banheiros: " +
            listOfProperties[i].bathroomsQnt +
            "\nPossui garagem? " +
            listOfProperties[i].garage
        );
      }
      break;
    case "3":
      alert("Encerrando...");
      break;
    default:
      alert("opção inválida!");
  }
} while (menu !== "3");
