// Também é uma estrutura condicional, porém com uma estrutura que avalia uma expressão e testa o resultado
// contra vários casos, executando os casos correspondentes

// É possível definir um caso padrão, que sempre será executado

// Também é possível parar a execução após alguns casos

/* 
switch (expressão) {
  case "a":
  //...
  case "b":
    //...
    break;
  case "c":
  //...
  default:
  //..
}
*/

const resultado = prompt("Escolha uma alternativa:\na)\nb)\nc)");

switch (resultado) {
  case "a":
    alert("O resultado é 'a' ");
    break;
  case "b":
    alert("O resultado é 'b' ");
    break;
  case "c":
    alert("O resultado é 'c' ");
    break;
  default:
    alert("Finalizando..");
}
