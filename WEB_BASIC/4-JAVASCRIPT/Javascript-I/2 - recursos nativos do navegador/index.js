let nome = "Babi";
console.log(nome); // retorna a variável nome
console.error(nome); // retorna um erro com a variável nome
console.warn(nome); // retorna um aviso com a variável nome

window.alert(nome); // mostra um alerta com a variável nome na janela do navegador
nome = window.prompt("insira o seu nome:"); // mostra um prompt na janela do navegador e atribui o valor a variável nome
console.log(nome); // retorna o novo valor da variável nome

let confirmação = window.confirm(
  "Confirma essa ação?"
); /* mostra um confirm na janela do navegador e atribui o valor
                                                           a variável confirmação */

console.log(confirmação); // retorna o que foi digitado

alert(
  "Texto sem o método .window"
); /* .window é um objeto global do navegador, 
                                        portanto todas as funções estão disponíveis sem referenciar ele manualmente */

prompt("Olá mundo");
confirm("Confirma?");
