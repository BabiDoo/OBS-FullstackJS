const nameVehicle1 = prompt("Digite o nome do Veículo 1");
const velocityVehicle1 = prompt(
  "Digite aqui a velocidade de " + nameVehicle1 + " em KM/h"
);

const nameVehicle2 = prompt("Digite o nome do veículo 2");
const velocityVehicle2 = prompt(
  "Digite aqui a velocidade de " + nameVehicle2 + " em KM/h"
);

const velocity1 = parseFloat(velocityVehicle1);
const velocity2 = parseFloat(velocityVehicle2);

if (velocity1 > velocity2) {
  alert("A velocidade de " + nameVehicle1 + " é a maior");
} else if (velocity2 > velocity1) {
  alert("A velocidade de " + nameVehicle2 + " é a maior");
} else {
  alert("Os dois veículos possuem a mesma velocidade");
}
