const ul = document.createElement('ul') //cria um elemento ul
const list = document.getElementById('lista') //acessa a tag com id="lista"
list.appendChild(ul) // adiciona ul dentro da tag com id="lista"

function escalar() {

    
    const name = document.getElementById('nome').value;
    const position = document.getElementById('posicao').value;
    const number = document.getElementById('numero').value;

       let confirmacao = confirm("Os dados estão corretos?\n" + 
        "Nome: " + name + "\n" + 
        "Número da Camisa: " + number + "\n" + 
        "Posição: " + position);

        if (confirmacao) {
        const li = document.createElement('li')
        li.id = number
        li.innerHTML = `<h4>Nome: ${name}</h4>
        <h4>Número da camisa: ${number}</h4>
        <h4>Posição: ${position}</h4>`
        ul.appendChild(li)

        document.getElementById('posicao').value = ''
        document.getElementById('nome').value = ''
        document.getElementById('numero').value = ''

    }
    
}


function remover() {
    const numeroCamisa = prompt("Digite o número da camisa do jogador que deseja remover:");
    const liList = ul.getElementsByTagName('li');

    for (let i = 0; i < liList.length; i++) {
        const li = liList[i];

        if (li.innerHTML.includes(`Número da camisa: ${numeroCamisa}`)) {
            ul.removeChild(li);
            break;
        }
    }
}
