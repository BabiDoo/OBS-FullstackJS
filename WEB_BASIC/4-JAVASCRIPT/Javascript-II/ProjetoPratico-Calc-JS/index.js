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
document.querySelectorAll(".charKey").forEach(charkeyOn); //seleciona elementos da classe charkey e para cada um ele invoca a funcao charkeyOn


//Limpa o input
document.getElementById("clear").addEventListener("click", clearInput); //seleciona o elemento com id clear e adiciona o ev listener de click para invocar a função clearInput)

//Calcula o resultado
document.getElementById("equal").addEventListener("click", calculate);


////////////////////////////PARA TECLADO
input.addEventListener("keydown", ev => {
    ev.preventDefault();
        if(allowedKeys.includes(ev.key)) {
            input.value += ev.key;
            return;
        }
        if (ev.key === "Backspace") {
            input.value = input.value.slice(0, -1);
            return;
        }
        if(ev.key === "Enter") {
            calculate();
            return;
        }

})
    


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

function calculate () {
    const result = eval(input.value);
    resultInput.value = result;
}
