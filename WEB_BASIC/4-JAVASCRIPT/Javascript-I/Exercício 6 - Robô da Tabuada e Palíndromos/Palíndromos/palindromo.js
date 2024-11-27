const word = prompt("Digite uma palavra para saber se ela é um palíndromo");

let invert = "";

for (let i = word.length - 1; i >= 0; i--) {
  invert += word[i];
}

if (invert === word) {
  alert("Essa palavra é um palíndromo!");
} else {
  alert("Essa palavra não é um palíndromo:\n" + word);
}
