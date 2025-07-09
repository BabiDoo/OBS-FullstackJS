/////////////////////FUNÇÕES
import { calculate } from "./calculate.js";
import { charkeyOn } from "./charKeyOn.js";
import { clearInput } from "./clearInput.js";
import { copy } from "./copy.js";
import { themeswitcher } from "./themeswitcher.js";

const input = document.getElementById("input"); // Input da calculadora
const allowedKeys = [
  "(",
  ")",
  "/",
  "*",
  "-",
  "+",
  "9",
  "8",
  "7",
  "6",
  "5",
  "4",
  "3",
  "2",
  "1",
  "0",
  ".",
  "%",
  " ",
];

/////////////////////////PARA CLICK
//seleciona os botoes
document.querySelectorAll(".charKey").forEach(charkeyOn); //seleciona elementos da classe charkey e para cada um ele invoca a funcao charkeyOn()

//Limpa o input
document.getElementById("clear").addEventListener("click", clearInput); //seleciona o elemento com id clear e adiciona o ev listener de click para invocar a função clearInput())

//Calcula o resultado
document.getElementById("equal").addEventListener("click", calculate); //seleciona o elemento com id equal e add o ev listener de click para invocar a funcao calculate()

document.getElementById("themeSwitcher").addEventListener("click", themeswitcher);

document.getElementById("copyToClipboard").addEventListener("click", copy);

////////////////////////////PARA TECLADO
input.addEventListener("keydown", (ev) => { //add um ev listener de keydown no input que faz um procedimento de acordo com a key
  ev.preventDefault();
  if (allowedKeys.includes(ev.key)) {
    input.value += ev.key;
    return;
  }
  if (ev.key === "Backspace") {
    input.value = input.value.slice(0, -1);
    return;
  }
  if (ev.key === "Enter") {
    calculate();
    return;
  }
});