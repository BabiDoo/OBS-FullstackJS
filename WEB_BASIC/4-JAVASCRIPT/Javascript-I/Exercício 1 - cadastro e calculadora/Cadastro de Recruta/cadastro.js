let firstName = prompt("Digite aqui o seu nome:");
let fullName = prompt("Digite aqui o seu sobrenome:");
let std = prompt("Digite aqui o seu campo de estudos");
let birth = prompt("Digite aqui o seu ano de nascimento");
let currentTime = new Date();   
let year = currentTime.getFullYear();
birth = year - birth;

alert(
  "RECRUTA CADASTRADO:" +
    "\n" +
    "Nome: " +
    firstName +
    " " +
    fullName +
    "\n" +
    "Campo de estudo: " +
    std +
    "\n" +
    "Idade: " +
    birth
);