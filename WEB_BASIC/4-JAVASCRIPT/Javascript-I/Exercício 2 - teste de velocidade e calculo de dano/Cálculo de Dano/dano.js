let damage = 0;

const attackName = prompt("Informe o nome do personagem de ataque");
const attackPower = prompt("Informe o valor do seu poder de ataque");

const defenseName = prompt("Informe o nome do persongem de defesa");
let defenseLifeQnt = prompt("Informe a sua quantidade de pontos de vida");
const defensePower = prompt("Informe o valor do seu poder de defesa");

const shield = prompt("O personagem de defesa possui escudo? Sim/Não");

if (attackPower > defensePower && shield === "Não") {
  damage = attackPower - defensePower;
  defenseLifeQnt -= damage;
} else if (attackPower > defensePower && shield === "Sim") {
  damage = (attackPower - defensePower) / 2;
  defenseLifeQnt -= damage;
}

alert("Valor do Dano: " + damage);

alert(
  attackName +
    "\nPoder de ataque: " +
    attackPower +
    "\n\n" +
    defenseName +
    "\nPontos de vida: " +
    defenseLifeQnt +
    "\nPoder de defesa: " +
    defensePower +
    "\nPossui escudo: " +
    shield
);
