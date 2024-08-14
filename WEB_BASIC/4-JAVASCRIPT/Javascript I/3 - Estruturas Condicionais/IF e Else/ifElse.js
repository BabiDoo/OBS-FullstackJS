// Estrutura de controle, é uma ferramenta que permite controlar melhor o fluxo de dados da aplicação

/* IF/ELSE -> estruturas condicionais:
  Permite criar blocos de código que vao ser executados somente quando uma determinada operação lógica for verdadeira*/

// SE condição === true ENTÃO faça alguma coisa SENÃO faça outra coisa
//--------------------------------------------------------------------------------------------------------------------------

/* IF:

   if(condição) {
    //...
   }
*/

/* IF ELSE:

   if(condição) {
    //...
   } else {
    //..
   }
*/

if (6 !== 6) {
  console.log("verdadeiro");
} else {
  console.log("falso");
}

//------------------------------------------------------------------------------------------------------------------------
/* IF ELSE IF:

   if(condição) {
    //...
   } else if {
    //..
   }
*/

/* 
const idade = prompt("informe a sua idade");
if (idade > 18) {
  alert("vc é maior de idade");
} else {
  alert("vc é menor de idade");

  if (idade < 12) {
    alert("vc é criança");
  }
}
*/

/* const idade = prompt("informe a sua idade");
if (idade > 18) {
  alert("vc é maior de idade");
} else {
  alert("vc é menor de idade");

  if (idade < 12) {
    alert("vc é criança");
    if (idade < 12) {
      alert("vc é neném");
    }
  }
} */

const idade = prompt("informe a sua idade");
if (idade > 18) {
  alert("vc é maior de idade");
} else if (idade > 12) {
  alert("vc é menor de idade");
} else if (idade > 4) {
  alert("vc é criança");
} else {
  alert("vc é nene");
}

//-------------------------------------------------------------------------------------

/*
 OPERADOR TERNÁRIO
-> forma abreviada e autoavaliada do IF e else
SINTEXE:   const resultado = condição ? resultado_verdadeiro : resultado falso
*/
const resultado = 6 === 6 ? "verdadeiro" : "falso";
