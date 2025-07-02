const main = document.querySelector("main"); // Main container
const root = document.querySelector(":root"); // Root element for CSS variables
const input = document.getElementById("input"); // Input da calculadora
let resultInput = document.getElementById("result"); //Input do tipo texto que mostra o resultado da operação
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

/////////////////////FUNÇÕES
function clearInput() {
  input.value = ""; //set valor do input para vazio
  result.value = ""; //set valor do value para vazio
  input.focus(); //coloca o input em foco
}

function charkeyOn(btn) {
  //recebe o elemento botao que contem o charkey
  btn.addEventListener("click", () => {
    //add um event listener para click e invoca a funcao anonima que guarda o valor do botao e add ele no input
    const value = btn.dataset.value;
    input.value += value;
  });
}

function calculate() {
  const result = eval(input.value); // guarda o valor do input passado por eval para a const resultado
  resultInput.value = result; //seta o valor de resultInput com o valor que foi avaliado no eval()
}

function themeswitcher () { 
  if (main.dataset.theme === "dark") { //  se o tema estiver escuro, muda o root style e set theme = light
    root.style.setProperty("--bg-color", "#f1f5f9")
    root.style.setProperty("--border-color", "#aaa")
    root.style.setProperty("--font-color", "#212529")
    root.style.setProperty("--primary-color", "#26834a")
    main.dataset.theme = "light"
  } else { //  se o tema estiver claro, muda o root style e set theme = light
    root.style.setProperty("--bg-color", "#212529")
    root.style.setProperty("--border-color", "#666")
    root.style.setProperty("--font-color", "#f1f5f9")
    root.style.setProperty("--primary-color", "#4dff91")
    main.dataset.theme = "dark"
  }

}

function copy (ev) {
    const button = ev.currentTarget;
    if (button.innerText === 'Copy') {
        button.innerText = 'Copied!'
    }
    button.classList.add("success");
    navigator.clipboard.writeText(resultInput.value);
}