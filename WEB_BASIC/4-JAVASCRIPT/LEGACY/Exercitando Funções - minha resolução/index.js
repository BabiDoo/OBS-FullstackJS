let welcome = alert("Bem vindo ao menu");
let spaceshipName = prompt("Digite aqui o nome da sua nave");

let spaceshipVelocity = 0;

do {
  option = validation();
  start(option);
} while (validation != "4");

function validation() {
    return prompt(
      `Digite aqui a opção desejada\n1 - Acelerar 5km/s\n2 - Desacelerar 5km/s\n3 - Imprimir Dados de Bordo\n4 - Sair`
    );
  }

function start() {
  switch (option) {
    case "1":
      aceleration();
      break;
    case "2":
      desaceleration();
      break;
    case "3":
      data(spaceshipName, spaceshipVelocity);
      break;
    default:
      confirm("Tem certeza que deseja sair?");
      alert("Você saiu");
      break;
  }
}


function aceleration() {
  spaceshipVelocity += 5;
}

function desaceleration() {
  spaceshipVelocity -= 5;
  if (spaceshipVelocity < 0) {
    spaceshipVelocity = 0;
  }
}

function data(name, velocity) {
  alert(name + "\n" + velocity + " km/s");
}
