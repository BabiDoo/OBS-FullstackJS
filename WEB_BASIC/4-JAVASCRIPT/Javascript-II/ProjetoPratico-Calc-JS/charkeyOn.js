export function charkeyOn(btn) {
  //recebe o elemento botao que contem o charkey
  btn.addEventListener("click", () => {
    //add um event listener para click e invoca a funcao anonima que guarda o valor do botao e add ele no input
    const value = btn.dataset.value;
    input.value += value;
  });
}