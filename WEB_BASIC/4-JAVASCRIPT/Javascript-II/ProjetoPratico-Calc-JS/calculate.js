export function calculate() {
  let resultInput = document.getElementById("result"); //Input do tipo texto que mostra o resultado da operação
  const result = eval(input.value); // guarda o valor do input passado por eval para a const resultado
  resultInput.value = result; //seta o valor de resultInput com o valor que foi avaliado no eval()
}