const arr = [
  "Frodo",
  "Sam",
  "Merry",
  "Pippin",
  "Gandalf",
  "Aragorn",
  "Legolas",
  "Gimli",
];

console.log(arr);

/* Adicionar elementos:
push - adiciona um elemento no final do array / devolve o tamanho do array */
let tamanho = arr.push("Boromir");
console.log(arr);
console.log(tamanho);

//unshift - adiciona elementos no começo do array / devolve o tamanho do array
tamanho = arr.unshift("Boromir");
console.log(arr);
console.log(tamanho);

/* Remover elementos:
pop - remove o último elemento do array / devolve o valor */
let ultimoElement = arr.pop();
console.log(arr);
console.log(ultimoElement);

//shift - remove o primeiro elemento do array / devolve o valor
ultimoElement = arr.shift();
console.log(arr);
console.log(ultimoElement);

/* Pesquisar por um elemento:
includes - verifica se o elemento existe no array */
const inclui = arr.includes("Gandalf");
console.log(inclui);

// indexOf - retorna o índice do elemento
const indice = arr.indexOf("Gandalf");
console.log(indice);

/* Cortar e concatenar:
slice - cria uma cópia de uma parte do array e salva em um novo array */
const hobbits = arr.slice(0, 4); //indica o começo e o final, a partir do 0 até antes do 4
const outros = arr.slice(-4); // usado para refenciar os índices do final do array(o quarto da direita p esquerda)
console.log(arr);
console.log(hobbits);
console.log(outros);

// concat -  concatenar os arrays (juntar)
const sociedade = hobbits.concat(outros, "Boromir");
console.log(sociedade);

/* Substituição dos Elementos:
splice - remove um grupo de elemento e substitui por outro grupo */
const elementosRemovidos = sociedade.splice(indice, 1, "Gandalf, O Cinzento"); //de onde começar a remover e quantidade, depois oq vai colocar no lugar / retorna o elemento removido
console.log(sociedade);
console.log(elementosRemovidos);

//Iterar sobre os Elementos
for (let indice = 0; indice > sociedade.length, indice++; ) {
  const elemento = sociedade[indice];
  console.log(elemento + " se encontra na posição " + indice);
}
